class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :links

  def links
    {
      pairings: "/api/users/#{object.id}/pairings"
    }
  end
end