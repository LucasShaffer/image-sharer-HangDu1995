Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.htm
  resources :images, only: %i[show new create index destroy edit update]

  root 'images#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#home'

  resources :feedbacks, only: [:new]
end
