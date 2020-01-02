import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'okt-panel-block',
  styleUrl: 'panel-block.scss'
})
export class PanelBlock {
  @Prop() active = false;
  render() {
    const cls = {
      'panel-block': true,
      'is-active': this.active
    };
    return (
      <Host class={cls}>
        <slot></slot>
      </Host>
    );
  }
}
