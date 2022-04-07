import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-toggle-button',
  styleUrl: 'kizuna-toggle-button.css',
  shadow: false,
})
export class KizunaToggleButton {
  @Prop() checked: boolean;
  @Prop() disabled: boolean;
  @Prop() classes: { [key: string]: any };
  @Prop() handleClick: Function;

  render() {
    return (
      <label
        class={`switch ${this.classes?.toggleWrapper}`}
        onClick={() => this.handleClick && this.handleClick()}
      >
        <input
          class={`${this.classes?.input}`}
          disabled={this.disabled}
          type="checkbox"
          checked={this.checked}
        />
        <span class={`slider ${this.classes?.slider}`}></span>
      </label>
    );
  }
}
