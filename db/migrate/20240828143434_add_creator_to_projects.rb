class AddCreatorToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :creator_id, :integer
    add_foreign_key :projects, :users, column: :creator_id
  end
end
