class AddFieldsToUsers < ActiveRecord::Migration[7.1]
  def change
    # Si tu ajoutes ces champs à une table déjà existante (comme la table `users`), tu dois utiliser `add_column`
    add_column :users, :role, :string, null: false, default: "joueur"
    add_column :users, :pseudo, :string

    # Ajout d'index pour les colonnes `email` et `pseudo` (on suppose que `email` est déjà présent dans la table)
    
    add_index :users, :pseudo, unique: true
  end
end
