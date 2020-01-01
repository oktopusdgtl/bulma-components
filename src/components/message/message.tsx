import { Component, Host, Prop, h } from '@stencil/core';
import { Color, Size } from '../../interfaces/interfaces';
import { strFromArr, is } from '../../utils/utils';

@Component({
  tag: 'okt-message',
  styleUrl: 'message.scss'
})
export class Message {

  @Prop() color: Color | 'link';
  @Prop() size: Size;

  get cls() {
    const values = [
      'message',
      is(this.color),
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
