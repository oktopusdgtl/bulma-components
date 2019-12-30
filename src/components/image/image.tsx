import { Component, Host, Prop, h } from '@stencil/core';
import { is, strFromArr } from '../../utils/utils';

export type ImageSize = 'square' |
  '1by1' |
  '5by4' |
  '4by3' |
  '3by2' |
  '5by3' |
  '16by9' |
  '2by1' |
  '3by1' |
  '4by5' |
  '3by4' |
  '2by3' |
  '3by5' |
  '9by16' |
  '1by2' |
  '1by3';

@Component({
  tag: 'okt-image',
  styleUrl: 'image.scss'
})
export class Image {

  @Prop() rounded: boolean;
  @Prop() size: 16 | 24 | 32 | 48 | 64 | 96 | 128 | ImageSize;
  @Prop() alt: string;
  @Prop() src: string;
  @Prop() hideImage: boolean;

  get cls() {
    const isRatio = typeof this.size === 'string' && (this.size === 'square' || this.size.indexOf('b') > -1);
    const size = isRatio ? this.size : `${this.size}x${this.size}`;
    const values = [
      'image',
      is(this.size ? size : '')
    ];
    return strFromArr(values);
  }

  render() {
    const imgCls = {
      'is-rounded': this.rounded
    };

    return (
      <Host class={this.cls}>
        {!this.hideImage && (<img
          class={imgCls}
          alt={this.alt}
          src={this.src} />)}
        <slot></slot>
      </Host>
    );
  }
}