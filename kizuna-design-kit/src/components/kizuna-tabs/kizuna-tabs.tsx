import { Component, Prop, h } from '@stencil/core';

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
  @Prop() onClick: any;

  _onClickHandler = (event: Event, clickedMenu: string) => {
    this.value = clickedMenu;
    this.onClick(event, clickedMenu);
  };

  private renderMenus = () => {
    const menusMarkup = this.menus?.map((menu, index) => {
      const isMenuActive = this.value === menu?.value;
      return (
        <div
          class={`tabMenu ${isMenuActive && 'isActive'} ${
            this.classes?.tabMenu
          }`}
          key={index}
          onClick={e => this._onClickHandler(e, menu?.value)}
        >
          {menu?.name}
        </div>
      );
    });

    return menusMarkup;
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
