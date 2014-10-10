class LogSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :pairing_id, :message, :created_at

  def links
    {

    }
  end
end