import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-container',
  styleUrl: 'container.scss'
})
export class Container {
  render() {
    return (
      <Host class="container">
        <slot></slot>
      </Host>
    );
  }
}
