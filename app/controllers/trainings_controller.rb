class TrainingsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_training, only: [:show, :edit, :update, :destroy]
  after_action :verify_policy_scoped, only: :index  # Vérifie la politique du scope pour l'index

  def index
    @trainings = policy_scope(Training)
  end

  def show
    authorize @training
    if current_user.joueur?
      @pre_training_evaluation = PreTrainingEvaluation.find_by(training: @training, user: current_user)
    elsif current_user.entraineur?
      @pre_training_evaluations = PreTrainingEvaluation.includes(:user).where(training: @training)
    end

    if current_user.joueur?
      @after_training_evaluation = AfterTrainingEvaluation.find_by(training: @training, user: current_user)
    elsif current_user.entraineur?
      @after_training_evaluations = AfterTrainingEvaluation.includes(:user).where(training: @training)
    end
  end

  def new
    @training = Training.new
    authorize @training
  end

  def create
    @training = Training.new(training_params)
    authorize @training
    if @training.save
      redirect_to @training, notice: 'Entraînement créé avec succès.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    authorize @training
  end

  def update
    authorize @training

    if @training.update(training_params)
      redirect_to @training, notice: 'Entraînement mis à jour avec succès.'
    else
      render :edit
    end
  end

  def destroy
    authorize @training
    @training.destroy
    redirect_to trainings_path, notice: 'Entraînement supprimé avec succès.', status: :see_other
  end

  private
  def training_params
    params.require(:training).permit(:date, :title, :location, :description)
  end
  def set_training
    @training = Training.find(params[:id])
  end
end
