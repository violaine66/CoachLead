class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # Associations


  has_many :pre_training_evaluations
  has_many :trainings, through: :pre_training_evaluations, source: :training

  has_many :after_training_evaluations
  has_many :trainings, through: :after_training_evaluations, source: :training

  has_many :attendances
  has_many :job_load_evaluations
  has_many :match_performances
  has_one :player_profil, dependent: :destroy
  has_one_attached :avatar

  # Validations
  validates :email, presence: true, uniqueness: true
  validates :pseudo, presence: true, uniqueness: true
  enum role: { joueur: "joueur", entraineur: "entraineur"}
  def full_name
    if player_profil.present?
      "#{player_profil.first_name} #{player_profil.last_name}"
    end
end
