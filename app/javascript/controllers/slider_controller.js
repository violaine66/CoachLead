import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input", "output"];

  connect() {
    this.updateValue();
  }

  updateValue() {
    this.outputTargets.forEach((output, index) => {
      output.textContent = this.inputTargets[index].value;
    });
  }

  update(event) {
    const index = this.inputTargets.indexOf(event.target);
    if (index !== -1) {
      this.outputTargets[index].textContent = event.target.value;
    }
  }
}
