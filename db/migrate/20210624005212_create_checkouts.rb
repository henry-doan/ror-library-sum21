class CreateCheckouts < ActiveRecord::Migration[6.1]
  def change
    create_table :checkouts do |t|
      t.string :checkout_date
      t.string :return_date
      t.float :fees
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
