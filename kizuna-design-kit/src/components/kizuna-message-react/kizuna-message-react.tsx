import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-message-react',
  styleUrl: 'kizuna-message-react.css',
  shadow: true,
})
export class KizunaMessageReact {
  @Prop() classes: { [key: string]: any };
  @Prop() emoji: string;
  @Prop() count: Number;
  @Prop() darkmode: boolean;
  render() {
    return (
      <span
        class={`message-react ${this.darkmode && 'messageReactDarkMode'} ${
          this.classes?.messageReactWrapper
        }`}
      >
        {this.emoji && (
          <span class={`react-emoji`}>
            <kizuna-icon
              name={this.emoji}
              classes={{ root: this.classes?.emoji }}
            ></kizuna-icon>
          </span>
        )}

        {this.count ? (
          <span class={`count ${this.classes?.count}`}>{this.count}</span>
        ) : (
          ''
        )}
      </span>
    );
  }
}
