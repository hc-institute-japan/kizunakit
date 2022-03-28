import { newE2EPage } from '@stencil/core/testing';

describe('kizuna-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kizuna-badge></kizuna-badge>');

    const element = await page.find('kizuna-badge');
    expect(element).toHaveClass('hydrated');
  });
});
