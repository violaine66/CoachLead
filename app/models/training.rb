# © 2025 Violaine Soulas Tous droits réservés.
#  Propriété exclusive de Violaine Soulas.
#  Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
class Training < ApplicationRecord
  has_many :pre_training_evaluations
  has_many :after_training_evaluations

  has_many :users, through: :pre_training_evaluations
  has_many :users, through: :after_training_evaluations

  has_many :attendances, dependent: :destroy

  def prepa_materiel
    present_players = attendances.includes(:user).where(present: true).map(&:user).uniq

    selected_players = present_players.sample(6)

    selected_players.map do |player|
      player.player_profil&.full_name || player.name # fallback si pas de profil
    end.join(", ")
  end



end
