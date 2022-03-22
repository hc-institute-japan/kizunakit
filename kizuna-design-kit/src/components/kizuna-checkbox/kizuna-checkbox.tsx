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
  @Prop() classes: { [key: string]: any };

  render() {
    return (
      <label class={`container ${this.classes?.checkboxWrapper}`}>
        {this.value}
        <input
          class={`${this.classes?.input}`}
          disabled={this.disabled}
          type="checkbox"
          checked={this.checked}
          name={this.name}
          value={this.value}
        />
        <span class={`checkmark ${this.classes?.checkmark}`}></span>
      </label>
    );
  }
}
