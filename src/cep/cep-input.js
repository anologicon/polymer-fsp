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
      <br>
      <span id="endereco">[[endereco]]</span>
    `;
  }

  static get properties() {
    return {
      search: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
      endereco : {
        type : String
      }
    };
  }

  constructor() {
   super();
   this.addEventListener('keyup', this.searchCep.bind(this));
 }

 searchCep() {
    var input_val = this.shadowRoot.querySelector('#cep-input').value;

    if (input_val.length == 8) {
      axios.get('https://viacep.com.br/ws/'+input_val+'/json/')
      .then(response => {
         this.callbackCep(response.data);
      })
      .catch(error => {
        console.log(console.error);
      });
    }

    if (input_val.length == 0) {
      this.endereco = '';
    }
 }

 callbackCep(data)
 { 
   this.endereco = data.logradouro + ' ' + data.bairro + ' ' + data.localidade;
  }

}
/* Register the new element with the browser */
window.customElements.define('cep-input', CepInput);
