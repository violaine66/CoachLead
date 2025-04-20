class AttendancesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_attendance
  after_action :verify_policy_scoped, only: :index  # Vérifie la politique du scope pour l'index

  def index
    @attendances = policy_scope(Attendance)
    @training = Training.find(params[:training_id])
    @attendances = @training.attendances
  end

  def show
    authorize @attendance
  end

  def new
    @attendance = Attendance.new
    @users = User.all
    @training = Training.find(params[:training_id])
    authorize @attendance
  end

  def create
    @attendance = Attendance.new(attendance_params)
    authorize @attendance

    # Vérifier si l'utilisateur sélectionné a un profil associé
    @training = Training.find(params[:training_id])
    @attendance.training = @training
    @user = User.find_by(id: @attendance.user_id)
    if @user.nil? || @user.player_profil.nil?
      flash[:alert] = "L'utilisateur sélectionné n'a pas de profil associé."
      render :new and return
    end

    if @attendance.save
      redirect_to training_attendances_path(@training), notice: 'La présence a été créée avec succès.'
    else
      render :new
    end
  end

  def edit
    @attendance = Attendance.find(params[:id])
    @training = Training.find(params[:training_id])
    authorize @attendance
  end

  def update
    @attendance = Attendance.find(params[:id])
    @training = Training.find(params[:training_id])
    authorize @attendance

    if @attendance.update(attendance_params)
      redirect_to training_attendances_path(@training), notice: 'La présence a été mise à jour avec succès.'
    else
      render :edit
    end
  end

  private
  def attendance_params
    params.require(:attendance).permit(:status, :user_id, :training_id)
  end

  def set_attendance
    @attendance = Attendance.find(params[:id])
  end

end
