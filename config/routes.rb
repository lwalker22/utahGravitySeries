Rails.application.routes.draw do
  namespace :api do
    resources :venues
  end  
end