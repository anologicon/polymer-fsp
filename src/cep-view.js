/* Load the PolymerElement base class and html helper function */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/* Load shared styles. All view elements use these styles */
import './shared-styles.js';

/* Extend the base PolymerElement class */
class MyNewView extends PolymerElement {
  /* Define a template for the new element */
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 11px;
        }
      </style>

      <div class="card">
        <div class="circle">CEP</div>
        <h1>Pesquise um CEP aqui!</h1>
      </div>
    `;
  }
}
/* Register the new element with the browser */
window.customElements.define('cep-view', MyNewView);
