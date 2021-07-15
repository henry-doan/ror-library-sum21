Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do 
    resources :checkouts do
      resources :leases
      get '/avalItems', to: "leases#avalItems"
    end
    
    resources :items
  end
end
