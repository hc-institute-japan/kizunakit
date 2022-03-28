import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-badge',
  styleUrl: 'kizuna-badge.css',
  shadow: true,
})
export class KizunaBadge {
  @Prop() text: string;
  @Prop() icon: Element;
  @Prop() classes: { [key: string]: any };
  render() {
    return (
      <span class={`badge ${this.classes?.badgeWrapper}`}>
        {this.icon && (
          <span class={`badge-icon ${this.classes?.icon}`}>{this?.icon}</span>
        )}
        {this.text ? <span class="text">{this.text}</span> : ''}
      </span>
    );
  }
}
