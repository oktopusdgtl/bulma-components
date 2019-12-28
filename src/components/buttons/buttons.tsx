import { Component, Prop, Host, h } from '@stencil/core';
import { Size } from '../../interfaces/interfaces';
import { are, strFromArr } from '../../utils/utils';

@Component({
  tag: 'okt-buttons',
  styleUrl: 'buttons.scss'
})
export class Buttons {
  @Prop() size: Size;

  get cls() {
    const values = [
      'buttons',
      are(this.size)
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
