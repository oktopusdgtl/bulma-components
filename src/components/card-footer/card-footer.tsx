import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-card-footer'
})
export class CardFooter {

  render() {
    return (
      <Host class="card-footer">
        <slot></slot>
      </Host>
    );
  }
}
