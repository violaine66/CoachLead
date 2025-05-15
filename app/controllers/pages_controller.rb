# © 2025 Violaine Soulas Tous droits réservés.
#  Propriété exclusive de Violaine Soulas.
#  Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
class PagesController < ApplicationController
  # skip_before_action :authenticate_user!, only: [ :home ]
  before_action :set_player_profil, only: [:home]

  def home
    @next_training = Training.where("date >= ?", Date.today).order(:date).first

  end
  def index
  end

  def set_player_profil
    @player_profil = current_user.player_profil # Ou une autre logique pour obtenir le profil du joueur
  end
end
