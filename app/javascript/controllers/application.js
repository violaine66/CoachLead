/*
 * © 2025 Violaine Soulas Tous droits réservés.
 * Propriété exclusive de Violaine Soulas.
 * Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
 */
import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
