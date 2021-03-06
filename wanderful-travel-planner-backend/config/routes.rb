Rails.application.routes.draw do
  post "/api/v1/login", to: "api/v1/auth#login"
  delete "/api/v1/logout", to: "api/v1/auth#destroy"
  post "/api/v1/signup", to: "api/v1/users#create"
  get "/api/v1/get_current_user", to: "api/v1/auth#get_current_user"
  namespace :api do
    namespace :v1 do
      resources :users 
      resources :trips
      resources :flights
      resources :accommodations
      resources :events
      resources :packing_list_items
        
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    end
  end
end
