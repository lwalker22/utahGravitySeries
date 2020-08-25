class ChangeDateToBeStringInVenues < ActiveRecord::Migration[6.0]
  def change
    change_column :venues, :date, :string
  end
end
