import { newSpecPage } from '@stencil/core/testing';
import { KizunaTextbox } from '../kizuna-textbox';

describe('kizuna-textbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KizunaTextbox],
      html: `<kizuna-textbox></kizuna-textbox>`,
    });
    expect(page.root).toEqualHtml(`
      <kizuna-textbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kizuna-textbox>
    `);
  });
});
