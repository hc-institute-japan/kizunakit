import { newE2EPage } from '@stencil/core/testing';

describe('kizuna-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kizuna-button></kizuna-button>');

    const element = await page.find('kizuna-button');
    expect(element).toHaveClass('hydrated');
  });
});
