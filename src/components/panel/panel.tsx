import { Component, Prop, Host, h } from '@stencil/core';
import { is, strFromArr } from '../../utils/utils';
import { Color } from '../../interfaces/interfaces';

@Component({
  tag: 'okt-panel',
  styleUrl: 'panel.scss'
})
export class Panel {

  @Prop() color: Color | 'link';

  get cls() {
    const values = [
      'panel',
      is(this.color)
    ];

    return strFromArr(values);
  }
  render() {
    return (
      <Host class={this.cls}>
        <div class="panel-heading">
          <slot name="heading"></slot>
        </div>
        <slot></slot>
      </Host>
    );
  }
}
