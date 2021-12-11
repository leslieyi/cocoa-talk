class PostSerializer < ActiveModel::Serializer
  attributes :id, :text, :created_at, :updated_at, :date, :updated_date
  has_one :user
  has_many :comments

  def comments
    object.comments.sort_by(&:created_at).reverse
  end

  def date
    object.created_at.localtime.strftime("%b %e,  %l:%M %p")
  end

  def updated_date
    object.updated_at.localtime.strftime("%b %e,  %l:%M %p")
  end
end
