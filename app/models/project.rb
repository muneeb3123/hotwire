class Project < ApplicationRecord
  has_many :project_users, dependent: :destroy
  has_many :users, through: :project_users
  belongs_to :creator, class_name: "User", foreign_key: "creator_id"

  validates :name, presence: true

  accepts_nested_attributes_for :users, allow_destroy: true
end
