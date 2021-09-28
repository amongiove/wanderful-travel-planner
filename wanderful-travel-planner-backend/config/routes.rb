#TODO: make routes more specific so only have what are using

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :trips
      resources :flights

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    end
  end
end
