import { Component, Prop, Host, h } from '@stencil/core';
import { Size } from '../../interfaces/interfaces';
import { is, strFromArr } from '../../utils/utils';

@Component({
  tag: 'okt-content',
  styleUrl: 'content.scss'
})
export class Content {

  @Prop() size: Size;

  get cls() {
    const values = [
      'content',
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
