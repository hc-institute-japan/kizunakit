import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-avatar',
  styleUrl: 'kizuna-avatar.css',
  shadow: true,
})
export class KizunaAvatar {
  @Prop() size: string | number;

  @Prop() image: string;

  @Prop() appearance: string;

  @Prop() status: string;

  @Prop() indicator: boolean;

  @Prop() rounded: string;

  @Prop() toolkit: string;

  // Functions
  private setIndicator = (): string => {
    if (this.size === 'lg') {
      return 'ind-lg';
    } else if (this.size === 'xl') {
      return 'ind-xl';
    } else {
      return 'ind-md';
    }
  };

  private setRoundedSize = (): string => {
    if (this.rounded === 'sm') {
      return 'rounded-sm';
    } else if (this.rounded === 'md') {
      return 'rounded-md';
    } else if (this.rounded === 'lg') {
      return 'rounded-lg';
    } else {
      return '';
    }
  };

  render() {
    return (
      <div>
        <div class={`avatar ${this.size}`}>
          <div
            class={`image-container ${
              this.appearance === 'square' ? 'square' : 'circle'
            } ${this.appearance === 'square' && this.setRoundedSize()}`}
          >
            <img class="image" src={this.image} />
          </div>
          {this.size !== 'sm' &&
            this.size !== 'xs' &&
            this.appearance !== 'square' &&
            this.indicator && (
              <div
                class={`indicator ${this.setIndicator()} ${this.status}`}
              ></div>
            )}
        </div>
        {/* <span class="toolkit">asdasdaasdasdasdsd</span> */}
      </div>
    );
  }
}
