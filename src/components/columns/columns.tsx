import { Component, Prop, Host, h } from '@stencil/core';
import { is, strFromArr, fromBoolean } from '../../utils/utils';

export type Stage = 'mobile' |
  'tablet' |
  'touch' |
  'desktop' |
  'widescreen' |
  'fullhd';

@Component({
  tag: 'okt-columns'
})
export class Columns {

  @Prop() stage: Stage;
  @Prop() gapless: boolean;
  @Prop() variable: boolean;
  @Prop() multiline: boolean;
  @Prop() vcentered: boolean;
  @Prop() centered: boolean;

  @Prop() gap: number;
  @Prop() gapMobile: number;
  @Prop() gapTablet: number;
  @Prop() gapDesktop: number;
  @Prop() gapWidescreen: number;
  @Prop() gapFullhd: number;

  get cls(): string {
    const values = [
      'columns',
      is(this.stage),
      fromBoolean(this.gapless, 'is-gapless'),
      fromBoolean(this.variable, 'is-variable'),
      fromBoolean(this.multiline, 'is-multiline'),
      fromBoolean(this.vcentered, 'is-vcentered'),
      fromBoolean(this.centered, 'is-centered'),
      is(`${this.gap}`),
      is(`${this.gapMobile}`, 'mobile'),
      is(`${this.gapTablet}`, 'tablet'),
      is(`${this.gapDesktop}`, 'desktop'),
      is(`${this.gapWidescreen}`, 'widescreen'),
      is(`${this.gapFullhd}`, 'fullhd'),
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