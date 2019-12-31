import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-card-content',
  styleUrl: 'card-content.scss'
})
export class CardContent {

  render() {
    return (
      <Host class="card-content">
        <slot></slot>
      </Host>
    );
  }
}
