import { LitElement, html, css, property } from 'lit-element';

export class SasProgressBar extends LitElement {

    // This decorator creates a property accessor that triggers rendering and
    // an observed attribute.
    @property() progress: string = '10';
    @property() theme: string = 'green';

  static styles = css`
        :host {
            width:200px; 
            height: 8px; 
            background-color: #DDDDDD; 
            border-radius: 10px; 
            display:block;
        }

        :host([theme="green"]) #progressBar {
            background-color: #81D928;
        }

        :host([theme="orange"]) #progressBar {
            background-color: #EBA115;
        }

        :host([theme="red"]) #progressBar {
            background-color: #DB5333;
        }

        #progressBar {
            height: 8px; 
            border-radius: 10px 0px 0px 10px; 
            width: 0px;
        }
    `;

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html`
        <div>
            <div style="width: ${this.progress}%;" id="progressBar">
            </div>
        </div>
    `;
  }
}
