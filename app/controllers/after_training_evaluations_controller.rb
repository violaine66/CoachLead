class AfterTrainingEvaluationsController < ApplicationController
  before_action :authenticate_user!
  after_action :verify_policy_scoped, only: :index  # Vérifie la politique du scope pour l'index

  def index
    @training = Training.find(params[:training_id])
    @after_training_evaluations = @training.after_training_evaluations.includes(user: :player_profil)
    @after_training_evaluations = policy_scope(AfterTrainingEvaluation)
  end

  def show
    @training = Training.find(params[:training_id])
    authorize @after_training_evaluation
  end

  def new
    @after_training_evaluation = AfterTrainingEvaluation.new
    users = User.includes(:player_profil).where(role: 'joueur')
    @training = Training.find(params[:training_id])
    authorize @after_training_evaluation
  end

  def create
    @training = Training.find(params[:training_id])
    @after_training_evaluation = AfterTrainingEvaluation.new(after_training_evaluation_params)
    @after_training_evaluation.training = @training
    @after_training_evaluation.user = current_user
    authorize @after_training_evaluation

    if @after_training_evaluation.save
      redirect_to training_path(@training), notice: 'Evaluation enregistrée.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
  def set_after_training_evaluation
    @after_training_evaluation = AfterTrainingEvaluation.find(params[:id])
  end

  def after_training_evaluation_params
    params.require(:after_training_evaluation).permit(:after_intensity, :after_fatigue_fatigue, :pleasure, :user_id, :training_id)
  end

  def set_training
    @training = Training.find(params[:training_id])
  end
end
