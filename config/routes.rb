Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions' }
  namespace 'api', defaults: { format: 'json' }, constraints: { format: :json } do
    resources :users
    resources :pairings do
      get :generate, on: :collection
    end
    resources :logs
  end
  root 'buddybuddy#index'
  get '*path' => 'buddybuddy#index', :format => false
end
