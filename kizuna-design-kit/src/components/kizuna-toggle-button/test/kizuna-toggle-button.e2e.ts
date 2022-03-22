import { newE2EPage } from '@stencil/core/testing';

describe('kizuna-toggle-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kizuna-toggle-button></kizuna-toggle-button>');

    const element = await page.find('kizuna-toggle-button');
    expect(element).toHaveClass('hydrated');
  });
});
