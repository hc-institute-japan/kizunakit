import { newSpecPage } from '@stencil/core/testing';
import { KizunaMessageReact } from '../kizuna-message-react';

describe('kizuna-message-react', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KizunaMessageReact],
      html: `<kizuna-message-react></kizuna-message-react>`,
    });
    expect(page.root).toEqualHtml(`
      <kizuna-message-react>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kizuna-message-react>
    `);
  });
});
