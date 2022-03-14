import { newE2EPage } from '@stencil/core/testing';

describe('kizuna-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kizuna-toggle></kizuna-toggle>');

    const element = await page.find('kizuna-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
