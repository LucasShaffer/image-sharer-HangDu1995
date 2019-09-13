Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.htm
  resources :images, only: %i[show new create index]

  root 'images#index'

  get '/tagged', to: 'images#tagged', as: :tagged
end
