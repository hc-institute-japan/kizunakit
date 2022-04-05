import { newE2EPage } from '@stencil/core/testing';

describe('kizuna-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kizuna-divider></kizuna-divider>');

    const element = await page.find('kizuna-divider');
    expect(element).toHaveClass('hydrated');
  });
});
