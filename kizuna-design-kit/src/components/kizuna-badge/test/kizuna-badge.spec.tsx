import { newSpecPage } from '@stencil/core/testing';
import { KizunaBadge } from '../kizuna-badge';

describe('kizuna-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KizunaBadge],
      html: `<kizuna-badge></kizuna-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <kizuna-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kizuna-badge>
    `);
  });
});
