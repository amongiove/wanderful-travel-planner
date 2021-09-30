#TODO: make routes more specific so only have what are using

Rails.application.routes.draw do
  get "/api/v1/login", to: "auth#login"
  namespace :api do
    namespace :v1 do
      resources :users
      resources :trips
      resources :flights
      resources :accomodations
      resources :events
      resources :packing_list_items
      resources :messages
        
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    end
  end
end
