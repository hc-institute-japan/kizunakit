import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-list-item',
  styleUrl: 'kizuna-list-item.css',
  shadow: false,
})
export class KizunaListItem {
  @Prop() type: string;
  @Prop() disabled: boolean;
  @Prop() icon: Element;
  @Prop() text: string = 'List Item Text';
  @Prop() handleOnClick: Function;
  @Prop() classes: { [key: string]: any };

  render() {
    console.log(this.icon);
    return (
      <div
        class={`listItemWrapper ${this.classes?.listItemWrapper}`}
        onClick={() => this.handleOnClick}
      >
        {this.icon && (
          <span class={`list-item-icon ${this.classes?.listItemIcon}`}>
            {this.icon}
          </span>
        )}
        {this.text}
      </div>
    );
  }
}
