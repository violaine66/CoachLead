class Training < ApplicationRecord
  has_many :training_evaluations
  has_many :users, through: :training_evaluations
  has_many :attendances

  after_create :create_participations_for_all_players

  private

  def create_participations_for_all_players
    User.joueur.find_each do |player|
      TrainingEvaluation.create(training: self, user: player)
    end
  end
end
