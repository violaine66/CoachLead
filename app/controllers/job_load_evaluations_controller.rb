# © 2025 Violaine Soulas Tous droits réservés.
#  Propriété exclusive de Violaine Soulas.
#  Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
class JobLoadEvaluationsController < ApplicationController
  before_action :set_job_load_evaluation, only: [:show]
  before_action :authenticate_user!
  after_action :verify_policy_scoped, only: :index  # Vérifie la politique du scope pour l'index

  def index

      @player_profils = PlayerProfil.all
      @job_load_evaluations = policy_scope(JobLoadEvaluation).includes(user: :player_profil) # Évite les requêtes N+1


end

  def show
    authorize @job_load_evaluation
  end

  def new
    @job_load_evaluation = JobLoadEvaluation.new
    @player_profils = PlayerProfil.all
    authorize @job_load_evaluation
  end
  def create
    @job_load_evaluation = JobLoadEvaluation.new(job_load_evaluation_params)
    authorize @job_load_evaluation

    # Associe l'évaluation de charge de travail à l'utilisateur actuel ou à un joueur spécifique
    @job_load_evaluation.user = if current_user.entraineur?
                                  User.find(job_load_evaluation_params[:user_id]) # Associe le joueur sélectionné par l'entraîneur
                                else
                                  current_user # Si c'est le joueur lui-même, on utilise l'utilisateur connecté
                                end

    if @job_load_evaluation.save
      redirect_to @job_load_evaluation, notice: 'L’évaluation a été créée avec succès.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
  def job_load_evaluation_params
    params.require(:job_load_evaluation).permit(:period, :rating, :user_id)
  end

  def set_job_load_evaluation
    @job_load_evaluation = JobLoadEvaluation.find(params[:id])
  end
end
