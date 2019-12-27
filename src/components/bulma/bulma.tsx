import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'okt-bulma',
  styleUrl: 'bulma.scss'
})
export class Bulma {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}