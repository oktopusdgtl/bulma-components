import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'okt-box',
  styleUrl: 'box.scss'
})
export class Box {

  @Prop() isLink: boolean;
  @Prop() href: string;

  render() {
    if (this.isLink || this.href) {
      return (
        <a class="box" href={this.href}>
          <slot></slot>
        </a >
      );
    }
    return (
      <Host class="box">
        <slot></slot>
      </Host>
    );
  }
}
