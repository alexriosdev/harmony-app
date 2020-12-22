class AddChatroomToMembership < ActiveRecord::Migration[6.0]
  def change
    add_reference :memberships, :chatroom, null: false, foreign_key: true
  end
end
