import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-media-left',
  styleUrl: 'media-left.scss'
})
export class MediaLeft {
  render() {
    return (
      <Host class="media-left">
        <slot></slot>
      </Host>
    );
  }
}
