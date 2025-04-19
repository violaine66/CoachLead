# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
puts "Suppression des données existantes..."

PlayerProfil.destroy_all
User.destroy_all

puts "Création de l'utilisateur développeur..."
entraineur = User.create!(
  email: "lou@app.fr",
  password: "violaine",
  pseudo: "Lou",
  role: :entraineur,
)

puts "Utilisateur développeur créé avec succès."


# Création de 10 utilisateurs
users_data = [
  { email: "user1@example.com", password: "password", pseudo: "player1", role: "joueur" },
  { email: "user2@example.com", password: "password", pseudo: "player2", role: "joueur" },
  { email: "user3@example.com", password: "password", pseudo: "player3", role: "joueur" },
  { email: "user4@example.com", password: "password", pseudo: "player4", role: "joueur" },
  { email: "user5@example.com", password: "password", pseudo: "player5", role: "joueur" },
  { email: "user6@example.com", password: "password", pseudo: "player6", role: "joueur" },
  { email: "user7@example.com", password: "password", pseudo: "player7", role: "joueur" },
  { email: "user8@example.com", password: "password", pseudo: "player8", role: "joueur" },
  { email: "user9@example.com", password: "password", pseudo: "player9", role: "joueur" },
  { email: "user10@example.com", password: "password", pseudo: "player10", role: "joueur" }
]

# Création des utilisateurs
users = []
users_data.each do |user_data|
  user = User.create!(user_data)
  puts "Utilisateur #{user.pseudo} créé."
  users << user # Stocker les utilisateurs créés pour les associer aux profils
end

# Création des profils de joueurs associés aux utilisateurs
players_data = [
  { first_name: "Lionel", last_name: "Messi", age: 35, job: "Attaquant", weight: 72, children_count: 3, user_id: users[0].id },
  { first_name: "Cristiano", last_name: "Ronaldo", age: 38, job: "Attaquant", weight: 83, children_count: 5, user_id: users[1].id },
  { first_name: "Neymar", last_name: "Jr", age: 31, job: "Attaquant", weight: 70, children_count: 1, user_id: users[2].id },
  { first_name: "Kylian", last_name: "Mbappé", age: 24, job: "Attaquant", weight: 73, children_count: 0, user_id: users[3].id },
  { first_name: "Luka", last_name: "Modrić", age: 39, job: "Milieu", weight: 65, children_count: 2, user_id: users[4].id },
  { first_name: "Sergio", last_name: "Ramos", age: 37, job: "Défenseur", weight: 82, children_count: 4, user_id: users[5].id },
  { first_name: "Virgil", last_name: "van Dijk", age: 32, job: "Défenseur", weight: 92, children_count: 2, user_id: users[6].id },
  { first_name: "Kevin", last_name: "De Bruyne", age: 32, job: "Milieu", weight: 70, children_count: 3, user_id: users[7].id },
  { first_name: "Mohamed", last_name: "Salah", age: 31, job: "Attaquant", weight: 74, children_count: 2, user_id: users[8].id },
  { first_name: "Karim", last_name: "Benzema", age: 35, job: "Attaquant", weight: 81, children_count: 3, user_id: users[9].id }
]

# Création des profils de joueurs
players_data.each do |player_data|
  player = PlayerProfil.create!(player_data)
  puts "Profil du joueur #{player.first_name} #{player.last_name} créé."
end

puts "10 utilisateurs et 10 profils de joueurs ont été créés avec succès."
