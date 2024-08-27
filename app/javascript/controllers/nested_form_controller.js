import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["container" ];

  connect() {
      // Clone the template
    this.template = document.querySelector('.nested_fields').outerHTML.replace(/NEW_RECORD/g, new Date().getTime());
  }

  addField(e) {
    e.preventDefault();
    this.containerTarget.insertAdjacentHTML('beforeend', this.template);
  }

  removeField(event) {
    event.preventDefault();
    const field = event.target.closest('.nested_fields');
    if (field) {
      field.remove();
    }
  }
}
