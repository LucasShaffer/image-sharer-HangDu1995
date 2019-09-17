Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.htm
  resources :images, only: %i[show new create index destroy edit]

  root 'images#index'

  patch '/images/:id', to: 'images#update', as: 'update_image'
end
