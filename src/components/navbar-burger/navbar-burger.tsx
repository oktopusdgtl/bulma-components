import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'okt-navbar-burger',
  styleUrl: 'navbar-burger.scss'
})
export class NavbarBurger {

  @Prop() active: boolean;

  render() {
    const cls = {
      'navbar-burger': true,
      'is-active': this.active
    };
    const expanded = this.active ? 'true' : 'false';

    return (
      <a
        role="button"
        class={cls}
        aria-label="menu"
        aria-expanded={expanded}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    );
  }
}
