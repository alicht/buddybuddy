Rails.application.routes.draw do

  namespace 'api', defaults: { format: 'json' }, constraints: { format: :json } do
    resources :users
    get "pairings/:pairing_id/users", to: "users#by_pairing_id"
    resources :pairings do
      get :generate, on: :collection
    end
    get "users/:user_id/pairings", to: "pairings#by_user_id"
  end

  root 'buddybuddy#index'

  match '*path' => 'buddybuddy#index',
    format: false,
    via: [:get, :post]

end