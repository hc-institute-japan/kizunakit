import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-message-box',
  styleUrl: 'kizuna-message-box.css',
  shadow: false,
})
export class KizunaMessageBox {
  @Prop() message: string;
  @Prop() time: string;
  @Prop() classes: { [key: string]: any };
  @Prop() messageStatus: string;
  @Prop() darkmode: boolean;
  @Prop() sent: boolean;
  @Prop() reactionList: Array<{ [key: string]: string }>;

  _renderMessageStatus = () => {
    if (this.messageStatus === 'sent') {
      return (
        <div class="message-status-indicator">
          <kizuna-icon
            name="check"
            classes={{ root: 'message-indicator-icon' }}
          />
        </div>
      );
    } else if (this.messageStatus === 'delivered') {
      return (
        <div class="message-status-indicator">
          <kizuna-icon
            name="check"
            classes={{ root: 'message-indicator-icon delivered-icon-colors' }}
          />
          <kizuna-icon
            name="check"
            classes={{
              root: 'message-indicator-icon overlap-icon delivered-icon-colors',
            }}
          />
        </div>
      );
    } else if (this.messageStatus === 'seen') {
      return (
        <div class="message-status-indicator">
          <kizuna-icon
            name="check"
            classes={{ root: 'message-indicator-icon seen-icon-colors' }}
          />
          <kizuna-icon
            name="check"
            classes={{
              root: 'message-indicator-icon overlap-icon seen-icon-colors',
            }}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  _getWrapperClassName = () => {
    if (this.sent) {
      if (this.darkmode) {
        return 'sent-message-darkmode';
      } else {
        return 'sent-message';
      }
    } else {
      if (this.darkmode) {
        return 'received-message-darkmode';
      } else {
        return 'received-message';
      }
    }
  };

  render() {
    return (
      <div class={`message-box-wrapper ${this._getWrapperClassName()}`}>
        <p class="message-content">{this.message}</p>

        <div class="message-metadata">
          {this._renderMessageStatus()}
          <span class="message-time">{this.time}</span>
        </div>
      </div>
    );
  }
}
