import { Component, Prop, Host, h } from '@stencil/core';
import { is, has, fromBoolean, strFromArr } from '../../utils/utils';

@Component({
  tag: 'okt-field'
})
export class Field {

  @Prop() addons: boolean;
  @Prop() addonsAlignment: 'centered' | 'right';
  @Prop() groupAlignment: 'centered' | 'right';
  @Prop() horizontal: boolean;
  @Prop() grouped: boolean;
  @Prop() groupedMultiline: boolean;

  get cls() {
    const addonsAlignment = this.addonsAlignment ? `addons-${this.addonsAlignment}` : '';
    const groupAlignment = this.groupAlignment ? `grouped-${this.groupAlignment}` : '';

    const values = [
      'field',
      fromBoolean(this.horizontal, 'is-horizontal'),
      fromBoolean(this.addons, 'has-addons'),
      fromBoolean(this.grouped, 'is-grouped'),
      fromBoolean(this.groupedMultiline, 'is-grouped-multiline'),
      has(addonsAlignment),
      is(groupAlignment)
    ];

    return strFromArr(values);;
  }

  render() {
    return (
      <Host class={this.cls}>
        <slot></slot>
      </Host>
    );
  }
}
