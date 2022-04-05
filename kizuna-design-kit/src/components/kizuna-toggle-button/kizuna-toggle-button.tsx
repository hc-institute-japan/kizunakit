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

  render() {
    return (
      <label class={`switch ${this.classes?.toggleWrapper}`}>
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
