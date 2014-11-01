Rails.application.routes.draw do
  namespace 'api', defaults: { format: 'json' }, constraints: { format: :json } do
    resources :users
    resources :pairings do
      get :generate, on: :collection
    end
    resources :logs
    resources :favorites
  end
  root 'buddybuddy#index'
  get '*path' => 'buddybuddy#index', :format => false
end
