import { newSpecPage } from '@stencil/core/testing';
import { KizunaToggleButton } from '../kizuna-toggle-button';

describe('kizuna-toggle-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KizunaToggleButton],
      html: `<kizuna-toggle-button></kizuna-toggle-button>`,
    });
    expect(page.root).toEqualHtml(`
      <kizuna-toggle-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kizuna-toggle-button>
    `);
  });
});
