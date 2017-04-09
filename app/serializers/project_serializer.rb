class ProjectSerializer < ActiveModel::Serializer

  belongs_to :owner
  has_many :members
  has_many :left_comments

  attributes :id, :token, :title, :description, :author, :project_num

end
