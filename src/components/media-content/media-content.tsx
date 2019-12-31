import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-media-content',
  styleUrl: 'media-content.scss'
})
export class MediaContent {
  render() {
    return (
      <Host class="media-content">
        <slot></slot>
      </Host>
    );
  }
}
