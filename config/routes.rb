Rails.application.routes.draw do
  devise_for :users
  root "projects#index"
  post 'livesearch/suggestions'
  post 'livesearch/index'
  resources :projects
 
end
