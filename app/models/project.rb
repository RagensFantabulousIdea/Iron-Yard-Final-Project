class Project < ApplicationRecord
  has_secure_token

  belongs_to :owner, class_name: "User", foreign_key: :user_id

  has_many :memberships
  has_many :members, through: :memberships, source: :user

  validates_presence_of :title, :description, :author, required: true

  def team
    owner + members
  end

end
