Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do 
    resources :checkouts 
    resources :books
    resources :mediaels
  end
end
