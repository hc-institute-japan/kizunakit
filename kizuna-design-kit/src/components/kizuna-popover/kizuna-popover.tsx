import { Component, h, Prop } from '@stencil/core';

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
  // @Element() el: HTMLElement;

  // componentWillLoad() {
  //   window.addEventListener(
  //     'click',
  //     (e: Event) => {
  //       const target = e.target as HTMLElement;
  //       if (!this.el.contains(target)) {
  //         this.open = false;
  //       }
  //     },
  //     false,
  //   );
  // }

  _togglePopover = () => {
    this.open = !this.open;
  };

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

  render() {
    return (
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
    );
  }
}
