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

# Destroy dependent records first
MatchPerformance.destroy_all
Attendance.destroy_all
PreTrainingEvaluation.destroy_all
AfterTrainingEvaluation.destroy_all
Training.destroy_all
JobLoadEvaluation.destroy_all
PlayerProfil.destroy_all

# Now delete users
User.destroy_all



puts "Création de l'utilisateur développeur..."
entraineur1 = User.create!(
  email: ENV.fetch("ADMIN1_EMAIL"),
  password: ENV.fetch("ADMIN1_PASSWORD"),
  pseudo: ENV.fetch("ADMIN1_PSEUDO"),
  role: :entraineur,
)
entraineur2 = User.create!(
  email: ENV.fetch("ADMIN2_EMAIL"),
  password: ENV.fetch("ADMIN2_PASSWORD"),
  pseudo: ENV.fetch("ADMIN2_PSEUDO"),
  role: :entraineur,
)
puts "Utilisateur développeur.entraîneur créé avec succès."

# puts "Création des entraînements..."
# puts "Créer quelques entraînements"
# Training.create!(
#   date: Date.today + 1.day,
#   location: "Stade de Paris",
#   title: "Entraînement de Pré-Saison",
#   description: "Entraînement physique intense pour préparer la saison à venir. Focus sur la résistance et l'endurance.",
# )

# Training.create!(
#   date: Date.today + 3.days,
#   location: "Salle de Gym",
#   title: "Séance de Renforcement Musculaire",
#   description: "Entraînement ciblé sur le renforcement musculaire, avec des exercices pour augmenter la force et la stabilité.",
# )

# Training.create!(
#   date: Date.today + 7.days,
#   location: "Stade Municipal",
#   title: "Entraînement Technique et Tactique",
#   description: "Séance centrée sur les compétences techniques et la stratégie de jeu pour améliorer la performance collective.",
# )

# Training.create!(
#   date: Date.today + 10.days,
#   location: "Parc des Sports",
#   title: "Match d'Entraînement",
#   description: "Match d'entraînement contre une équipe locale pour tester les stratégies et préparer le premier match officiel.",
# )
# puts "Entraînements créés avec succès."


