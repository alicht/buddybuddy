class Api::PairingsController < ApplicationController

  def index
    @pairings = Pairing.current
    render json: @pairings
  end

  def generate
    @pairings = Pairing.generate!
    render json: @pairings
  end

  def show
    @pairing = Pairing.find(params[:id])
    render json: @pairing
  end

  def by_user_id
    @pairings = User.find(params[:user_id]).pairings
    render json: @pairings
  end

end