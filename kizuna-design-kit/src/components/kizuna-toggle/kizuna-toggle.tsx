import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-toggle',
  styleUrl: 'kizuna-toggle.css',
  shadow: true,
})
export class KizunaToggleButton {
  @Prop() checked: boolean;
  @Prop() disabled: boolean;

  render() {
    return (
      <label class="switch">
        <input
          disabled={this.disabled}
          type="checkbox"
          checked={this.checked}
        />
        <span class="slider"></span>
      </label>
    );
  }
}
