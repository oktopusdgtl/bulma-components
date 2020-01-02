import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-panel-tabs',
  styleUrl: 'panel-tabs.scss'
})
export class PanelTabs {
  render() {
    return (
      <Host class="panel-tabs">
        <slot></slot>
      </Host>
    );
  }
}
