import { Component, h, Host, Prop } from '@stencil/core';
import { fromBoolean, strFromArr } from '../../utils/utils';

@Component({
  tag: 'okt-pagination-link',
  styleUrl: 'pagination-link.scss'
})
export class PaginationLink {

  @Prop() current: boolean;

  get cls() {
    const values = [
      'pagination-link',
      fromBoolean(this.current, 'is-current')
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
