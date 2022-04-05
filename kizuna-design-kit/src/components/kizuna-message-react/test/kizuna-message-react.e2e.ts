import { newE2EPage } from '@stencil/core/testing';

describe('kizuna-message-react', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kizuna-message-react></kizuna-message-react>');

    const element = await page.find('kizuna-message-react');
    expect(element).toHaveClass('hydrated');
  });
});
