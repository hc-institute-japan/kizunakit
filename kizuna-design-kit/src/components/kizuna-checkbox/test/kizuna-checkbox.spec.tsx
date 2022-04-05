import { newSpecPage } from '@stencil/core/testing';
import { KizunaCheckbox } from '../kizuna-checkbox';

describe('kizuna-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KizunaCheckbox],
      html: `<kizuna-checkbox></kizuna-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <kizuna-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kizuna-checkbox>
    `);
  });
});
