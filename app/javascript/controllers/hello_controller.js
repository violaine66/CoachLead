
/*
 * © 2025 Violaine Soulas Tous droits réservés.
 * Propriété exclusive de Violaine Soulas.
 * Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
 */import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
}
