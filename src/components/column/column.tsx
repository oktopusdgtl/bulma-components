import { Component, Host, h, Prop } from '@stencil/core';
import { strFromArr, is, fromBoolean, isOffset } from '../../utils/utils';

export type ColumnSize = 'half' |
  'three-quarters' |
  'two-thirds' |
  'one-third' |
  'one-quarter' |
  'full' |
  'four-fifths' |
  'three-fifths' |
  'two-fifths' |
  'one-fifth' |
  number;

export type Narrow = 'mobile' |
  'tablet' |
  'touch' |
  'desktop' |
  'widescreen' |
  'fullhd' |
  boolean;

@Component({
  tag: 'okt-column'
})
export class Column {

  @Prop() mobile: ColumnSize;
  @Prop() tablet: ColumnSize;
  @Prop() touch: ColumnSize;
  @Prop() desktop: ColumnSize;
  @Prop() widescreen: ColumnSize;
  @Prop() fullhd: ColumnSize;

  @Prop() offsetMobile: ColumnSize;
  @Prop() offsetTablet: ColumnSize;
  @Prop() offsetTouch: ColumnSize;
  @Prop() offsetDesktop: ColumnSize;
  @Prop() offsetWidescreen: ColumnSize;
  @Prop() offsetFullhd: ColumnSize;

  @Prop() offset: ColumnSize;
  @Prop() columns: ColumnSize;

  @Prop() narrow: Narrow;

  get cls(): string {
    const narrowIsStr = typeof this.narrow === 'string';
    const narrow = narrowIsStr ? is(this.narrow) : fromBoolean(this.narrow, 'is-narrow');

    const values = [
      'column',
      is(this.mobile, 'mobile'),
      is(this.tablet, 'tablet'),
      is(this.touch, 'touch'),
      is(this.desktop, 'desktop'),
      is(this.widescreen, 'widescreen'),
      is(this.fullhd, 'fullhd'),

      //offset
      isOffset(this.offsetMobile, 'mobile'),
      isOffset(this.offsetTablet, 'tablet'),
      isOffset(this.offsetTouch, 'touch'),
      isOffset(this.offsetDesktop, 'desktop'),
      isOffset(this.offsetWidescreen, 'widescreen'),
      isOffset(this.offsetFullhd, 'fullhd'),

      is(this.columns),
      narrow,
    ];

    return strFromArr(values);
  }

  render() {
    return (
      <Host class={this.cls}>
        <slot></slot>
      </Host>
    );
  }
}
