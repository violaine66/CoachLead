class TrainingEvaluationsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_training_evaluation, only: [:show]
  before_action :set_training, only: [:new, :create]
  after_action :verify_policy_scoped, only: :index

  def index
    @training_evaluations = policy_scope(TrainingEvaluation)
  end

  def show
    authorize @training_evaluation
  end

  def new
    @training_evaluation = TrainingEvaluation.new
    @users = User.includes(:player_profil).where(role: 'joueur')
    @training = Training.find(params[:training_id])
    authorize @training_evaluation
  end

  def create
    @training_evaluation = TrainingEvaluation.new(training_evaluation_params)
    authorize @training_evaluation

    # Vérifier si l'utilisateur sélectionné a un profil associé
    @training = Training.find(params[:training_id])
    @training_evaluation.training = @training
    @user = User.find_by(id: @training_evaluation.user_id)
    if @user.nil? || @user.player_profil.nil?
      flash[:alert] = "L'utilisateur sélectionné n'a pas de profil associé."
      render :new and return
    end

    if current_user.entraineur?
      @training_evaluation.training = @training
    else
      # Si c'est le joueur qui soumet, on associe automatiquement son propre profil
      @training_evaluation.user = current_user
      @training_evaluation.training = @training
    end

    if @training_evaluation.save
      redirect_to training_training_evaluations_path(@training), notice: 'L\'évaluation a été créée avec succès.'
    else
      render :new
    end
  end

  private
  def training_evaluation_params
    params.require(:training_evaluation).permit(:cognitive_fatigue, :physical_fatigue, :mood, :after_intensity, :after_fatigue, :pleasure, :user_id, :training_id)
  end

  def set_training_evaluation
    @training_evaluation = TrainingEvaluation.find(params[:id])
  end

  def set_training
    @training = Training.find(params[:training_id])
  end
end
