# © 2025 Violaine Soulas Tous droits réservés.
#  Propriété exclusive de Violaine Soulas.
#  Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
class MatchPerformancesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_match_performance, only: [:show]
  after_action :verify_policy_scoped, only: :index  # Vérifie la politique du scope pour l'index

  def index
  @match_performances = policy_scope(MatchPerformance).includes(user: :player_profil)
  @match_performance = MatchPerformance.new

  @users = User.includes(:player_profil).where(role: 'joueur')

  @stats_by_player = @match_performances
    .group_by(&:user)
    .transform_values do |performances|
      {
        total_played: performances.count { |p| p.played },
        total_buts: performances.sum { |p| p.buts.to_i },
        total_passes: performances.sum { |p| p.passes.to_i },
        total_yellow_cards: performances.sum { |p| p.yellow_card.to_i }
      }
    end
end


  def show
    authorize @match_performance
  end

def new
  @match_performance = MatchPerformance.new
    authorize @match_performance    # <-
  @player_profils = PlayerProfil.all
  @existing_match_dates = MatchPerformance.select(:match_date).distinct.pluck(:match_date).compact.sort || []
end

def create
  user_ids = params[:user_ids] || []

  @existing_match_dates = MatchPerformance.select(:match_date).distinct.pluck(:match_date).compact.sort
  @player_profils = PlayerProfil.all

  match_date = if params[:existing_match_date].present?
                 Date.parse(params[:existing_match_date])
               else
                 match_performance_params[:match_date]
               end

  # Préparer les params corrigés
  safe_params = match_performance_params.to_h

  # Convertir les attributs numériques vides en nil ou 0
  [:yellow_card, :played, :buts, :passes].each do |field|
    if safe_params[field].blank?
      safe_params[field] = 0  # ou nil selon ta logique métier
    else
      safe_params[field] = safe_params[field].to_i
    end
  end

  authorize MatchPerformance

  performances = user_ids.map do |user_id|
    MatchPerformance.new(
      user_id: user_id,
      match_date: match_date,
      played: true,
      buts: safe_params[:buts],
      passes: safe_params[:passes],
      yellow_card: safe_params[:yellow_card],
      commentaires: safe_params[:commentaires],
      tempsde_jeu: safe_params[:tempsde_jeu],
      note_match: safe_params[:note_match],
      yellow_card_reason: safe_params[:yellow_card_reason]
    )
  end

  if performances.all?(&:save)
    redirect_to match_performances_path, notice: "Performances créées avec succès."
  else
    performances.each do |performance|
      Rails.logger.error "MatchPerformance errors: #{performance.errors.full_messages.join(', ')}" unless performance.valid?
    end

    @match_performance = MatchPerformance.new(match_performance_params)

    flash.now[:alert] = "Erreur lors de la création des performances."
    render :new
  end
end

def edit
  @match_performance = MatchPerformance.find(params[:id])
  authorize @match_performance

end

def update
  @match_performance = MatchPerformance.find(params[:id])
  authorize @match_performance
  if @match_performance.update(match_performance_params)
    redirect_to match_performance_path(@match_performance), notice: 'Performance mise à jour avec succès.'
  else
    flash.now[:alert] = "Erreur lors de la mise à jour de la performance."
    render :edit
  end
end

private

def match_performance_params
  params.require(:match_performance).permit(:match_date, :played, :buts, :passes, :yellow_card, :commentaires, :tempsde_jeu, :note_match, :yellow_card_reason)
end



  def set_match_performance
    @match_performance = MatchPerformance.find(params[:id])
  end
end
