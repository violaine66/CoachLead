class Training < ApplicationRecord
  has_many :training_participations
  has_many :users, through: :training_participations
  has_many :attendances

  after_create :create_participations_for_all_players

  private

  def create_participations_for_all_players
    User.joueur.find_each do |player|
      TrainingParticipation.create!(training: self, user: player)
    end
  end
end
