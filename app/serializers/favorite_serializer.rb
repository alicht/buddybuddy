class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :log_id
end