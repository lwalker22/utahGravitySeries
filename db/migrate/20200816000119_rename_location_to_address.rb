class RenameLocationToAddress < ActiveRecord::Migration[6.0]
  def change
    rename_column :venues, :location, :address
  end
end
