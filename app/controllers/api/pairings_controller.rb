class Api::PairingsController < ApplicationController

  def index
    @pairings = Pairing.current
    @pairings = Pairing.all
    render json: @pairings
  end

  def generate
    @pairings = Pairing.generate!
    render json:  @pairings
  end

  def show
    @pairing = Pairing.find(params[:id])
    render json: @pairing
  end

end

