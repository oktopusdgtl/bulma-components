import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-menu',
  styleUrl: 'menu.scss'
})
export class Menu {
  render() {
    return (
      <Host class="menu">
        <slot></slot>
      </Host>
    );
  }
}
