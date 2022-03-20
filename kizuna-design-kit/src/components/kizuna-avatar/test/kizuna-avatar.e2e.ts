import { newE2EPage } from '@stencil/core/testing';

describe('kizuna-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kizuna-avatar></kizuna-avatar>');

    const element = await page.find('kizuna-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
