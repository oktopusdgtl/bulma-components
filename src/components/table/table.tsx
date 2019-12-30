import { Component, Prop, h } from '@stencil/core';
import { fromBoolean, strFromArr } from '../../utils/utils';

@Component({
  tag: 'okt-table',
  styleUrl: 'table.scss'
})
export class Table {

  @Prop() bordered: boolean;
  @Prop() striped: boolean;
  @Prop() narrow: boolean;
  @Prop() hoverable: boolean;
  @Prop() fullWidth: boolean;
  @Prop() scrollable: boolean;

  get cls() {
    const values = [
      'table',
      fromBoolean(this.bordered, 'is-bordered'),
      fromBoolean(this.striped, 'is-striped'),
      fromBoolean(this.narrow, 'is-narrow'),
      fromBoolean(this.hoverable, 'is-hoverable'),
      fromBoolean(this.fullWidth, 'is-fullwidth')
    ];
    return strFromArr(values);
  }

  render() {
    if (this.scrollable) {
      return (
        <okt-table-container>
          <table class={this.cls}>
            <slot></slot>
          </table>
        </okt-table-container>
      );
    }
    return (
      <table class={this.cls}>
        <slot></slot>
      </table>
    );
  }
}