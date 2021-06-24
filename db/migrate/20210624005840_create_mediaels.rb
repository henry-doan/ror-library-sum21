class CreateMediaels < ActiveRecord::Migration[6.1]
  def change
    create_table :mediaels do |t|
      t.string :title
      t.string :creator
      t.string :thumbnail
      t.string :content
      t.belongs_to :checkout, foreign_key: { to_table: :mediaels }

      t.timestamps
    end
  end
end
