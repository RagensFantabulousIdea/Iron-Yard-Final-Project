Rails.application.routes.draw do

  # root 'application#static'

  scope :api do
    resources :equipment
    resources :shoots
    resources :assets
    resources :projects
    resources :users
    get '/login' => 'sessions#new', as: :login
    post '/login' => 'sessions#create'
    delete '/logout' => 'sessions#destroy', as: :logout
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
