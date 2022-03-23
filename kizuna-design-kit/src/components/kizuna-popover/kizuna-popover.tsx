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

  listsItems = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
      name: 'Settings',
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
      name: 'Message Request',
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
      name: 'Blocked',
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
      name: 'Report an issue',
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
      name: 'Logout',
    },
  ];

  _togglePopover = () => {
    this.open = !this.open;
  };

  _renderListItems = () => {
    const markup = this.listsItems?.map((item, index) => {
      return (
        <kizuna-list-item
          key={index}
          text={item?.name}
          icon={item.icon}
        ></kizuna-list-item>
      );
    });

    return markup;
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
