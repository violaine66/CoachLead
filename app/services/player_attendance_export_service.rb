require 'csv'

class PlayerAttendanceExportService
  def initialize(start_date:, end_date:)
    @start_date = start_date
    @end_date = end_date
  end

  def generate
    CSV.generate(headers: true) do |csv|
      csv << [
        "Prénom",
        "Nom",
        "Email",
        "Nombre entraînements",
        "Présent",
        "Absent",
        "Détails"
      ]

      PlayerProfil.includes(:user).find_each do |profil|
        user = profil.user

        trainings = Training.where(date: @start_date..@end_date)
        total_trainings = trainings.count

        attendances = Attendance.includes(:training).where(user_id: user.id, training_id: trainings.pluck(:id))


        present_count = attendances.where(status: "present").count
        absent_count = attendances.where.not(status: "present").count

        details = attendances.map do |a|
          training = a.training
          "#{training.date} (#{a.status})"
        end.join(" | ")

        csv << [
          profil.first_name,
          profil.last_name,
          user.email,
          total_trainings,
          present_count,
          absent_count,
          details
        ]
      end
    end
  end
end
