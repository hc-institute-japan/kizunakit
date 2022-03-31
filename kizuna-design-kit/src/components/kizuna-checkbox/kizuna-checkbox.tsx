import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'kizuna-checkbox',
  styleUrl: 'kizuna-checkbox.css',
  shadow: false,
})
export class KizunaCheckbox {
  @Prop() name: string;
  @Prop() value: string;
  @Prop() checked: boolean;
  @Prop() disabled: boolean;
  @Prop() rounded: boolean;
  @Prop() classes: { [key: string]: any };

  render() {
    return (
      <label class={`checkbox-container ${this.classes?.checkboxWrapper}`}>
        {this.value}
        <input
          class={`${this.classes?.input}`}
          disabled={this.disabled}
          type="checkbox"
          checked={this.checked}
          name={this.name}
          value={this.value}
        />
        <span
          class={`checkmark ${this.rounded ? 'checkbox-rounded' : ''} ${
            this.classes?.checkmark
          }`}
        ></span>
      </label>
    );
  }
}
