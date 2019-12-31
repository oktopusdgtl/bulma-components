import { Component, Host, Prop, h } from '@stencil/core';
import { Size } from '../../interfaces/interfaces';
import { has, strFromArr, is } from '../../utils/utils';

@Component({
  tag: 'okt-breadcrumb',
  styleUrl: 'breadcrumb.scss'
})
export class Breadcrumb {
  @Prop() size: Size;
  @Prop() alignment: 'centered' | 'right';
  @Prop() separator: 'arrow' | 'bullet' | 'dot' | 'succeeds';

  get cls() {
    const values = [
      'breadcrumb',
      is(this.size),
      is(this.alignment),
      has(this.separator, 'separator')
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
