class Training < ApplicationRecord
  has_many :pre_training_evaluations
  has_many :after_training_evaluations

  has_many :users_pre_eval, through: :pre_training_evaluations, source: :user
  has_many :users_post_eval, through: :after_training_evaluations, source: :user

  has_many :attendances

  after_create :create_participations_for_all_players

  private

  def create_participations_for_all_players
    User.joueur.find_each do |player|
      PreTrainingEvaluation.create(training: self, user: player)
    end
  end
end
