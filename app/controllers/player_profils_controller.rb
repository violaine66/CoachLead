# © 2025 Violaine Soulas Tous droits réservés.
#  Propriété exclusive de Violaine Soulas.
#  Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
class PlayerProfilsController < ApplicationController
  before_action :set_player_profil, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  after_action :verify_policy_scoped, only: :index  # Vérifie la politique du scope pour l'index
  before_action :authorize_user, only: :index  # Vérifie l'autorisation d'accès à l'index

  def index
      @player_profils = policy_scope(PlayerProfil).includes(photo_attachment: :blob)
  end

  def show
    authorize @player_profil
  end

  def new
    @player_profil = PlayerProfil.new
    authorize @player_profil

  end

  def create
    @player_profil = PlayerProfil.new(player_profil_params)
    authorize @player_profil
    # @player_profil.user = current_user
    unique_email = "provisoire+#{SecureRandom.hex(3)}@example.com"
    common_password = "snaf2025"
    first_name = params.dig(:player_profil, :first_name).to_s.downcase.strip
    last_name  = params.dig(:player_profil, :last_name).to_s.downcase.strip

    base_pseudo = "#{first_name}-#{last_name}".gsub(/\s+/, "_")
    pseudo = generate_unique_pseudo(base_pseudo)


    user = User.new(
      email: unique_email,
      password: common_password,
      password_confirmation: common_password,
      pseudo: pseudo,
      role: "joueur"
    )

    if user.save
      @player_profil = user.build_player_profil(player_profil_params)

      if @player_profil.save
        redirect_to @player_profil, notice: "Profil et utilisateur créés avec succès."
      else
        user.destroy
        puts @player_profil.errors.full_messages
        render :new, status: :unprocessable_entity
      end
    else
      puts user.errors.full_messages
      render :new, status: :unprocessable_entity
    end

  end

  def edi
    authorize @player_profil
  end

  def update
    authorize @player_profil
    if @player_profil.update(player_profil_params)
      redirect_to @player_profil, notice: 'Profil du joueur mis à jour'
    else
      render :edit
    end
  end

  def destroy
    authorize @player_profil
    @player_profil.destroy
    redirect_to player_profils_url, notice: 'Profil du joueur supprimé.', status: :see_other
  end

  private
  def set_player_profil
    @player_profil = PlayerProfil.includes(user: { attendances: :training }).find(params[:id])
  end

  def player_profil_params
    params.require(:player_profil).permit(:age, :weight, :children_count, :job, :photo, :first_name, :last_name)
  end

  def authorize_user
    # Vérifie si l'utilisateur connecté est un 'entraineur'
    authorize :player_profil, :index?  # Cela utilise la politique définie dans PlayerProfilPolicy
  end

  def generate_unique_pseudo(base)
  pseudo = base
  count = 1

  while User.exists?(pseudo: pseudo)
    pseudo = "#{base}_#{count}"
    count += 1
  end

  pseudo
end
end
