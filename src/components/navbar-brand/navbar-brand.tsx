import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-navbar-brand',
  styleUrl: 'navbar-brand.scss'
})
export class NavbarBrand {

  render() {
    return (
      <Host class="navbar-brand">
        <slot></slot>
      </Host>
    );
  }
}
