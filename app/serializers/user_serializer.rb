class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :checkedin, :links

  def checkedin
    Log.today_log_by_user(object.id).any?
  end

  def links
    {
      pairings: "/api/pairings?user_id=#{object.id}"
    }
  end
end