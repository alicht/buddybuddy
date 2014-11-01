class LogSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :pairing_id, :message, :created_at, :links

  def links
    {
      favorites: "/api/favorites?log_id=#{object.id}",
    }
  end
end