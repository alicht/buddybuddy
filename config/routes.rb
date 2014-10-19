Rails.application.routes.draw do
  namespace 'api', defaults: { format: 'json' }, constraints: { format: :json } do
    resources :users
    resources :pairings do
      get :generate, on: :collection
    end
    resources :logs
  end

  root 'buddybuddy#index'
end