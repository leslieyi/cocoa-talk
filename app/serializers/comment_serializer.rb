class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :username, :profile_picture, :created_at, :updated_at
  # has_one :user
  has_one :post

  def username
    self.object.user.username
  end

  def profile_picture
    self.object.user.profile_picture
  end
end
