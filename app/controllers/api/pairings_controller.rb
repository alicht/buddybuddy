class Api::PairingsController < ApplicationController

  def index
    @users = Pairing.all
    render json: @users
  end

end