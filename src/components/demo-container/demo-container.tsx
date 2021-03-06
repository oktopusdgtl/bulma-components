import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-container'
})
export class DemoContainer {
  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Layout</h2>
          <h1 class="title">Container</h1>
          <hr />
          <okt-columns>
            <okt-column>
              <okt-container>
                <okt-notification>
                  This container is centered on desktop
                </okt-notification>
              </okt-container>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}