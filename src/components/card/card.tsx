import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-card',
  styleUrl: 'card.scss'
})
export class Card {
  render() {
    return (
      <Host class="card">
        <slot></slot>
      </Host>
    );
  }
}
