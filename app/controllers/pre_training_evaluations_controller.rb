class PreTrainingEvaluationsController < ApplicationController
  before_action :authenticate_user!
  after_action :verify_policy_scoped, only: :index  # Vérifie la politique du scope pour l'index

  def index
    @training = Training.find(params[:training_id])
    @pre_training_evaluations = @training.pre_training_evaluations.includes(user: :player_profil)
    @pre_training_evaluations = policy_scope(PreTrainingEvaluation)
  end

  def show
    @training = Training.find(params[:training_id])
    authorize @pre_training_evaluation
  end

  def new
    @pre_training_evaluation = PreTrainingEvaluation.new
    users = User.includes(:player_profil).where(role: 'joueur')
    @training = Training.find(params[:training_id])
    authorize @pre_training_evaluation
  end



    def create
      @training = Training.find(params[:training_id])
      @pre_training_evaluation = PreTrainingEvaluation.new(pre_training_evaluation_params)
      @pre_training_evaluation.training = @training
      @pre_training_evaluation.user = current_user
      authorize @pre_training_evaluation

      if @pre_training_evaluation.save
        redirect_to training_path(@training), notice: 'Evaluation enregistrée.'
      else
        render :new, status: :unprocessable_entity
      end
    end

  private
  def set_pre_training_evaluation
    @pre_training_evaluation = PreTrainingEvaluation.find(params[:id])
  end

  def pre_training_evaluation_params
    params.require(:pre_training_evaluation).permit(:present, :cognitive_fatigue, :physical_fatigue,:mood, :user_id, :training_id)
  end

  def set_training
    @training = Training.find(params[:training_id])
  end
end
