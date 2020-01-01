import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-menu-label',
  styleUrl: 'menu-label.scss'
})
export class MenuLabel {
  render() {
    return (
      <Host class="menu-label">
        <slot></slot>
      </Host>
    );
  }
}
