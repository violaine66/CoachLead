class PagesController < ApplicationController
  # skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @next_training = Training.where("date >= ?", Date.today).order(:date).first
  end
  def index
  end
end
