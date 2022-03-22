import { newE2EPage } from '@stencil/core/testing';

describe('kizuna-textbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kizuna-textbox></kizuna-textbox>');

    const element = await page.find('kizuna-textbox');
    expect(element).toHaveClass('hydrated');
  });
});
