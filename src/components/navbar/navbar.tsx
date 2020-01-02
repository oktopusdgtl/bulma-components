import { Component, State, Prop, h, Host, Watch } from '@stencil/core';
import { Color } from '../../interfaces/interfaces';
import { is, strFromArr, fromBoolean } from '../../utils/utils';

export type Fixed = 'top' | 'bottom';

@Component({
  tag: 'okt-navbar',
  styleUrl: 'navbar.scss'
})
export class Navbar {

  @Prop() color: Color | 'link';
  @Prop() hideBurger = false;
  @Prop() transparent = false;
  @Prop() spaced = false;
  @Prop() fixed: Fixed;
  @Watch('fixed')
  handleFixed(fixed: Fixed) {
    this.init(fixed);
  }

  @State() isOpen = false;

  get cls() {
    const fixed = this.fixed ? `is-fixed-${this.fixed}` : '';
    const values = [
      'navbar',
      fromBoolean(this.transparent, 'is-transparent'),
      fromBoolean(this.spaced, 'is-spaced'),
      is(this.color),
      fixed
    ];

    return strFromArr(values);
  }

  init(fixed: Fixed) {
    document.documentElement.classList.add(`has-navbar-fixed-${fixed}`);
  }

  toggle = () => {
    this.isOpen = !this.isOpen;
  }

  render() {

    const navbarMenuCls = {
      'navbar-menu': true,
      'is-active': this.isOpen
    }

    return (
      <Host class={this.cls}>
        <okt-navbar-brand>
          <slot name="brand"></slot>
          {!this.hideBurger && (
            <okt-navbar-burger onClick={this.toggle} active={this.isOpen}></okt-navbar-burger>
          )}
        </okt-navbar-brand>
        <div class={navbarMenuCls}>
          <div class="navbar-start">
            <slot name="menu-start"></slot>
          </div>
          <div class="navbar-end">
            <slot name="menu-end"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
