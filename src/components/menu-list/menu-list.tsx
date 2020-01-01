import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-menu-list',
  styleUrl: 'menu-list.scss'
})
export class MenuList {
  render() {
    return (
      <Host class="menu-list">
        <slot></slot>
      </Host>
    );
  }
}
