import { Component, h, Prop } from '@stencil/core';
import nameFormatter from '../../util/name-formatter';

@Component({
  tag: 'kizuna-avatar',
  styleUrl: 'kizuna-avatar.css',
  shadow: false,
})
export class KizunaAvatar {
  @Prop() size: string;
  @Prop() image: string;
  @Prop() status: string;
  @Prop() indicator: boolean;
  @Prop() rounded: string;
  @Prop() toolkit: string;
  @Prop() name: string;
  @Prop() classes: { [key: string]: any };

  // Functions
  private getIndicatorSize = (): string => {
    if (this.size?.toLowerCase() === 'lg') {
      return 'ind-lg';
    } else if (this.size?.toLowerCase() === 'xl') {
      return 'ind-xl';
    } else {
      return 'ind-md';
    }
  };

  private getAvatarImage = (): HTMLElement => {
    if (this.image) {
      return <img class="image" src={this.image} />;
    } else {
      return <span>{nameFormatter(this.name)}</span>;
    }
  };

  private getImageContainerType = (): string => {
    if (!this.image) {
      return 'bordered-avatar';
    } else {
      return '';
    }
  };

  render() {
    return (
      <div class={`avatar ${this.size} ${this.classes?.avatarWrapper}`}>
        <div
          class={`image-container ${this.getImageContainerType()} ${
            this.classes?.imageWrapper
          }`}
        >
          {' '}
          {this.getAvatarImage()}
        </div>
        {this.indicator && (
          <div
            class={`indicator ${this.getIndicatorSize()} ${this.status} ${
              this.classes?.indicator
            }`}
          />
        )}
      </div>
    );
  }
}
