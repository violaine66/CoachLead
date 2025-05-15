/*
 * © 2025 Violaine Soulas Tous droits réservés.
 * Propriété exclusive de Violaine Soulas.
 * Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
 */
// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "controllers/application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)
