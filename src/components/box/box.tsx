import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-box'
})
export class Box {
  render() {
    return (
      <Host class="box">
        <slot></slot>
      </Host>
    );
  }
}
