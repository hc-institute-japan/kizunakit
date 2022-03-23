import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'kizuna-popover',
  styleUrl: 'kizuna-popover.css',
  shadow: false,
})
export class KizunaPopover {
  @Prop() buttonText: string = 'test';
  @Prop() darkmode: boolean;
  @State() open: boolean = false;
  //   @Prop() text: string = 'Button Text';
  //   @Prop() handleOnClick: Function;
  //   @Prop() classes: { [key: string]: any };

  _togglePopover = () => {
    this.open = !this.open;
  };

  render() {
    return (
      <div>
        <div onClick={this._togglePopover} class={`toggleButton`}>
          {this?.buttonText}
        </div>

        {this.open && (
          <div class={`popoverWrapper ${this.darkmode && 'popoverDarkmode'}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias
            dicta dolores necessitatibus, consequuntur earum vero fugit corporis
            vel aut asperiores accusantium sit fuga voluptas veritatis laborum
            tempora. Assumenda, id?
          </div>
        )}
      </div>
    );
  }
}
