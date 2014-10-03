class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def by_pairing_id
    @users = Pairing.find(params[:pairing_id]).users
    render json: @users
  end

end