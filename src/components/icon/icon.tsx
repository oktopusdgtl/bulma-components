import { Component, Prop, Host, h } from '@stencil/core';
import { Color, Size } from '../../interfaces/interfaces';
import { is, strFromArr, hasText } from '../../utils/utils';

@Component({
  tag: 'okt-icon',
  styleUrl: 'icon.scss'
})
export class Icon {

  @Prop() color: Color;
  @Prop() size: Size;

  get cls() {
    const values = [
      'icon',
      hasText(this.color),
      is(this.size)
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
