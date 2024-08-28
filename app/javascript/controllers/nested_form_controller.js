import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["container"];

  connect() {
    // Clone the template
    this.template = document.querySelector('.user-fields-template').innerHTML;
  }

  addField(event) {
    event.preventDefault();

    // Define newIndex as needed
    const newIndex =  new Date().getTime();

    this.template = this.template
      .replace(/\[users_attributes\]\[\d+\]/g, `[users_attributes][${newIndex}]`)
      .replace(/users_attributes_\d+/g, `users_attributes_${newIndex}`);

    this.containerTarget.insertAdjacentHTML('beforeend', this.template);
  }

  removeField(event) {
    event.preventDefault();
    const field = event.target.closest('.nested_fields');
    if (field) {
      const destroy_field = field.querySelector('.destroy-field');
      console.log(destroy_field)
      if (destroy_field) {
        destroy_field.value = 1;
      }
      field.style.display = 'none'; 
    }
  }
}