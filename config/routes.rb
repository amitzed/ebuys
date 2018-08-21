Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # =================================================
  #             ROUTES FOR ITEMS MODEL
  # =================================================
  get '/items', to: 'items#index'
  get '/items/:id', to: 'items#show'
  post '/items', to: 'items#create'
  delete '/items/:id', to: 'items#delete'
  put '/items/:id', to: 'items#update'

  # =================================================
  #            ROUTES FOR USERS MODEL
  # =================================================
  # get '/users', to: 'users#index'
  # get '/users/:id', to: 'users#show'
  # post '/users', to: 'users#create'
  # delete '/users/:id', to: 'users#delete'
  # put '/users/:id', to: 'users#update'

end
