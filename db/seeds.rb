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

puts "Création des entraînements..."
puts "Créer quelques entraînements"

Training.create!(
  date: Date.new(2025, 7, 28),
  start_time: "19:15",
  end_time: "21:15",
  title: "Objectif cible",
  description: "Séance de 2h",
)

Training.create!(
  date: Date.new(2025, 7, 29),
  start_time: "19:15",
  end_time: "20:30",
  description: "Séance de 1h15",
)

Training.create!(
  date: Date.new(2025, 7, 30),
  start_time: "19:15",
  end_time: "20:30",
  description: "séance de 1h15",
)

Training.create!(
  date: Date.new(2025, 8, 1),
  location: "Parc des Sports",
  start_time: "19:15",
  end_time: "20:15",
  description: "1h de séance vitesse + CPA intégrés"
)

Training.create!(
  date: Date.new(2025, 8, 4),
  start_time: "19:15",
  end_time: "20:30",
  description: "Séance de 1h15 IFT",
)

Training.create!(
  date: Date.new(2025, 8, 5),
  start_time: "19:15",
  end_time: "20:15",
  description: "1h de séance vitesse + mise en place "
)

Training.create!(
  date: Date.new(2025, 8, 8),
  location: "Parc des Sports",
  start_time: "19:15",
  end_time: "20:15",
  description: "1h de séance vitesse + CPA intégrés"
)

Training.create!(
  date: Date.new(2025, 8, 11),
  start_time: "19:15",
  end_time: "20:30",
  description: "Séance de 1h15",
)

Training.create!(
  date: Date.new(2025, 8, 12),
  start_time: "19:15",
  end_time: "20:30",
  description: "1h de séance vitesse + mise en place "
)

Training.create!(
  date: Date.new(2025, 8, 15),
  start_time: "19:15",
  end_time: "20:30",
  description: "1h de séance vitesse + CPA intégrés"
)

Training.create!(
  date: Date.new(2025, 8, 18),
  start_time: "19:15",
  end_time: "20:30",
  description: "séance de 1h15",
)

Training.create!(
  date: Date.new(2025, 8, 19)
  start_time: "19:15",
  end_time: "20:30",
  description: "1h de séance vitesse + mise en place"
)

Training.create!(
  date: Date.new(2025, 8, 22),
  start_time: "19:15",
  end_time: "20:30",
  description: "1h de séance + CPA intégrés"
)

Training.create!(
  date: Date.new(2025, 8, 26),
  start_time: "19:15",
  end_time: "20:30",
  description: "1h de séance vitesse + mise en place"
)

puts "Entraînements créés avec succès."


