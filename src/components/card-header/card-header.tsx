import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-card-header'
})
export class CardHeader {
  render() {
    return (
      <Host class="card-header">
        <slot></slot>
      </Host>
    );
  }
}
