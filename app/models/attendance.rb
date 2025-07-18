# © 2025 Violaine Soulas Tous droits réservés.
#  Propriété exclusive de Violaine Soulas.
#  Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
class Attendance < ApplicationRecord
  belongs_to :user
  belongs_to :training

  enum status: { present: "present", absent: "absent", late: "late", excused: "excused" }

  after_create :maybe_generate_material_list

    def maybe_generate_material_list
    # Une fois que tous les attendances sont créées, on génère la liste
    if training.attendances.where(present: true).count >= 6
      training.generate_player_material_list
    end
  end

end
