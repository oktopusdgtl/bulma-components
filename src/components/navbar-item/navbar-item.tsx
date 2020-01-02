import { Component, Host, Prop, h } from '@stencil/core';
import { fromBoolean, strFromArr } from '../../utils/utils';

@Component({
  tag: 'okt-navbar-item',
  styleUrl: 'navbar-item.scss'
})
export class NavbarItem {
  @Prop() dropdown: boolean;
  @Prop() hoverable: boolean;

  get cls() {
    const values = [
      'navbar-item',
      fromBoolean(this.dropdown, 'has-dropdown'),
      fromBoolean(this.hoverable, 'is-hoverable'),
    ];
    return strFromArr(values);
  }

  render() {
    return (
      <Host class={this.cls}>
        <slot></slot>
      </Host>
    );
  }
}
