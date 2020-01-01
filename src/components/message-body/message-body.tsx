import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-message-body',
  styleUrl: 'message-body.scss'
})
export class MessageBody {

  render() {
    return (
      <Host class="message-body">
        <slot></slot>
      </Host>
    );
  }
}
