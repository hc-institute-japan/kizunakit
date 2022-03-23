import { newE2EPage } from '@stencil/core/testing';

describe('kizuna-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kizuna-tabs></kizuna-tabs>');

    const element = await page.find('kizuna-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
