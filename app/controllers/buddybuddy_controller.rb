class BuddybuddyController < ApplicationController
  def index

    params[:path] = nil if File.extname(params[:path]).empty? #always send index if asking for html
    template = File.join(Rails.public_path , 'dist', params[:path] || 'index.html')

    extname = File.extname(template)[1..-1]
    mime_type = Mime::Type.lookup_by_extension(extname)
    content_type = mime_type.to_s unless mime_type.nil?
    headers["Content-Type"] = content_type

    respond_to do |format|
      format.js {
        render file: template, layout: false, content_type: content_type
      }
      format.html  {
        render template, layout: false
      }
      format.json  {
        render json: { health: true, error: 'If you are expecting data please ensure your api route is correct.' }
      }
    end
  end

end