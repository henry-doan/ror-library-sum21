class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :title
      t.string :author
      t.string :pic
      t.string :genre
      t.string :item_type

      t.timestamps
    end
  end
end
