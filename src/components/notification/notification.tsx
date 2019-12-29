import { Component, Host, h, Prop } from '@stencil/core';
import { Color } from '../../interfaces/interfaces';
import { is, strFromArr } from '../../utils/utils';

@Component({
  tag: 'okt-notification',
  styleUrl: 'notification.scss'
})
export class Notification {
  @Prop() color: Color | 'link';

  get cls() {
    const values = [
      'notification',
      is(this.color)
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