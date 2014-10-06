class PairingSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :links

  def links
    {
      users: "/api/pairings/#{object.id}/users"
    }
  end
end