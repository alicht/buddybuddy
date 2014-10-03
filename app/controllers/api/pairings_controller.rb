class Api::PairingsController < ApplicationController

  def index
    @pairings = User.find(params[:user_id]).pairings
    render json: @pairings
  end

  def by_user_id
    @pairings = User.find(params[:user_id]).pairings
    render json: @pairings
  end

end