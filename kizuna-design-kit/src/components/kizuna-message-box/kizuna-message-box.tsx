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
  @Prop() reactionList: Array<{ [key: string]: any }>;

  _renderMessageStatus = () => {
    if (this.sent) return;

    if (this.messageStatus === 'sent') {
      return (
        <div class={`message-status-indicator ${this.classes?.messageStatus}`}>
          <kizuna-icon
            name="check"
            classes={{
              root: `message-indicator-icon ${this.classes?.messageStatusIcon}`,
            }}
          />
        </div>
      );
    } else if (this.messageStatus === 'delivered') {
      return (
        <div class={`message-status-indicator ${this.classes?.messageStatus}`}>
          <kizuna-icon
            name="check"
            classes={{
              root: `message-indicator-icon delivered-icon-colors ${this.classes?.messageStatusIcon}`,
            }}
          />
          <kizuna-icon
            name="check"
            classes={{
              root: `message-indicator-icon overlap-icon delivered-icon-colors ${this.classes?.messageStatusIcon}`,
            }}
          />
        </div>
      );
    } else if (this.messageStatus === 'seen') {
      return (
        <div class={`message-status-indicator ${this.classes?.messageStatus}`}>
          <kizuna-icon
            name="check"
            classes={{
              root: `message-indicator-icon seen-icon-colors ${this.classes?.messageStatusIcon}`,
            }}
          />
          <kizuna-icon
            name="check"
            classes={{
              root: `message-indicator-icon overlap-icon seen-icon-colors ${this.classes?.messageStatusIcon}`,
            }}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  _renderReactions = () => {
    return this.reactionList?.map((reaction, index) => {
      return (
        <span
          key={index}
          class={`reaction-container ${this.classes?.reactionContainer}`}
        >
          <kizuna-message-react
            emoji={reaction.icon}
            count={reaction.count}
            darkmode={this.darkmode}
            classes={{
              messageReactWrapper: this.classes?.messageReactWrapper,
              emoji: this.classes?.emoji,
              count: this.classes?.count,
            }}
          />
        </span>
      );
    });
  };

  _getWrapperClassName = () => {
    if (this.sent) {
      if (this.darkmode) {
        return 'received-message-darkmode';
      } else {
        return 'received-message';
      }
    } else {
      if (this.darkmode) {
        return 'sent-message-darkmode';
      } else {
        return 'sent-message';
      }
    }
  };

  render() {
    return (
      <div
        class={`message-box-wrapper ${this._getWrapperClassName()} ${
          this.classes?.root
        }`}
      >
        <p class={`message-content ${this.classes?.message}`}>{this.message}</p>

        <div class={`message-metadata ${this.classes?.metadata}`}>
          {this._renderMessageStatus()}
          <span class={`message-time ${this.classes?.time}`}>{this.time}</span>
        </div>

        <div class={`reactions-container ${this.classes?.reactionsContainer}`}>
          {this._renderReactions()}
        </div>
      </div>
    );
  }
}
