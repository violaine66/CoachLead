# © 2025 Violaine Soulas Tous droits réservés.
#  Propriété exclusive de Violaine Soulas.
#  Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
class Training < ApplicationRecord
  has_many :pre_training_evaluations
  has_many :after_training_evaluations

 has_many :users, through: :pre_training_evaluations
 has_many :users, through: :after_training_evaluations

  has_many :attendances, dependent: :destroy

end
