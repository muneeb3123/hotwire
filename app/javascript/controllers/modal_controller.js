import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="modals"
export default class extends Controller {
  connect() {
    document.addEventListener('click', (e) => {
      if (e.target.className === 'overlay') {
        this.hideModal();
      }
    });
  }

  close(e) {
    e.preventDefault();
    this.hideModal();
  }

  hideModal() {
    const modal = document.getElementById("modal");
    modal.innerHTML = "";

    // Remove the src attribute from the modal
    modal.removeAttribute("src");

    // Remove complete attribute
    modal.removeAttribute("complete");
  }
}