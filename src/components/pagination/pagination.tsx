import { Component, Prop, Host, h } from '@stencil/core';
import { Size } from '../../interfaces/interfaces';
import { is, strFromArr, fromBoolean } from '../../utils/utils';

@Component({
  tag: 'okt-pagination',
  styleUrl: 'pagination.scss'
})
export class Pagination {

  @Prop() size: Size;
  @Prop() alignment: 'centered' | 'right';
  @Prop() rounded = false;
  @Prop() disablePrevious = false;
  @Prop() disableNext = false;

  get cls() {
    const alignment = this.alignment ? `is-${this.alignment}` : '';
    const values = [
      'pagination',
      is(this.size),
      fromBoolean(this.rounded, 'is-rounded'),
      alignment
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
