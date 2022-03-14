import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'kizuna-checkbox',
  styleUrl: 'kizuna-checkbox.css',
  shadow: true,
})
export class KizunaCheckbox {
  @Prop() name: string;
  @Prop() value: string;
  @Prop() checked: boolean;
  @Prop() disabled: boolean;

  render() {
    return (
      <div>
        <label class="container">
          {this.value}
          <input
            disabled={this.disabled}
            type="checkbox"
            checked={this.checked}
            name={this.name}
            value={this.value}
          />
          <span class="checkmark"></span>
        </label>
      </div>
    );
  }
}
