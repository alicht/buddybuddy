class Api::UsersController < ApplicationController

  def index
    # restrict on pairing id.
    @users = User.all
    @users = @users.select{|user| user.pairing_ids.include?(params[:pairing_id].to_i)} if params[:pairing_id]
    render json: { users: @users }
  end

end