class BuddybuddyController < ApplicationController
  skip_before_filter :authorize!

  def index
    render "index"
  end

end
