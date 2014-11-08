class Api::LogsController < ApplicationController

  def index
    limit = 30
    logs = Log.order('created_at DESC').limit(limit)
    logs.to_a.select!{|log| log.pairing_id == params[:pairing_id].to_i} if params[:pairing_id]
    render json: logs
  end

  def create
    log = Log.create(params.require(:log).permit!)
    render json: log
  end

end