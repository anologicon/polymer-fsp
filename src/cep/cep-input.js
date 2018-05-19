/* Load the PolymerElement base class and html helper function */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
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
        notify: true,
        reflectToAttribute: true
      }
    };
  }

  constructor() {
   super();
   this.addEventListener('keypress', this.searchCep.bind(this));
 }

 searchCep() {
   return this.search = this.shadowRoot.querySelector('#cep-input').value;
 }

}
/* Register the new element with the browser */
window.customElements.define('cep-input', CepInput);
