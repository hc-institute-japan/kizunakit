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
  @Prop() variant: string;
  @Prop() classes: { [key: string]: any };

  private getTextFieldVariant = () => {
    if (this.variant?.toLowerCase() === 'standard') {
      return 'textfield-standard';
    } else if (this.variant?.toLowerCase() === 'outlined') {
      return 'textfield-outlined';
    } else {
      return '';
    }
  };

  render() {
    return (
      <div>
        <label class={`${this.classes?.labelWrapper} `}>{this.label}</label>
        <input
          class={`textfield ${this.getTextFieldVariant()} ${
            this.classes?.input
          }`}
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
