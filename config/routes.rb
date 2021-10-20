Rails.application.routes.draw do
  resources :users
  resources :posts
  resources :comments

  resources :post_categories
  resources :categories

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  patch "/edit-profile", to: "users#update" 

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
