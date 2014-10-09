class PairingSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :links

  def links
    {
      users: "/api/users?pairing_id=#{object.id}",
      logs: "/api/logs?pairing_id=#{object.id}"
    }
  end
end