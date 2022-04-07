import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'kizuna-list-item',
  styleUrl: 'kizuna-list-item.css',
  shadow: false,
})
export class KizunaListItem {
  @Prop() icon: string;
  @Prop() text: string = 'List Item Text';
  @Prop() value: string = '';
  @Prop() handleOnClick: Function;
  @Prop() classes: { [key: string]: any };
  @Prop() divider: boolean;

  @Event() handleClick: EventEmitter<string>;

  _onClickHandler = () => {
    this.handleClick.emit(this.value);
  };

  render() {
    return (
      <slot>
        <div
          class={`listItemWrapper ${this.classes?.listItemWrapper}`}
          onClick={this._onClickHandler}
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
