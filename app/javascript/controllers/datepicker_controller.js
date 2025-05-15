/*
 * © 2025 Violaine Soulas Tous droits réservés.
 * Propriété exclusive de Violaine Soulas.
 * Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
 */

import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";

// Connects to data-controller="datepicker"
export default class extends Controller {
  connect() {
    console.log("Datepicker controller connected")
    flatpickr(this.element)
  }
}
