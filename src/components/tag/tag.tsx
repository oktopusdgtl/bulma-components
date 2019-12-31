import { Component, Prop, Host, h } from '@stencil/core';
import { fromBoolean, strFromArr, is } from '../../utils/utils';
import { Color, Size } from '../../interfaces/interfaces';

@Component({
  tag: 'okt-tag',
  styleUrl: 'tag.scss'
})
export class Tag {

  @Prop() color: Color | 'link';
  @Prop() size: Size;
  @Prop() light: boolean;
  @Prop() rounded: boolean;
  @Prop() del: boolean;

  get cls() {
    const values = [
      'tag',
      is(this.color),
      is(this.size),
      fromBoolean(this.light, 'is-light'),
      fromBoolean(this.rounded, 'is-rounded'),
      fromBoolean(this.del, 'is-delete')
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
