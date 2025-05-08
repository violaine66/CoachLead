class AttendancesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_attendance,  only: [:show, :edit, :update]
  before_action :set_training, only: [:edit, :update]
  after_action :verify_policy_scoped, only: :index  # Vérifie la politique du scope pour l'index

  def index
    @attendances = policy_scope(Attendance)
    redirect_to training_path(params[:training_id])
  end

  def show
    authorize @attendance
  end

  def new
    @attendance = Attendance.new
    # @users = User.includes(:player_profil).where(role: 'joueur')
    @player_profils = PlayerProfil.includes(:user).all
    @training = Training.find(params[:training_id])
    authorize @attendance
  end

  def create
    @attendance = Attendance.new(attendance_params)
    @training = Training.find(params[:training_id])
    @attendance.training = @training
    @player_profils = PlayerProfil.includes(:user).all
    authorize @attendance

    if current_user.entraineur?
      @attendance.training = @training
    else
      @attendance.user = current_user
    end

    if @attendance.save
      redirect_to training_attendances_path(@training), notice: 'La présence a été créée avec succès.'
    else
      render :new, status: :unprocessable_entity
    end
  end


  def edit
    @training = @attendance.training
    @users = User.includes(:player_profil).where(role: 'joueur')
    authorize @attendance
    end


  def update
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
    @attendance = Attendance.find_by(id: params[:id])
    if @attendance.nil?
      flash[:error] = "L'absence avec l'ID #{params[:id]} n'a pas été trouvée."
      redirect_to training_attendances_path(params[:training_id])
    end
  end

  def set_training
    @training = Training.find(params[:training_id])
  end

end
