import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-message-header',
  styleUrl: 'message-header.scss'
})
export class MessageHeader {

  render() {
    return (
      <Host class="message-header">
        <slot></slot>
      </Host>
    );
  }
}
