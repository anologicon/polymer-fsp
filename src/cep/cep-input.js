/* Load the PolymerElement base class and html helper function */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import 'axios/dist/axios.min.js';
/* Load shared styles. All view elements use these styles */
import '../shared-styles.js';

/* Extend the base PolymerElement class */
class CepInput extends PolymerElement {
  /* Define a template for the new element */
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 11px;
        }
      </style>
      <input type="text" id="cep-input" search name="cep" value="">
      <span>[[search]]</span>
    `;
  }

  static get properties() {
    return {
      search: {
        type: String,
        notify: true,
        reflectToAttribute: true
      }
    };
  }

  constructor() {
   super();
   this.addEventListener('keyup', this.searchCep.bind(this));
 }

 searchCep() {
    var input_val = this.shadowRoot.querySelector('#cep-input').value;

    var cep_json;

    if (input_val.length == 8) {
      cep_json = axios.get('https://viacep.com.br/ws/'+input_val+'/json/')
      .then(response => {
         return response.dataz;
      })
      .catch(error => {
        console.log(console.error);
      })
    }

    this.search = cep_json;

    return this.search;
 }

}
/* Register the new element with the browser */
window.customElements.define('cep-input', CepInput);
