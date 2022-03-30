import { newE2EPage } from '@stencil/core/testing';

describe('kizuna-text-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kizuna-text-editor></kizuna-text-editor>');

    const element = await page.find('kizuna-text-editor');
    expect(element).toHaveClass('hydrated');
  });
});
