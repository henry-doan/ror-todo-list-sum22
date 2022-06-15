Rails.application.routes.draw do
  namespace :api do 
    # only go two levels deep with parent 
    resources :lists do 
      resources :todos
    end
  end

end
