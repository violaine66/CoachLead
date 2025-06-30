Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations' }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :admin do
    resources :exports, only: [:index] do
      collection do
        get :attendances
      end
    end
  end





  # Defines the root path route ("/")
  # root "posts#index"
  root to: 'pages#home'
  resources :trainings do
    resources :attendances, only: [:index, :show, :new, :create, :update, :edit]
    resources :pre_training_evaluations, only: [:index, :show, :new, :create]
    resources :after_training_evaluations, only: [:index, :show, :new, :create]
  end
  resources :player_profils
  # resources :users do
  #   resources :job_load_evaluations, only: [:new, :create, :show]
  # end
  resources :job_load_evaluations, only: [:index, :show, :new, :create]
  resources :match_performances, only: [:index, :show, :new, :create]
  # config/routes.rb
  devise_scope :user do
    get   'user/edit_avatar',   to: 'users/registrations#edit_avatar',   as: :edit_avatar_user
    patch 'user/update_avatar', to: 'users/registrations#update_avatar', as: :update_avatar_user
  end

end
