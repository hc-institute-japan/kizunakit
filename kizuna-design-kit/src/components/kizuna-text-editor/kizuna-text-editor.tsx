import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'kizuna-text-editor',
  styleUrl: 'kizuna-text-editor.css',
  shadow: false,
})
export class KizunaTextEditor {
  @Prop() darkmode: boolean;
  @Prop({ mutable: true }) open: boolean = false;
  @Prop() position: string;
  @Prop({ mutable: true }) selected: string;
  @Prop() onChange: Function;

  _togglePopover = () => {
    this.open = !this.open;
  };

  _getPositionClassName = () => {
    switch (this.position) {
      case 'left':
        return 'text-editor-left-align';
      case 'right':
        return 'text-editor-right-align';
      case 'center':
        return 'text-editor-center-align';

      default:
        return 'text-editor-center-align';
    }
  };

  _getSelectedClassName = (name: string) => {
    if (name === this.selected) {
      return 'format-selected';
    }
  };

  _handleClick = (newSelectedFormat: string) => {
    this.selected = newSelectedFormat;
    this.onChange && this.onChange(newSelectedFormat);
  };

  render() {
    return (
      <div
        class={`text-editor ${this.darkmode && 'textEditorDark'} ${
          !this.open && 'hidden-slot'
        } ${this._getPositionClassName()}`}
      >
        <div
          class={`format ${this._getSelectedClassName('bold')}`}
          onClick={() => this._handleClick('bold')}
        >
          <kizuna-icon name="bold"></kizuna-icon>
        </div>
        <div
          class={`format ${this._getSelectedClassName('italic')}`}
          onClick={() => this._handleClick('italic')}
        >
          <kizuna-icon name="italic"></kizuna-icon>
        </div>
        <div
          class={`format ${this._getSelectedClassName('underline')}`}
          onClick={() => this._handleClick('underline')}
        >
          <kizuna-icon name="underline"></kizuna-icon>
        </div>
        <div
          class={`format ${this._getSelectedClassName('strikethrough')}`}
          onClick={() => this._handleClick('strikethrough')}
        >
          <kizuna-icon name="strikethrough"></kizuna-icon>
        </div>
        <div
          class={`format ${this._getSelectedClassName('link')}`}
          onClick={() => this._handleClick('link')}
        >
          <kizuna-icon name="link"></kizuna-icon>
        </div>
      </div>
    );
  }
}