puts "Création de 10 utilisateurs"
users_data = [
  { email: "ackah@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "aloïs-ackah", role: "joueur" },
  { email: "belomri@example.com",password: ENV.fetch("COMMON_PASSWORD"), pseudo: "zinedine-belomri", role: "joueur" },
  { email: "coprot@example.com",password: ENV.fetch("COMMON_PASSWORD"), pseudo: "matéo-coprot", role: "joueur" },
  { email: "coprot@example.com",password: ENV.fetch("COMMON_PASSWORD"), pseudo: "matéo-coprot", role: "joueur" },
  { email: "dasilva@example.com",password: ENV.fetch("COMMON_PASSWORD"), pseudo: "gabriel-dasilva", role: "joueur" },
  { email: "david@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "samuel-david", role: "joueur" },
  { email: "delespaul@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "valentin-delespaul", role: "joueur" },
  { email: "domarcolino@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "junior-domarcolino", role: "joueur" },
  { email: "flohic@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "mathéo-flohic", role: "joueur" },
  { email: "gomis@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "dominique-gomis", role: "joueur" },
  { email: "lazreg@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "hakim-lazreg", role: "joueur" },
  { email: "louismet@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "matteo-louismet", role: "joueur" },
  { email: "meder@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "ancelin-meder", role: "joueur" },
  { email: "mendy-fernandy@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "fernandy-mendy", role: "joueur" },
  { email: "mendy-arnaud@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "arnaud-mendy", role: "joueur" },
  { email: "mendy-alex@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "alex-mendy", role: "joueur" },
  { email: "mouchet@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "jules-mouchet", role: "joueur" },
  { email: "mvondo@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "astrid-mvondo", role: "joueur" },
  { email: "rousse@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "nathan-rousse", role: "joueur" },
  { email: "sculo@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "damien-sculo", role: "joueur" },
  { email: "sylla@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "kaba-sylla", role: "joueur" },
  { email: "minier@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "hugo-minier", role: "joueur" },
  { email: "bautista@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "evan-bautista", role: "joueur" },
  { email: "legarez@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "wilson-legarez", role: "joueur" },
  { email: "thorel@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "marlon-thorel", role: "joueur" },
  { email: "tual-killian@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "killian-tual", role: "joueur" },
  { email: "tual-yael@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "yael-tual", role: "joueur" },
  { email: "namua@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "antonin-namua", role: "joueur" }
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
  { first_name: "Aloïs", last_name: "Ackah", age: 19, date_of_birth: "23/06/2006", job: "",  user_id: users[0].id },
  { first_name: "Zine Dine", last_name: "Belomri", age: 20, date_of_birth:"24/01/2005", job: "", user_id: users[1].id }
  { first_name: "Matéo", last_name: "Coprot", age: 21, date_of_birth: "09/12/2004", job: "", weight: "", children_count: "", user_id: users[2].id },
  { first_name: "Gabriel", last_name: "Da silva", age: 19, date_of_birth: "12/12/2006", job: "", weight: "", children_count: "", user_id: users[3].id },
  { first_name: "David", last_name: "Samuel", age: 19, date_of_birth: "06/06/2006", job: "", weight: "", children_count: "", user_id: users[4].id },
  { first_name: "Valentin", last_name: "Delespaul", age: 26, date_of_birth: "20/04/1999", job: "", weight: "", children_count: "", user_id: users[5].id },
  { first_name: "Junior", last_name: "Do Marcolino", age: 32, date_of_birth: "18/09/1993", job: "", weight: "", children_count: "", user_id: users[6].id },
  { first_name: "Mathéo", last_name: "Flohic", age: 24, date_of_birth: "11/06/2001", job: "", weight: "", children_count: "", user_id: users[7].id },
  { first_name: "Dominique", last_name: "Gomis", age: 17, date_of_birth: "03/10/2007", job: "", weight: "", children_count: "", user_id: users[8].id },
  { first_name: "Hakim", last_name: "Lazreg", age: 34, date_of_birth: "15/02/1991", job: "", weight: "", children_count: "", user_id: users[9].id },
  { first_name: "Matteo", last_name: "Louismet", age: 24, date_of_birth: "12/01/2001", job: "", weight: "", children_count: "", user_id: users[10].id },
  { first_name: "Ancelin", last_name: "Meder", age: 23, date_of_birth: "14/07/2002", job: "", weight: "", children_count: "", user_id: users[11].id },
  { first_name: "Fernandy", last_name: "Mendy", age: 31, date_of_birth: "16/01/1994", job: "", weight: "", children_count: "", user_id: users[12].id },
  { first_name: "Arnaud", last_name: "Mendy", age: 29, date_of_birth: "", job: "19/09/1996", weight: "", children_count: "", user_id: users[13].id },
  { first_name: "Alex", last_name: "Mendy", age: 24, date_of_birth: "27/05/2001", job: "", weight: "", children_count: "", user_id: users[14].id },
  { first_name: "Jules", last_name: "Mouchet", age: 18, date_of_birth: "18/01/2007", job: "", weight: "", children_count: "", user_id: users[15].id },
  { first_name: "Astrid", last_name: "Mvondo", age: 27, date_of_birth: "17/05/1998", job: "", weight: "", children_count: "", user_id: users[16].id },
  { first_name: "Nathan", last_name: "Rousse", age: 27, date_of_birth: "19/08/1998", job: "", weight: "", children_count: "", user_id: users[17].id },
  { first_name: "Damien", last_name: "Sculo", age: 34, date_of_birth: "07/12/1991", job: "", weight: "", children_count: "", user_id: users[18].id },
  { first_name: "Kaba", last_name: "Sylla", age: 23, date_of_birth: "09/08/2002", job: "", weight: "", children_count: "", user_id: users[19].id },
  { first_name: "Hugo", last_name: "Minier", age: 28, date_of_birth: "14/07/1997", job: "", weight: "", children_count: "", user_id: users[20].id },
  { first_name: "Evan", last_name: "Bautista", age: 17, date_of_birth: "06/09/2007", job: "", weight: "", children_count: "", user_id: users[21].id },
  { first_name: "Wilson", last_name: "Legarez", age: 17, date_of_birth: "17/08/2007", job: "", weight: "", children_count: "", user_id: users[22].id },
  { first_name: "Marlon", last_name: "Thorel", age: 18, date_of_birth: "09/08/2007", job: "", weight: "", children_count: "", user_id: users[23].id },
  { first_name: "Killian", last_name: "Tual", age: 28, date_of_birth: "03/12/1997", job: "", weight: "", children_count: "", user_id: users[24].id },
  { first_name: "Yael", last_name: "Tual", age: 24, date_of_birth: "14/02/2001", job: "", weight: "", children_count: "", user_id: users[25].id },
  { first_name: "Antonin", last_name: "Namua", age: 30, date_of_birth: "06/06/1995", job: "", weight: "", children_count: "", user_id: users[26].id }
]

# Création des profils de joueurs
players_data.each do |player_data|
  player = PlayerProfil.create!(player_data)
  puts "Profil du joueur #{player.first_name} #{player.last_name} créé."


#   # Rechercher un fichier d'image correspondant au prénom (insensible à l'extension)
#   image_files = Dir.glob(Rails.root.join("app/assets/images/#{player.first_name.downcase}.*"))

#   if image_files.any?
#     image_path = image_files.first
#     player.photo.attach(
#       io: File.open(image_path),
#       filename: File.basename(image_path),
#       content_type: Marcel::MimeType.for(Pathname.new(image_path))
#     )
#     puts "📸 Photo attachée pour #{player.first_name} (#{File.basename(image_path)})"
#   else
#     puts "⚠️ Aucune image trouvée pour #{player.first_name}"
#   end
end

puts "utilisateurs et profils de joueurs créés avec succès."


# puts "création de 10 évaluations de charge de travail..."
# users.each do |user|
#   JobLoadEvaluation.create!(
#     period: "Avril 2025",                    # Tu peux modifier la période selon ton besoin
#     rating: rand(1..5),                     # Une note entre 1 et 5 (par exemple)
#     user: user
#   )
# end
#  puts "10 évaluations de charge de travail créées avec succès."

# puts "Créez des performances de match pour chaque utilisateur"
# puts "Création de performances de match..."
# users.each do |user|
#   # Créez plusieurs performances de match pour chaque utilisateur (par exemple, 5 matchs)
#   5.times do |i|
#     # Créez une performance de match pour un utilisateur avec des données simples
#     MatchPerformance.create(
#       user_id: user.id,
#       match_date: Date.new(2025, 4, i+1),  # Dates fixes pour les matchs (ex: 1er avril, 2 avril, etc.)
#       played: [true, false].sample,  # Match joué ou non, sélectionné aléatoirement
#       yellow_card: rand(0..2)  # Carton jaune aléatoire (0, 1 ou 2)
#     )
#   end
# end

# # db/seeds.rb

# # On récupère quelques users et trainings existants
# joueurs = User.where(role: "joueur")  # ou :player si tu utilises un enum
# trainings = Training.all

# # Statuts possibles
# statuses = %w[present absent late excused]

# puts "Creating attendances..."
# trainings.each do |training|
#   joueurs.sample(5).each do |joueur|
#     Attendance.create!(
#       user: joueur,
#       training: training,
#       status: statuses.sample
#     )
#   end
# end

# puts "✅ Attendances created successfully!"
