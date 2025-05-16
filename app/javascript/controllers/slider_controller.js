// app/javascript/controllers/slider_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "output"]

  connect() {
    this.updateAll()
  }

  update(event) {
    const input = event.target
    const output = input.nextElementSibling
    output.textContent = input.value
  }

  updateAll() {
    this.inputTargets.forEach((input, index) => {
      this.outputTargets[index].textContent = input.value
    })
  }
}
