Rails.application.routes.draw do

  namespace 'api' do

  end

  root 'buddybuddy#index'

  match '*path' => 'buddybuddy#index',
    format: false,
    via: [:get, :post]

end