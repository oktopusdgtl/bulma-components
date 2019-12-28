import { Component, Host, Prop, h } from '@stencil/core';
import { Color } from '../../interfaces/interfaces';
import { is } from '../../utils/utils';

@Component({
  tag: 'okt-callout',
  styleUrl: 'callout.scss'
})
export class Callout {
  @Prop() color: Color;

  get cls() {
    return is(this.color);
  }

  render() {

    return (
      <Host class={this.cls}>
        <slot></slot>
      </Host>
    );
  }
}