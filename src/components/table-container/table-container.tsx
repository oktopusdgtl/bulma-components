import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-table-container',
  styleUrl: 'table-container.scss'
})
export class TableContainer {
  render() {
    return (
      <Host class="table-container">
        <slot></slot>
      </Host>
    );
  }
}
