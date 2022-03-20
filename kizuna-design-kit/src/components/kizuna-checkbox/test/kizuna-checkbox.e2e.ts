import { newE2EPage } from '@stencil/core/testing';

describe('kizuna-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kizuna-checkbox></kizuna-checkbox>');

    const element = await page.find('kizuna-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
