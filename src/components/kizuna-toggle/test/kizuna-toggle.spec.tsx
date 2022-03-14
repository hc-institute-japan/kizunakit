import { newSpecPage } from '@stencil/core/testing';
import { KizunaToggle } from '../kizuna-toggle';

describe('kizuna-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KizunaToggle],
      html: `<kizuna-toggle></kizuna-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <kizuna-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kizuna-toggle>
    `);
  });
});
