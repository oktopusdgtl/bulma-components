import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'okt-pagination-ellipsis',
  styleUrl: 'pagination-ellipsis.scss'
})
export class PaginationEllipsis {
  render() {
    return (
      <Host class="pagination-ellipsis">
        &hellip;
      </Host>
    );
  }
}
