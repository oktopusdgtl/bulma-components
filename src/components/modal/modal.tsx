import { Component, Watch, State, Host, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';
import { fromBoolean, strFromArr } from '../../utils/utils';

@Component({
  tag: 'okt-modal',
  styleUrl: 'modal.scss'
})
export class Modal {

  @State() isActive = false;

  @Prop() active;
  @Watch('active')
  handleActive(active: boolean) {
    this.isActive = active;
  }

  @Prop() hideCloseButton: boolean;
  @Prop() disableBackgroundClose: boolean;

  @Event({
    eventName: 'close',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) close: EventEmitter;

  @Listen('close')
  handleClose() {
    this.closeModal();
  }

  get cls() {
    const values = [
      'modal',
      fromBoolean(this.isActive, 'is-active')
    ];
    return strFromArr(values);
  }

  componentWillLoad() {
    this.active = this.isActive;
  }

  closeModal = () => {
    this.isActive = false;
    this.close.emit();
  }

  bgClose = () => {
    if (this.disableBackgroundClose) {
      return;
    }
    this.closeModal();
  }

  render() {
    return (
      <Host class={this.cls}>
        <div
          onClick={this.bgClose}
          class="modal-background"></div>
        <div class="modal-content">
          <slot></slot>
        </div>
        {!this.hideCloseButton && (<button
          onClick={this.closeModal}
          class="modal-close is-large"
          aria-label="close"></button>)}
      </Host>
    );
  }
}
