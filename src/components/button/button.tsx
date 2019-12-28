import { Component, Prop, Host, h } from '@stencil/core';
import { ButtonColor, Size } from '../../interfaces/interfaces';
import { strFromArr, is, fromBoolean } from '../../utils/utils';

@Component({
  tag: 'okt-button',
  styleUrl: 'button.scss'
})
export class Button {

  @Prop() color: ButtonColor;
  @Prop() href: string;
  @Prop() tag: 'a' | 'button' | 'input';
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';
  @Prop() active: boolean;
  @Prop() hovered: boolean;
  @Prop() focused: boolean;
  @Prop() disabled: boolean;
  @Prop() loading: boolean;
  @Prop() rounded: boolean;
  @Prop() inverted: boolean;
  @Prop() outlined: boolean;
  @Prop() light: boolean;

  @Prop() size: Size;
  @Prop() fullWidth: boolean;

  get cls() {
    const values = [
      'button',
      is(this.color),
      is(fromBoolean(this.active, 'active')),
      is(fromBoolean(this.hovered, 'hovered')),
      is(fromBoolean(this.focused, 'focused')),
      is(fromBoolean(this.loading, 'loading')),
      is(fromBoolean(this.rounded, 'rounded')),
      is(fromBoolean(this.inverted, 'inverted')),
      is(fromBoolean(this.outlined, 'outlined')),
      is(fromBoolean(this.light, 'light')),
      is(this.size),
      is(fromBoolean(this.fullWidth, 'fullwidth')),
    ];

    return strFromArr(values);;
  }



  render() {

    const cls = this.cls;

    if (this.tag === 'a') {
      return (
        <a
          href={this.href}
          class={cls}
        >
          <slot></slot>
        </a>
      );
    }

    const hostCls = {
      'is-fullwidth': this.fullWidth
    };

    return (
      <Host class={hostCls}>
        <button
          class={cls}
          type={this.type}
          disabled={this.disabled}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
