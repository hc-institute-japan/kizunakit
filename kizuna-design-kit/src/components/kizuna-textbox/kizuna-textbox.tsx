import { Component, Prop, h, State, Element } from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  tag: 'kizuna-textbox',
  styleUrl: 'kizuna-textbox.css',
  shadow: false,
})
export class KizunaTextbox {
  @Prop() name: string;
  @Prop() id: string = uuidv4();
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
  @Prop() onEmoticonClick: Function;
  @Prop() emoticon: boolean;
  @State() inFocus: boolean = false;
  @Element() el: HTMLElement;

  inputElement = document.getElementById(this.id);

  componentWillLoad() {
    window.addEventListener(
      'click',
      (e: Event) => {
        const target = e.target as HTMLElement;
        if (!this.el.contains(target)) {
          this.inFocus = false;
          this.inputElement.blur();
        }
      },
      false,
    );
  }

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
    this.value = '';
    this.onChange && this.onChange('');
  };

  _handleChange = e => {
    this.value = e.target.value;
    this.onChange && this.onChange(this.value);
    this.inputElement.focus();
  };

  _handleEmoticonClear = () => {
    this.onEmoticonClick && this.onEmoticonClick();
  };

  render() {
    return (
      <div class="textboxWrapper">
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
        />

        {this.inFocus && (
          <div>
            {this.startIconName && (
              <span class="start-icon">
                <kizuna-icon name={`${this.startIconName}`} />
              </span>
            )}
            {!this.emoticon && (
              <span class="end-icon" onClick={this._handleClear}>
                <kizuna-icon name="close" />
              </span>
            )}
          </div>
        )}

        {this.emoticon && (
          <span class="emoticon-icon" onClick={this._handleEmoticonClear}>
            <kizuna-icon
              name="emoticon"
              classes={{ root: `emoticonIcon ${this.classes?.emoticonIcon}` }}
            />
          </span>
        )}

        {this.label && (
          <label class={`labelWrapper ${this.classes?.labelWrapper}`}>
            {this.label}
          </label>
        )}
      </div>
    );
  }
}
