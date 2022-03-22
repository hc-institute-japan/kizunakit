import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'kizuna-textbox',
  styleUrl: 'kizuna-textbox.css',
  shadow: false,
})
export class KizunaTextbox {
  @Prop() name: string;
  @Prop() id: string;
  @Prop() value: string;
  @Prop() placeholder: string;
  @Prop() label: string;
  @Prop() classes: { [key: string]: any };

  render() {
    return (
      <div>
        <label class={`${this.classes?.labelWrapper}`}>{this.label}</label>
        <input
          class={`${this.classes?.input}`}
          type="text"
          id={this.id}
          name={this.name}
          placeholder={this.placeholder}
          value={this.value}
        />
      </div>
    );
  }
}
