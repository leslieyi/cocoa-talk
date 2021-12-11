class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_picture, :bio, :total_posts

  # has_many :posts

  def total_posts
    object.posts.count
  end
end
