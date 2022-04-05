import { newSpecPage } from '@stencil/core/testing';
import { KizunaDivider } from '../kizuna-divider';

describe('kizuna-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KizunaDivider],
      html: `<kizuna-divider></kizuna-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <kizuna-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kizuna-divider>
    `);
  });
});
