Rails.application.routes.draw do
  namespace :api do 
    # only go two levels deep with parent 
    resources :lists do 
      resources :todos 
    end

    # third level is to do parent and child again
    # except for the routes that we are repeating 
    resources :todos, except: [:index, :show, :create, :update, :destroy] do
      resources :notes
    end

    #fourth level 
    # resources :notes, except: [:index, :show, :create, :update, :destroy] do
    #   resources :comments
    # end

  end

end
