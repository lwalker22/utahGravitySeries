class CreateResults < ActiveRecord::Migration[6.0]
  def change
    create_table :results do |t|
      t.string :year
      t.belongs_to :venue, null: false, foreign_key: true

      t.timestamps
    end
  end
end
