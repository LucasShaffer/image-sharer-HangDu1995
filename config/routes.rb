Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'images/index'

  resources :images, only: %i[show new create index]

  root 'images#index'
end
