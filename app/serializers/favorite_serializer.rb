class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :log_id, :str_user_id

  def str_user_id
    object.user_id
  end
end