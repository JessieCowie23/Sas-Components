import { html, fixture, expect } from '@open-wc/testing';

import {SasProgressBar} from '../src/SasProgressBar.js';
import '../src/sas-components.js';

describe('SasProgressBar', () => {
  let element: SasProgressBar;
  beforeEach(async () => {
    element = await fixture(html`
      <sas-progress-bar></sas-progress-bar>
    `);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
