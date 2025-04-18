class Training < ApplicationRecord
  has_many :training_participations
  has_many :users, through: :training_participations
  has_many :attendances
end
