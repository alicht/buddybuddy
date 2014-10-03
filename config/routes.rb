Rails.application.routes.draw do

  namespace 'api' do
    resources :users
    resources :pairings
  end

  root 'buddybuddy#index'

  match '*path' => 'buddybuddy#index',
    format: false,
    via: [:get, :post]

end