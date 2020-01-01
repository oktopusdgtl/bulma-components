import { Component, State, h, Listen } from '@stencil/core';

@Component({
  tag: 'okt-demo-modal'
})
export class DemoModal {

  @State() showExampleModal = false;
  @State() showImageModal = false;
  @State() showCardModal = false;
  @State() showDisableBgModal = false;

  @Listen('close')
  handleClose() {
    this.showExampleModal = false;
    this.showImageModal = false;
    this.showCardModal = false;
    this.showDisableBgModal = false;
  }

  exampleModal = () => {
    this.showExampleModal = true;
  }

  imageModal = () => {
    this.showImageModal = true;
  }

  cardModal = () => {
    this.showCardModal = true;
  }

  disableBgModal = () => {
    this.showDisableBgModal = true;
  }

  render() {
    return (
      <div>
        <section>

          <h2 class="subtitle">Component</h2>
          <h1 class="title">Modal</h1>
          <hr />

          <okt-columns>
            <okt-column>
              <okt-button color="primary" size="large" onClick={this.exampleModal}>
                Launch Example Modal
              </okt-button>
              <okt-modal active={this.showExampleModal}>
                <okt-box>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                </okt-box>
              </okt-modal>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-modal>
  <okt-box>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
  </okt-box>
</okt-modal>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />

          <okt-columns>
            <okt-column>
              <okt-button color="primary" size="large" onClick={this.imageModal}>
                Launch Image Modal
              </okt-button>
              <okt-modal active={this.showImageModal}>
                <okt-image size="4by3" src="https://bulma.io/images/placeholders/1280x960.png">
                </okt-image>
              </okt-modal>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-modal>
  <okt-image size="4by3" src="https://bulma.io/images/placeholders/1280x960.png">
  </okt-image>
</okt-modal>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />

          <okt-columns>
            <okt-column>
              <okt-button color="primary" size="large" onClick={this.cardModal}>
                Launch Card Modal
              </okt-button>
              <okt-modal active={this.showCardModal} hide-close-button>
                <okt-modal-card>
                  <h2 slot="card-header">Modal Card</h2>
                  <div slot="card-body">
                    <p>Card content</p>
                  </div>
                  <div slot="card-footer">
                    <okt-button color="primary">Ok</okt-button>
                  </div>
                </okt-modal-card>
              </okt-modal>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-modal hide-close-button>
  <okt-modal-card>
  <h2 slot="card-header">Modal Card</h2>
  <div slot="card-body">
    <p>Card content</p>
  </div>
  <div slot="card-footer">
    <okt-button color="primary">Ok</okt-button>
  </div>
  </okt-modal-card>
</okt-modal>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <h2 class="subtitle">
            Disable on background click close modal
          </h2>
          <okt-columns>
            <okt-column>
              <okt-button color="primary" size="large" onClick={this.disableBgModal}>
                Launch Example Modal
              </okt-button>
              <okt-modal active={this.showDisableBgModal} disable-background-close>
                <okt-box>
                  <p>Disable on background click close modal</p>
                </okt-box>
              </okt-modal>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-modal disable-background-close>
  <okt-box>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
  </okt-box>
</okt-modal>
              `}</okt-code>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}
