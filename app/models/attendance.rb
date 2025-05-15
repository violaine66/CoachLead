# © 2025 Violaine Soulas Tous droits réservés.
#  Propriété exclusive de Violaine Soulas.
#  Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
class Attendance < ApplicationRecord
  belongs_to :user
  belongs_to :training

  enum status: { present: "present", absent: "absent", late: "late", excused: "excused" }



end
