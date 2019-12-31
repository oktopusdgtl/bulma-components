import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-card-image'
})
export class CardImage {

  render() {
    return (
      <Host class="card-image">
        <slot></slot>
      </Host>
    );
  }
}
