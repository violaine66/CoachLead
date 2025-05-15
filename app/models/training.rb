# © 2025 Violaine Soulas Tous droits réservés.
#  Propriété exclusive de Violaine Soulas.
#  Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
class Training < ApplicationRecord
  has_many :pre_training_evaluations
  has_many :after_training_evaluations

 has_many :users, through: :pre_training_evaluations
 has_many :users, through: :after_training_evaluations

  has_many :attendances

  after_create :create_participations_for_all_players

  private

  def create_participations_for_all_players
    User.joueur.find_each do |player|
      PreTrainingEvaluation.create(training: self, user: player)
    end
  end
end
