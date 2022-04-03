import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-list-item',
  styleUrl: 'kizuna-list-item.css',
  shadow: false,
})
export class KizunaListItem {
  @Prop() icon: string;
  @Prop() text: string = 'List Item Text';
  @Prop() handleOnClick: Function;
  @Prop() classes: { [key: string]: any };
  @Prop() divider: boolean;

  render() {
    return (
      <slot>
        <div
          class={`listItemWrapper ${this.classes?.listItemWrapper}`}
          onClick={() => this.handleOnClick}
        >
          {this.icon && (
            <span class={`list-item-icon ${this.classes?.listItemIcon}`}>
              <kizuna-icon name={this.icon}></kizuna-icon>
            </span>
          )}
          {this.text}
        </div>
        {this.divider && (
          <kizuna-divider classes={{ divider: this.classes?.divider }} />
        )}
      </slot>
    );
  }
}
