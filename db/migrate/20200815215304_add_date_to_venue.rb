class AddDateToVenue < ActiveRecord::Migration[6.0]
  def change
    add_column :venues, :date, :date
  end
end
