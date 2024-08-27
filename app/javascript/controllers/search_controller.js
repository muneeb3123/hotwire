import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="suggestion"
export default class extends Controller {
  static targets = ["suggestions", "input"];

  connect() {
    document.addEventListener('click', (e) => {
      if (!this.element.contains(e.target)) {
        this.hideSuggestions();
      }
    });
  }

  suggestions() {
    const query = this.inputTarget.value;
    const url = this.element.dataset.suggestionsUrl;
    this.requestSuggestions(url, query);
 };

  requestSuggestions(url, query) {
    if (query.length === 0) {
      this.hideSuggestions();
      return;
    }

    this.showSuggestions();

    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      },
      body: JSON.stringify({ query: query }),
    }).then(response => {
      response.text().then((data) => {
        document.body.insertAdjacentHTML('beforeend', data);
      });
    });
  }


  showSuggestions() {
    this.suggestionsTarget.classList.remove('hidden');
  }

  hideSuggestions() {
      this.suggestionsTarget.classList.add('hidden');
  }
}
