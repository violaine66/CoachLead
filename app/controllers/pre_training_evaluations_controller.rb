class PreTrainingEvaluationsController < ApplicationController
  before_action :authenticate_user!
  after_action :verify_policy_scoped, only: :index  # Vérifie la politique du scope pour l'index

  def index
    @pre_training_evaluations = policy_scope(PreTrainingEvaluation)
  end

  def show
    authorize @pre_training_evaluation
  end

  def new
    @pre_training_evaluation = PreTrainingEvaluation.new
    users = User.includes(:player_profil).where(role: 'joueur')
    @training = Training.find(params[:training_id])
    authorize @pre_training_evaluation
  end



    def create
      @pre_training_evaluation = PreTrainingEvaluation.new
      authorize @pre_training_evaluation

      @training = Training.find(params[:training_id])
      @pre_training_evaluation.training = @training


      @user = User.find_by(id: @pre_training_evaluation.user_id)
      if @user.nil? || @user.player_profil.nil?
        flash[:alert] = "L'utilisateur sélectionné n'a pas de profil associé."
        render :new and return
      end
      if current_user.entraineur?
        @pre_training_evaluation.training = @training
      else
        # Si c'est le joueur qui soumet, on associe automatiquement son propre profil
        @pre_training_evaluation.user = current_user
        @pre_training_evaluation.training = @training
      end
      if @pre_training_evaluation.save
        redirect_to training_pre_training_evaluations_path(@pre_training_evaluation.training), notice: 'Evaluation enregistrée.'
      else
        render :new
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
