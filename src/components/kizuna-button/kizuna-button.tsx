import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-button',
  styleUrl: 'kizuna-button.css',
  shadow: true,
})
export class KizunaButton {
  @Prop() type: string;
  @Prop() disabled: boolean;
  @Prop() icon: string;
  @Prop() text: string = 'Button Text';
  @Prop() handleOnClick: Function;

  private getBtnType = () => {
    if (this.type?.toLowerCase() === 'primary') {
      return 'btn-primary';
    } else if (this.type?.toLowerCase() === 'secondary') {
      return 'btn-secondary';
    } else {
      return '';
    }
  };

  private getBtnDisabledClassName = () => {
    if (this.disabled && this.type?.toLowerCase() === 'primary') {
      return 'primary-disabled';
    } else if (this.disabled && this.type?.toLowerCase() == 'secondary') {
      return 'secondary-disabled';
    } else if (this.disabled) {
      return 'disabled';
    } else {
      return '';
    }
  };

  render() {
    return (
      <div>
        <button
          class={`btn ${this.getBtnType()} ${this.getBtnDisabledClassName()}`}
          onClick={() => this.handleOnClick}
        >
          {this.icon && <span class="btn-icon" innerHTML={this.icon} />}{' '}
          {this.text}
        </button>
      </div>
    );
  }
}
