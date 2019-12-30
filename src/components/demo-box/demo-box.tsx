import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-box'
})
export class DemoBox {
  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Box</h1>
          <okt-columns>
            <okt-column>
              <okt-box>
                <h1 class="Title">Box Component</h1>
              </okt-box>
              <okt-box href="/">
                <h1 class="Title">Link Box Component</h1>
              </okt-box>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-box>
  <h1 class="Title">Box Component</h1>
</okt-box>

<okt-box href="/">
  <h1 class="Title">Link Box Component</h1>
</okt-box>
            `}</okt-code>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}