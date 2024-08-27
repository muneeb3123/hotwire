class User < ApplicationRecord
    has_many :project_users, dependent: :destroy
    has_many :projects, through: :project_users
 
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

    enum role: { manager: 0, developer: 1, qa: 2 }
end
