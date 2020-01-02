import { Component, Element, State, Prop, h, Host, Watch } from '@stencil/core';
import { fromBoolean, strFromArr } from '../../utils/utils';

@Component({
  tag: 'okt-dropdown',
  styleUrl: 'dropdown.scss'
})
export class Dropdown {

  @Element() el: any;

  @State() isActive: boolean;

  @Prop() hoverable: boolean;
  @Prop() right: boolean;
  @Prop() up: boolean;
  @Prop() active: boolean;
  @Watch('active')
  activeHandler(active) {
    this.initActive(active);
  }

  componentWillLoad() {
    this.initActive(this.active);
  }

  initActive(active: any) {
    if (typeof active === 'string' && active === 'false') {
      this.isActive = false;
      return;
    }
    this.isActive = active;
    if (this.isActive) {
      this.addListener();
    }
  }

  get cls() {
    const values = [
      'dropdown',
      fromBoolean(this.hoverable, 'is-hoverable'),
      fromBoolean(this.up, 'is-up'),
      fromBoolean(this.right, 'is-right'),
      fromBoolean(this.isActive, 'is-active'),
    ];

    return strFromArr(values);
  }

  trigger = () => {
    this.isActive = !this.isActive;

    if (this.isActive) {
      this.addListener();
    }
  }

  handleBlur = () => {
    setTimeout(() => {
      this.isActive = false;
    }, 200);
  }

  addListener = () => {
    this.el.querySelector('.dropdown-trigger .button').focus();
    setTimeout(() => {
      const target = document.activeElement;
      target.addEventListener('blur', this.handleBlur);
    }, 0);
  }

  render() {
    return (
      <Host class={this.cls}>
        <div class="dropdown-trigger" onClick={this.trigger}>
          <slot name="trigger"></slot>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <slot name="content"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
