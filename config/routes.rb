Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  resources :trainings do
    resources :attendances, only: [:index, :show, :new, :create, :update, :edit]
    resources :pre_training_evaluations, only: [:new, :create, :show, :index]
    resources :after_training_evaluations, only: [:new, :create, :show, :index]

  end
  resources :player_profils
  resources :job_load_evaluations, only: [:index, :show, :new, :create]
  resources :match_performances, only: [:index, :show, :new, :create]
end
