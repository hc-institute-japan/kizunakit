import { newSpecPage } from '@stencil/core/testing';
import { KizunaTextEditor } from '../kizuna-text-editor';

describe('kizuna-text-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KizunaTextEditor],
      html: `<kizuna-text-editor></kizuna-text-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <kizuna-text-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kizuna-text-editor>
    `);
  });
});
