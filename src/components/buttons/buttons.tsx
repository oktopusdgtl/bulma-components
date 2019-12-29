import { Component, Prop, Host, h } from '@stencil/core';
import { Size } from '../../interfaces/interfaces';
import { is, fromBoolean, are, strFromArr } from '../../utils/utils';

@Component({
  tag: 'okt-buttons',
  styleUrl: 'buttons.scss'
})
export class Buttons {
  @Prop() size: Size;
  @Prop() addons: boolean;
  @Prop() alignment: 'centered' | 'right';

  get cls() {
    const values = [
      'buttons',
      are(this.size),
      is(this.alignment),
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
