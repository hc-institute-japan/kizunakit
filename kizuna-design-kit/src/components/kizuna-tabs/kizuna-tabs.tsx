import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kizuna-tabs',
  styleUrl: 'kizuna-tabs.css',
  shadow: true,
})
export class KizunaTabs {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
