import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'okt-demo'
})
export class Demo {
  @State() primaryColor = '#00d1b2';

  get rootStyle() {
    return {
      '--primary': this.primaryColor
    }
  }

  render() {
    return (
      <div style={this.rootStyle}>
        <h1 class="title">Bulma Web Components</h1>
        <p>Web components version of the famous Bulma css library</p>
        <p>With CSS Variables support</p>
        <p>Made using StencilJS</p>
        <okt-notification>
          <h2 class="subtitle">Bulma + CSS Variables</h2>
          <okt-columns>
            <okt-field>
              <okt-control>
                <input
                  type="text"
                  class="input"
                  placeholder="Primary color"
                  value={this.primaryColor}
                  onChange={(event: any) => {
                    this.primaryColor = event.target.value;
                  }}
                />
              </okt-control>
            </okt-field>
          </okt-columns>
          <p>style="--primary:{this.primaryColor};"</p>
          <okt-columns>
            <okt-column>
              <okt-button color="primary">Primary Button</okt-button>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-notification color="primary">
                Notification Primary Color
              </okt-notification>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-icon color="primary">
                <i class="fas fa-check"></i>
              </okt-icon>
            </okt-column>
          </okt-columns>
        </okt-notification>
      </div>
    );
  }
}
