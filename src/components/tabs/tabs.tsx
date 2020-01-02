import { Component, Prop, Host, h } from '@stencil/core';
import { Size } from '../../interfaces/interfaces';
import { is, strFromArr, fromBoolean } from '../../utils/utils';

@Component({
  tag: 'okt-tabs',
  styleUrl: 'tabs.scss'
})
export class Tabs {

  @Prop() alignment: 'centered' | 'right';
  @Prop() size: Size;
  @Prop() boxed = false;
  @Prop() toggle = false;
  @Prop() toggleRounded = false;
  @Prop() fullWidth = false;

  get cls() {
    const alignment = this.alignment ? `is-${this.alignment}` : '';
    const values = [
      'tabs',
      is(this.size),
      alignment,
      fromBoolean(this.boxed, 'is-boxed'),
      fromBoolean(this.toggle, 'is-toggle'),
      fromBoolean(this.toggleRounded, 'is-toggle is-toggle-rounded'),
      fromBoolean(this.fullWidth, 'is-fullwidth')
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