import { Component, Host, Prop, h } from '@stencil/core';
import { Size } from '../../interfaces/interfaces';
import { are, fromBoolean, strFromArr } from '../../utils/utils';

@Component({
  tag: 'okt-tags',
  styleUrl: 'tags.scss'
})
export class Tags {

  @Prop() size: Size;
  @Prop() addons: boolean;

  get cls() {
    const values = [
      'tags',
      are(this.size),
      fromBoolean(this.addons, 'has-addons')
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
