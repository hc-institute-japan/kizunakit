import { newSpecPage } from '@stencil/core/testing';
import { KizunaTabs } from '../kizuna-tabs';

describe('kizuna-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KizunaTabs],
      html: `<kizuna-tabs></kizuna-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <kizuna-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kizuna-tabs>
    `);
  });
});
