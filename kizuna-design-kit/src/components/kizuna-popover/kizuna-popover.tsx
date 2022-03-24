import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'kizuna-popover',
  styleUrl: 'kizuna-popover.css',
  shadow: false,
})
export class KizunaPopover {
  @Prop() buttonText: string = 'test';
  @Prop() darkmode: boolean;
  @Prop() itemList: Array<{ [key: string]: any }>;
  @State() open: boolean = false;

  _togglePopover = () => {
    this.open = !this.open;
  };

  _renderListItems = () => {
    return this.itemList?.map((item, index) => {
      return (
        <kizuna-list-item
          key={index}
          text={item?.name}
          icon={item.icon}
        ></kizuna-list-item>
      );
    });
  };

  render() {
    return (
      <div>
        <div onClick={this._togglePopover} class={`toggleButton`}>
          {this?.buttonText}
        </div>

        {this.open && (
          <div class={`popoverWrapper ${this.darkmode && 'popoverDarkmode'}`}>
            {this._renderListItems()}
          </div>
        )}
      </div>
    );
  }
}
