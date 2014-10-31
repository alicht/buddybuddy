class Api::UsersController < ApplicationController

  def index
    # restrict on pairing id.
    @users = User.all
    @users = @users.select{|user| user.pairing_ids.include?(params[:pairing_id].to_i)} if params[:pairing_id]
    render json: @users
  end

  def update
    user = User.find(params[:id])
    user.update_attribute(:name, params[:user][:name])
    render json: user
  end

  def show
    render json: User.find(params[:id])
  end
end