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
    @player_profils = PlayerProfil.all
    @stats_by_player = @match_performances
    .group_by(&:user)
    .transform_values do |performances|
      {
        total_played: performances.count { |p| p.played },
        total_yellow_cards: performances.sum { |p| p.yellow_card.to_i }
      }
    end
  end

  def show
    authorize @match_performance
  end

  def new
    @match_performance = MatchPerformance.new
    @player_profils = PlayerProfil.all
    authorize @match_performance

  end

  def create
    @match_performance = MatchPerformance.new(match_performance_params)
    authorize @match_performance

    # Vérifier si l'utilisateur sélectionné a un profil associé
    @user = User.find_by(id: @match_performance.user_id)
    if @user.nil? || @user.player_profil.nil?
      flash[:alert] = "L'utilisateur sélectionné n'a pas de profil associé."
      render :new and return
    end

    if @match_performance.save
      redirect_to @match_performance, notice: 'La performance du match a été créée avec succès.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
  def match_performance_params
    params.require(:match_performance).permit(:match_date,:commentaires, :played, :yellow_card, :user_id, :buts, :passes)
  end

  def set_match_performance
    @match_performance = MatchPerformance.find(params[:id])
  end
end
