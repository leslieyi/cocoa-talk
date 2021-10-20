class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_picture, :bio
end
