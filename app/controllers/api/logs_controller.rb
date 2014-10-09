class Api::LogsController < ApplicationController

  def index
    #pairing_id
    @logs = Log.all
    @logs.to_a.select!{|log| log.pairing_id == params[:pairing_id].to_i} if params[:pairing_id]
    render json: @logs
  end

  def create
    @log = Log.create(params.require(:log).permit!)
    render json: @log
  end

end