puts "Création de 10 utilisateurs"
users_data = [
  { email: "ackah@example.com", password: ENV.fetch("COMMON_PASSWORD"), pseudo: "aloïs-ackah", role: "joueur" },
  { email: "belomri@example.com",password: ENV.fetch("COMMON_PASSWORD"), pseudo: "zinedine-belomri", role: "joueur" },
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
  { first_name: "Aloïs", last_name: "Ackah", date_of_birth: Date.new(2006, 06, 23),job: "", weight: "", children_count: "", user_id: users[0].id },
  { first_name: "Zine Dine", last_name: "Belomri", date_of_birth: Date.new(2005,01,24), job: "", weight: "", user_id: users[1].id },
  { first_name: "Matéo", last_name: "Coprot", date_of_birth: Date.new(2004,12,9), job: "", weight: "", children_count: "", user_id: users[2].id },
  { first_name: "Gabriel", last_name: "Da silva", date_of_birth: Date.new(2006, 12, 12), job: "", weight: "", children_count: "", user_id: users[3].id },
  { first_name: "David", last_name: "Samuel", date_of_birth: Date.new(2006, 06, 6), job: "", weight: "", children_count: "", user_id: users[4].id },
  { first_name: "Valentin", last_name: "Delespaul", date_of_birth: Date.new(1999, 4, 20), job: "", weight: "", children_count: "", user_id: users[5].id },
  { first_name: "Junior", last_name: "Do Marcolino", date_of_birth: Date.new(1993, 9, 18), job: "", weight: "", children_count: "", user_id: users[6].id },
  { first_name: "Mathéo", last_name: "Flohic", date_of_birth: Date.new(2001, 6, 11), job: "", weight: "", children_count: "", user_id: users[7].id },
  { first_name: "Dominique", last_name: "Gomis", date_of_birth: Date.new(2007, 10, 3), job: "", weight: "", children_count: "", user_id: users[8].id },
  { first_name: "Hakim", last_name: "Lazreg", date_of_birth: Date.new(1991, 2, 15), job: "", weight: "", children_count: "", user_id: users[9].id },
  { first_name: "Matteo", last_name: "Louismet", date_of_birth: Date.new(2001, 1, 12 ), job: "", weight: "", children_count: "", user_id: users[10].id },
  { first_name: "Ancelin", last_name: "Meder", date_of_birth: Date.new(2002, 7, 14), job: "", weight: "", children_count: "", user_id: users[11].id },
  { first_name: "Fernandy", last_name: "Mendy", date_of_birth: Date.new(1994, 1, 16), job: "", weight: "", children_count: "", user_id: users[12].id },
  { first_name: "Arnaud", last_name: "Mendy", date_of_birth: Date.new(1996, 9, 19), job: "", weight: "", children_count: "", user_id: users[13].id },
  { first_name: "Alex", last_name: "Mendy", date_of_birth: Date.new(2001, 5, 27), job: "", weight: "", children_count: "", user_id: users[14].id },
  { first_name: "Jules", last_name: "Mouchet", date_of_birth: Date.new(2007, 1, 18), job: "", weight: "", children_count: "", user_id: users[15].id },
  { first_name: "Astrid", last_name: "Mvondo", date_of_birth: Date.new(1998, 5, 17), job: "", weight: "", children_count: "", user_id: users[16].id },
  { first_name: "Nathan", last_name: "Rousse", date_of_birth: Date.new(1998, 8, 19), job: "", weight: "", children_count: "", user_id: users[17].id },
  { first_name: "Damien", last_name: "Sculo", date_of_birth: Date.new(1991, 12, 7), job: "", weight: "", children_count: "", user_id: users[18].id },
  { first_name: "Kaba", last_name: "Sylla", date_of_birth: Date.new(2002, 8, 9), job: "", weight: "", children_count: "", user_id: users[19].id },
  { first_name: "Hugo", last_name: "Minier", date_of_birth: Date.new(1997, 7, 14), job: "", weight: "", children_count: "", user_id: users[20].id },
  { first_name: "Evan", last_name: "Bautista", date_of_birth: Date.new(2007, 9, 6), job: "", weight: "", children_count: "", user_id: users[21].id },
  { first_name: "Wilson", last_name: "Legarez", date_of_birth: Date.new(2007, 8, 17), job: "", weight: "", children_count: "", user_id: users[22].id },
  { first_name: "Marlon", last_name: "Thorel", date_of_birth: Date.new(2007, 8, 9), job: "", weight: "", children_count: "", user_id: users[23].id },
  { first_name: "Killian", last_name: "Tual", date_of_birth: Date.new(1997, 12, 3), job: "", weight: "", children_count: "", user_id: users[24].id },
  { first_name: "Yael", last_name: "Tual", date_of_birth: Date.new(2001, 2, 14), job: "", weight: "", children_count: "", user_id: users[25].id },
  { first_name: "Antonin", last_name: "Namua", date_of_birth: Date.new(1995, 6, 1), job: "", weight: "", children_count: "", user_id: users[26].id }
]

# Création des profils de joueurs
players_data.each do |player_data|
  player = PlayerProfil.create!(player_data)
  puts "Profil du joueur #{player.first_name} #{player.last_name} créé."


  # Rechercher un fichier d'image correspondant au prénom (insensible à l'extension)
  image_files = Dir.glob(Rails.root.join("app/assets/images/#{player.first_name.downcase}.*"))

  if image_files.any?
    image_path = image_files.first
    player.photo.attach(
      io: File.open(image_path),
      filename: File.basename(image_path),
      content_type: Marcel::MimeType.for(Pathname.new(image_path))
    )
    puts "📸 Photo attachée pour #{player.first_name} (#{File.basename(image_path)})"
  else
    puts "⚠️ Aucune image trouvée pour #{player.first_name}"
  end
end

puts "utilisateurs et profils de joueurs créés avec succès."


puts "création de 10 évaluations de charge de travail..."
users.each do |user|
  JobLoadEvaluation.create!(
    period: "Avril 2025",                    # Tu peux modifier la période selon ton besoin
    rating: rand(1..5),                     # Une note entre 1 et 5 (par exemple)
    user: user
  )
end
 puts "10 évaluations de charge de travail créées avec succès."

puts "Créez des performances de match pour chaque utilisateur"
puts "Création de performances de match..."
users.each do |user|
  # Créez plusieurs performances de match pour chaque utilisateur (par exemple, 5 matchs)
  5.times do |i|
    # Créez une performance de match pour un utilisateur avec des données simples
    MatchPerformance.create(
      user_id: user.id,
      match_date: Date.new(2025, 4, i+1),  # Dates fixes pour les matchs (ex: 1er avril, 2 avril, etc.)
      played: [true, false].sample,  # Match joué ou non, sélectionné aléatoirement
      yellow_card: rand(0..2)  # Carton jaune aléatoire (0, 1 ou 2)
    )
  end
end

# db/seeds.rb

# On récupère quelques users et trainings existants
joueurs = User.where(role: "joueur")  # ou :player si tu utilises un enum
trainings = Training.all

# Statuts possibles
statuses = %w[present absent late excused]

puts "Creating attendances..."
trainings.each do |training|
  joueurs.sample(5).each do |joueur|
    Attendance.create!(
      user: joueur,
      training: training,
      status: statuses.sample
    )
  end
end

puts "✅ Attendances created successfully!"
