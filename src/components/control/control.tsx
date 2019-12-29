import { Component, Host, Prop, h } from '@stencil/core';
import { has, fromBoolean, strFromArr } from '../../utils/utils';

@Component({
  tag: 'okt-control'
})
export class Control {

  @Prop() iconLeft: boolean;
  @Prop() iconRight: boolean;
  @Prop() expanded: boolean;

  get cls() {
    const values = [
      'control',
      fromBoolean(this.expanded, 'is-expanded'),
      has(fromBoolean(this.iconRight, 'icons-right')),
      has(fromBoolean(this.iconLeft, 'icons-left'))
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
