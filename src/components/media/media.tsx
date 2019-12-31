import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-media',
  styleUrl: 'media.scss'
})
export class Media {
  render() {
    return (
      <Host class="media">
        <slot></slot>
      </Host>
    );
  }
}
