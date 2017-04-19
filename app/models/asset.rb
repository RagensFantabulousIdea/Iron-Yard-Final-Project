class Asset < ApplicationRecord
  
  mount_uploaders :sample_photos, ImageUploader

  belongs_to :project

  has_many :photos, dependent: :delete_all
  has_one :selected_photo, -> {where(selected: true)}, class_name: 'Photo'

  has_many :comments, as: :commentable, dependent: :destroy

end
