import { newSpecPage } from '@stencil/core/testing';
import { KizunaButton } from '../kizuna-button';

describe('kizuna-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KizunaButton],
      html: `<kizuna-button></kizuna-button>`,
    });
    expect(page.root).toEqualHtml(`
      <kizuna-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kizuna-button>
    `);
  });
});
