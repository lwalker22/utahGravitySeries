Rails.application.routes.draw do
  namespace :api do
    resources :venues do
      resources :results 
    end
  end  
end