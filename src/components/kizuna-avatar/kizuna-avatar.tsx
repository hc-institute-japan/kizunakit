import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kizuna-avatar',
  styleUrl: 'kizuna-avatar.css',
  shadow: true,
})
export class KizunaAvatar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
