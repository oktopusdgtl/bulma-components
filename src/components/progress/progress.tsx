import { Component, Prop, h } from '@stencil/core';
import { Color, Size } from '../../interfaces/interfaces';
import { is, strFromArr } from '../../utils/utils';

@Component({
  tag: 'okt-progress',
  styleUrl: 'progress.scss'
})
export class Progress {

  @Prop() color: Color | 'link';
  @Prop() size: Size;
  @Prop() value: string;
  @Prop() max = "100";

  get cls() {
    const values = [
      'progress',
      is(this.color),
      is(this.size)
    ];

    return strFromArr(values);
  }

  render() {
    return (
      <progress
        class={this.cls}
        max={this.max}
        value={this.value}>
        <slot></slot>
      </progress>
    );
  }
}