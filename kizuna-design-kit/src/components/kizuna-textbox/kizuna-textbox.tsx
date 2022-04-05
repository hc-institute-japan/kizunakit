import { Component, Prop, h, State } from '@stencil/core';
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
  @Prop() rounded: boolean = true;

  @State() inFocus: boolean = false;
  @State() showClose: boolean = false;

  inputElement = (<span></span>);

  // @Element() el: HTMLElement;
  componentDidLoad() {
    this.inputElement = document.getElementById(`textbox-${this.id}`);
  }

  // componentWillLoad() {
  //   window.addEventListener(
  //     'click',
  //     (e: Event) => {
  //       const target = e.target as HTMLElement;
  //       if (!this.el.contains(target)) {
  //         this.inFocus = false;
  //         this.inputElement.blur();
  //       }
  //     },
  //     false,
  //   );
  // }

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
    this.inputElement?.focus();
  };

  _handleChange = e => {
    this.value = e.target.value;
    this.onChange && this.onChange(this.value);
    this.inputElement?.focus();
  };

  _handleEmoticonClear = () => {
    this.onEmoticonClick && this.onEmoticonClick();
  };

  render() {
    return (
      <div class="textboxWrapper">
        <input
          id={`textbox-${this.id}`}
          tabIndex={0}
          class={`textfield ${this.getTextFieldVariant()} ${
            this.classes?.input
          } ${this._getTextAlign()} ${this.startIconName && 'padding-start'} ${
            this.inFocus && 'textfield-left-align-force'
          } ${
            this.variant === 'outlined' && this.rounded && 'rounded-input'
          } padding-end`}
          type="text"
          name={this.name}
          placeholder={`${this.placeholder}`}
          value={this.value}
          autoFocus
          onChange={this._handleChange}
          onFocusin={() => (this.inFocus = true)}
          onBlur={() => (this.inFocus = false)}
        />

        <div>
          {this.startIconName && (
            <span class={`start-icon ${this.inFocus && 'active-icon'}`}>
              <kizuna-icon name={`${this.startIconName}`} />
            </span>
          )}
          {!this.emoticon && (
            <span
              class={`end-icon active-icon ${!this.inFocus && 'show-end-icon'}`}
              onClick={this._handleClear}
            >
              <kizuna-icon name="close" />
            </span>
          )}
        </div>

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
