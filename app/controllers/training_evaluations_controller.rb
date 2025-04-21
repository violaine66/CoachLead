class TrainingEvaluationsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_training

  def new
    @training_evaluation = @training.training_evaluations.new(user: current_user)
    authorize @training_evaluation

    # Vérifier que l'entraînement à venir est bien celui qu'on doit évaluer
    prochain_training = Training.where('date > ?', Time.current).order(:date).first
    unless @training == prochain_training
      redirect_to root_path, alert: "Tu ne peux évaluer que l'entraînement à venir."
      return
    end

    # Vérification si l'évaluation avant a déjà été soumise
    if training_evaluation_exists?(:before)
      redirect_to root_path, alert: "Tu as déjà évalué l'entraînement avant."
      return
    end
  end

  def create
    # Déterminer si l'évaluation concerne l'avant ou l'après de l'entraînement
    phase = params[:evaluation_phase]

    # Créer l'évaluation avant
    if phase == 'before'
      @training_evaluation = @training.training_evaluations.new(training_evaluation_params_before)
      @training_evaluation.user = current_user
      authorize @training_evaluation

      if @training_evaluation.save
        redirect_to new_training_evaluation_path(training_id: @training.id, evaluation_phase: 'after'), notice: "Évaluation avant l'entraînement enregistrée avec succès."
      else
        render :new, status: :unprocessable_entity
      end

    # Créer l'évaluation après
    elsif phase == 'after'
      @training_evaluation = @training.training_evaluations.new(training_evaluation_params_after)
      @training_evaluation.user = current_user
      authorize @training_evaluation

      if @training_evaluation.save
        redirect_to trainings_path, notice: "Évaluation après l'entraînement enregistrée avec succès."
      else
        render :new, status: :unprocessable_entity
      end
    end
  end

  private

  def set_training
    @training = Training.find(params[:training_id])
  end

  def training_evaluation_params_before
    params.require(:training_evaluation).permit(:present, :cognitive_fatigue, :physical_fatigue, :mood)
  end

  def training_evaluation_params_after
    params.require(:training_evaluation).permit(:after_intensity, :after_fatigue, :pleasure)
  end

  def training_evaluation_exists?(phase)
    if phase == :before
      # Vérifier si l'évaluation avant existe déjà
      TrainingEvaluation.exists?(user: current_user, training: @training, present: [true, false], cognitive_fatigue: nil)
    elsif phase == :after
      # Vérifier si l'évaluation après existe déjà
      TrainingEvaluation.exists?(user: current_user, training: @training, after_intensity: nil)
    end
  end
end
