import { Component, Element, h, Prop, State } from '@stencil/core';
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

  render() {
    return (
      <div>
        <i class="icon-container" innerHTML={Icons.getIcon(this?.name)}></i>
      </div>
    );
  }
}
