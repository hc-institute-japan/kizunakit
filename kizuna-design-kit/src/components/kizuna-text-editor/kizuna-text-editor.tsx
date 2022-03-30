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

  _togglePopover = () => {
    this.open = !this.open;
  };

  _getPositionClassName = () => {
    switch (this.position) {
      case 'left':
        return 'popover-left-align-calendar';
      case 'right':
        return 'popover-right-align-calendar';
      case 'center':
        return 'popover-center-align-calendar';

      default:
        return '';
    }
  };
  render() {
    return (
      <div class={`text-editor ${!this.open && 'hidden-slot'}`}>
        <div class="format format-selected">
          <kizuna-icon name="bold"></kizuna-icon>
        </div>
        <div class="format">
          <kizuna-icon name="italic"></kizuna-icon>
        </div>
        <div class="format">
          <kizuna-icon name="underline"></kizuna-icon>
        </div>
        <div class="format">
          <kizuna-icon name="strikethrough"></kizuna-icon>
        </div>
        <div class="format">
          <kizuna-icon name="link"></kizuna-icon>
        </div>
      </div>
    );
  }
}
