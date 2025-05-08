class JobLoadEvaluationsController < ApplicationController
  before_action :set_job_load_evaluation, only: [:show]
  before_action :authenticate_user!
  after_action :verify_policy_scoped, only: :index  # Vérifie la politique du scope pour l'index

  def index
    @player_profils = PlayerProfil.all
    @job_load_evaluations = policy_scope(JobLoadEvaluation)
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
    # Associe l'évaluation de charge de travail à l'utilisateur actuel
    @job_load_evaluation.user = current_user
    if @job_load_evaluation.save
      redirect_to @job_load_evaluation, notice: 'Job load evaluation was successfully created.'
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
