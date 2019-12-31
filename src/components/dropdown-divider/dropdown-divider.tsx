import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-dropdown-divider'
})
export class DropdownDivider {
  render() {
    return (
      <Host class="dropdown-divider"></Host>
    );
  }
}
