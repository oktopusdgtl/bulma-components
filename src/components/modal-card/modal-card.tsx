import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'okt-modal-card',
  styleUrl: 'modal-card.scss'
})
export class ModalCard {

  @Prop() hideCloseButton: boolean;

  @Event({
    composed: true,
    cancelable: true,
    bubbles: true,
  }) close: EventEmitter;

  render() {
    return (
      <div class="modal-card">
        <header class="modal-card-head">
          <span class="modal-card-title">
            <slot name="card-header"></slot>
          </span>
          {!this.hideCloseButton && (<button
            onClick={() => {
              this.close.emit();
            }}
            class="delete"
            aria-label="close"></button>)}
        </header>
        <section class="modal-card-body">
          <slot name="card-body"></slot>
        </section>
        <footer class="modal-card-foot">
          <slot name="card-footer"></slot>
        </footer>
      </div>
    );
  }
}
