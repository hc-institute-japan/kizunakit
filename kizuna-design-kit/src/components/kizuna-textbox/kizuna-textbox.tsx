import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'kizuna-textbox',
  styleUrl: 'kizuna-textbox.css',
  shadow: false,
})
export class KizunaTextbox {
  @Prop() name: string;
  @Prop() id: string;
  @Prop({ mutable: true }) value: string;
  @Prop() placeholder: string;
  @Prop() label: string;
  @Prop() variant: string;
  @Prop() icon: string;
  @Prop() isFocus: boolean = false;
  @Prop() classes: { [key: string]: any };
  @Prop() align: string;
  @Prop() startIconName: string;
  @Prop() onChange: Function;
  @State() inFocus: boolean = false;

  private getTextFieldVariant = () => {
    if (this.variant?.toLowerCase() === 'standard') {
      return 'textfield-standard';
    } else if (this.variant?.toLowerCase() === 'outlined') {
      return 'textfield-outlined';
    } else {
      return '';
    }
  };

  private _getTextAlign = () => {
    if (this.align === 'center') {
      return 'textfield-center-align';
    } else if (this.align === 'right') {
      return 'textfield-right-align';
    } else {
      return 'textfield-left-align';
    }
  };

  _handleClear = () => {
    this.inFocus = true;
    this.value = '';
    this.onChange && this.onChange('');
  };

  _handleChange = e => {
    this.value = e.target.value;
    this.onChange && this.onChange(this.value);
  };

  _toggleClear = () => {
    this.inFocus = !this.inFocus;
  };

  render() {
    console.log(this.inFocus);
    return (
      <div class="textboxWrapper ">
        <input
          class={`textfield ${this.getTextFieldVariant()} ${
            this.classes?.input
          } ${this._getTextAlign()} ${
            this.startIconName && this.inFocus && 'padding-start'
          } padding-end`}
          type="text"
          id={this.id}
          name={this.name}
          placeholder={`${this.placeholder}`}
          value={this.value}
          onChange={this._handleChange}
          onFocusin={() => (this.inFocus = true)}
          onFocusout={() => (this.inFocus = false)}
          // onBlur={() => {
          //   this.inFocus = false;
          // }}

          // onFocusoutCapture={() => console.log('focus out')}
          // onClick={() => console.log('clicked')}
          // onMouseOut={() => console.log('out')}
          // onMouseIn={() => console.log('')}
        />

        {this.inFocus && (
          <div>
            {this.startIconName && (
              <span class="start-icon">
                <kizuna-icon name={`${this.startIconName}`} />
              </span>
            )}
            {/* 
            <span class="end-icon" onClick={this._handleClear}>
              <kizuna-icon name="close" />
            </span> */}
          </div>
        )}

        <label class={`labelWrapper ${this.classes?.labelWrapper}`}>
          {this.label}
        </label>
      </div>
    );
  }
}
