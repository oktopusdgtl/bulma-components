import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-content'
})
export class Content {
  render() {
    return (
      <Host class="content">
        <slot></slot>
      </Host>
    );
  }
}
