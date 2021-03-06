import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-button',
  styleUrl: 'kizuna-button.css',
  shadow: false,
})
export class KizunaButton {
  @Prop() type: string;
  @Prop() disabled: boolean;
  @Prop() icon: string;
  @Prop() text: string;
  @Prop() handleClick: Function;
  @Prop() classes: { [key: string]: any };
  @Prop() rounded: boolean;
  @Prop() disableClickEvent: boolean;

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
      <button
        disabled={this.disabled}
        class={`btn ${this.rounded && 'buttonRounded'} ${
          this.classes?.btnWrapper
        } ${this.getBtnType()} ${this.getBtnDisabledClassName()} ${
          this.disableClickEvent && 'disable-btn-event'
        }`}
        onClick={
          this.disableClickEvent
            ? e => e.preventDefault
            : () => this.handleClick && this.handleClick()
        }
      >
        {this.icon && (
          <span class={`btn-icon ${this.classes?.icon}`}>
            <kizuna-icon name={this.icon}></kizuna-icon>
          </span>
        )}
        {this.text}
      </button>
    );
  }
}
