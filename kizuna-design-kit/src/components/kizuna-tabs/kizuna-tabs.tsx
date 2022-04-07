import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'kizuna-tabs',
  styleUrl: 'kizuna-tabs.css',
  shadow: false,
})
export class KizunaTabs {
  @Prop({ mutable: true }) value: string;
  @Prop() darkmode: boolean;
  @Prop() menus: Array<{ [key: string]: string }>;
  @Prop() classes: { [key: string]: string };

  @Event() handleClick: EventEmitter<string>;

  _onClickHandler = (clickedMenu: string) => {
    this.value = clickedMenu;
    this.handleClick.emit(clickedMenu);
  };

  private renderMenus = () => {
    return this.menus?.map((menu, index) => {
      const isMenuActive = this.value === menu?.value;
      return (
        <div
          class={`tabMenu ${isMenuActive && 'isActive'} ${
            this.classes?.tabMenu
          }`}
          key={index}
          onClick={() => this._onClickHandler(menu?.value)}
        >
          {menu?.name}
        </div>
      );
    });
  };

  render() {
    return (
      <div
        class={`tabWrapper ${this.classes?.tabWrapper} ${
          this.darkmode && 'tabDarkMode'
        }`}
      >
        {this.renderMenus()}
      </div>
    );
  }
}
