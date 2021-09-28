class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.references :trip, null: false, foreign_key: true
      t.integer :sender_id, null: false
      t.text :content

      t.timestamps
    end
  end
end
