import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-divider',
  styleUrl: 'kizuna-divider.css',
  shadow: true,
})
export class KizunaDivider {
  @Prop() classes: { [key: string]: any };
  render() {
    return <hr class={`divider ${this.classes?.dividerWrapper}`} />;
  }
}
