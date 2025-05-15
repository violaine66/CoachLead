/*
 * © 2025 Violaine Soulas Tous droits réservés.
 * Propriété exclusive de Violaine Soulas.
 * Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
 */
import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["togglableElement"];
  connect() {

  }
  fire() {
    this.togglableElementTarget.classList.toggle("d-none");
  }
}
