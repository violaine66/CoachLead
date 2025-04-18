class PlayerProfilesController < ApplicationController
  def index
    @player_profils = PlayerProfil.all
  end

  def show
    @player_profil = PlayerProfil.find(params[:id])
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
    @player_profil = PlayerProfi.find(params[:id])
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
end
