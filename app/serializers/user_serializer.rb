class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :links

  def links
    {
      pairings: "/api/pairings?user_id=#{object.id}"
    }
  end
end