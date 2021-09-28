class CreatePackingListItems < ActiveRecord::Migration[6.1]
  def change
    create_table :packing_list_items do |t|
      t.references :trip, null: false, foreign_key: true
      t.string :item

      t.timestamps
    end
  end
end
