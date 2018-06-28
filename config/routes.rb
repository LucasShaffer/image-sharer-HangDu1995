Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#home'

  namespace :api do
    resources :feedbacks, only: [:create]
  end
end
