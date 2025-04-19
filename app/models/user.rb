class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # Associations
  has_many :trainings, through: :training_participations
  has_many :training_participations
  has_many :attendances
  has_many :job_load_evaluations
  has_many :match_performances
  has_one :player_profil, dependent: :destroy

  # Validations
  validates :email, presence: true, uniqueness: true
  validates :pseudo, presence: true, uniqueness: true
  enum role: { joueur: "joueur", entraineur: "entraineur"}
end
