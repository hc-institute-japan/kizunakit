import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-badge',
  styleUrl: 'kizuna-badge.css',
  shadow: false,
})
export class KizunaBadge {
  @Prop() text: string;
  @Prop() icon: string;
  @Prop() classes: { [key: string]: any };
  @Prop() darkmode: boolean;
  render() {
    return (
      <span
        class={`badge ${this.darkmode && 'badge-dark'} ${
          this.classes?.badgeWrapper
        }`}
      >
        {this.icon && (
          <span class={`badge-icon ${this.classes?.icon}`}>
            <kizuna-icon name={this.icon}></kizuna-icon>
          </span>
        )}
        {this.text ? (
          <span class={`text ${this.classes?.text}`}>{this.text}</span>
        ) : (
          ''
        )}
      </span>
    );
  }
}
