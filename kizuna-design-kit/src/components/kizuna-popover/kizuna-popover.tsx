import { Component, h, Prop, Watch } from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  tag: 'kizuna-popover',
  styleUrl: 'kizuna-popover.css',
  shadow: false,
})
export class KizunaPopover {
  @Prop() darkmode: boolean;
  @Prop({ mutable: true }) open: boolean = false;
  @Prop() position: string;
  @Prop() classes: { [key: string]: any };
  @Prop() id: string = uuidv4();
  @Prop() handleClose: Function;
  // @Element() el: HTMLElement;

  @Watch('open')
  setFocus() {
    if (this.open) {
      this._setPopoverFocus();
    }
  }

  // componentWillLoad() {
  //   this._setPopoverFocus();
  //   // window.addEventListener(
  //   //   'click',
  //   //   (e: Event) => {
  //   //     const target = e.target as HTMLElement;
  //   //     if (!this.el.contains(target)) {
  //   //       this.open = false;
  //   //     }
  //   //   },
  //   //   false,
  //   // );
  // }

  _getPositionClassName = () => {
    switch (this.position) {
      case 'left':
        return 'popover-left-align-calendar';
      case 'right':
        return 'popover-right-align-calendar';
      case 'center':
        return 'popover-center-align-calendar';

      default:
        return '';
    }
  };

  _togglePopover = () => {
    if (this.open) {
      this.handleClose && this.handleClose();
      this.open = false;
    } else {
      this.open = true;
    }
  };

  _handleClickOutside = () => {
    this.handleClose && this.handleClose();
    this.open = false;
  };

  _setPopoverFocus = () => {
    const element = document.getElementById(`popover-${this.id}`);
    element.focus();
  };

  render() {
    return (
      <div
        id={`popover-${this.id}`}
        tabIndex={1}
        onBlur={this._handleClickOutside}
      >
        <div
          class={`popoverMainContainer ${!this.open && 'hidden-slot'} ${
            this.classes?.root
          }`}
        >
          <div
            class={`popoverWrapper ${
              this.darkmode && 'popoverDarkmode'
            } ${this._getPositionClassName()} ${this.classes?.contentWrapper}`}
          >
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
