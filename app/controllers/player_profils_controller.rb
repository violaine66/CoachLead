class PlayerProfilsController < ApplicationController
  before_action :authenticate_user!
  after_action :verify_policy_scoped, only: :index  # Vérifie la politique du scope pour l'index
  before_action :authorize_user, only: :index  # Vérifie l'autorisation d'accès à l'index

  def index
    @player_profils = policy_scope(PlayerProfil)

  end

  def show
    @player_profil = PlayerProfil.find(params[:id])
    authorize @player_profil
  end

  def new
    @player_profil = PlayerProfil.new
  end

  def create
    @player_profil = PlayerProfil.new(player_profile_params)
    @player_profil.user = current_user # Assuming you have a current_user method
    if @player_profil.save
      redirect_to @player_profil, notice: 'Player profile was successfully created.'
    else
      render :new
    end
  end

  def edit
    @player_profil = PlayerProfil.find(params[:id])
  end

  def update
    @player_profil = PlayerProfil.find(params[:id])
    if @player_profil.update(player_profil_params)
      redirect_to @player_profil, notice: 'Profil du joueur mis à jour'
    else
      render :edit
    end
  end

  def destroy
    @player_profil = PlayerProfil.find(params[:id])
    @player_profil.destroy
    redirect_to player_profils_url, notice: 'Profil du joueur supprimé.'
  end

  private
  def player_profil_params
    params.require(:player_profil).permit(:age, :weight, :children_count)
  end
  def authorize_user
    # Vérifie si l'utilisateur connecté est un 'entraineur'
    authorize :player_profil, :index?  # Cela utilise la politique définie dans PlayerProfilPolicy
  end
end
