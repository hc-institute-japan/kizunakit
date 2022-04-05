import { Component, Element, h, Prop } from '@stencil/core';
import * as Icons from './assets';

@Component({
  tag: 'kizuna-icon',
  styleUrl: 'kizuna-icon.css',
  assetsDirs: ['assets'],
})
export class KizunaIcon {
  @Element() host: HTMLDivElement;
  @Prop() name: string = '';
  @Prop() size: string;
  @Prop() classes: { [key: string]: any };

  render() {
    return (
      <i
        class={`icon-container ${this.classes?.root}`}
        innerHTML={Icons.getIcon(this?.name?.toLowerCase())}
      ></i>
    );
  }
}
