import { newSpecPage } from '@stencil/core/testing';
import { KizunaAvatar } from '../kizuna-avatar';

describe('kizuna-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KizunaAvatar],
      html: `<kizuna-avatar></kizuna-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <kizuna-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kizuna-avatar>
    `);
  });
});
