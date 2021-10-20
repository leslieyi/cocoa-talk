class User < ApplicationRecord
  has_secure_password

  has_many :posts
  has_many :comments

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6, maximum: 15 }
  validates :bio, length: { maximum: 500 }
end
