class Admin::ExportsController < ApplicationController
  before_action :authenticate_admin!

  # Affiche le formulaire d’export
  def index
    # rien de spécial, juste afficher la vue avec le formulaire
  end

  # Génère et envoie le CSV
  def attendances
    start_date = params[:start_date].presence || 1.month.ago.to_date
    end_date = params[:end_date].presence || Date.today

    service = PlayerAttendanceExportService.new(start_date: start_date, end_date: end_date)
    csv_data = service.generate

    send_data csv_data,
      filename: "etat_presences_#{start_date}_#{end_date}.csv",
      type: 'text/csv',
      disposition: 'attachment'
  end

  private

  def authenticate_admin!
    allowed_roles = ["entraineur", "admin"]
    unless allowed_roles.include?(current_user&.role)
      redirect_to root_path, alert: "Accès réservé aux administrateurs."
    end
  end
end
