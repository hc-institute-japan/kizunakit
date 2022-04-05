import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-divider',
  styleUrl: 'kizuna-divider.css',
  shadow: false,
})
export class KizunaDivider {
  @Prop() classes: { [key: string]: any };
  render() {
    return <hr class={`divider ${this.classes?.divider}`} />;
  }
}
