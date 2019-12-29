import { Component, Prop, Host, h } from '@stencil/core';
import { is, fromBoolean, strFromArr } from '../../utils/utils';

@Component({
  tag: 'okt-container',
  styleUrl: 'container.scss'
})
export class Container {

  @Prop() fluid: boolean;
  @Prop() breakpoint: 'widescreen' | 'fullhd';

  get cls() {
    const values = [
      'container',
      fromBoolean(this.fluid, 'is-fluid'),
      is(fromBoolean(Boolean(this.breakpoint), this.breakpoint))
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
