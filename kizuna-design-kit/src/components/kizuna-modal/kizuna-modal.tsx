import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-modal',
  styleUrl: 'kizuna-modal.css',
  shadow: false,
})
export class MyComponent {
  @Prop({ mutable: true }) open;
  @Prop() transparent = false;
  @Prop() onClose: Function;
  @Prop() classes: { [key: string]: any };
  @Prop() closeIcon: Element;

  _handleClose = () => {
    this.open = false;
    this.onClose();
  };

  render() {
    return (
      <div
        class={`overlay ${this.open ? 'is-visible' : ''} ${
          this.transparent ? 'is-transparent' : ''
        } ${this.classes?.overlayBackground}`}
        onClick={this._handleClose}
      >
        <div
          class={`modal-window ${this.classes?.modalWrapper}`}
          onClick={e => e.stopPropagation()}
        >
          <span
            class={`modal-close-icon ${this.classes?.closeIcon}`}
            onClick={this._handleClose}
          >
            {this.closeIcon || <kizuna-icon name="close" />}
          </span>
          <div class={`modal-window__content ${this.classes?.modalContent}`}>
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
