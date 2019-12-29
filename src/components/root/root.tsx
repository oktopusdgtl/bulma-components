import { Component, h } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'okt-root',
  styleUrl: 'root.scss'
})
export class Root {
  render() {
    return (
      <okt-bulma>
        <section>
          <okt-container>
            <okt-columns>
              <okt-column columns="three-quarters">
                <stencil-router>
                  <stencil-route-switch scrollTopOffset={0}>
                    <stencil-route url="/bulma-components/" component="okt-demo" exact />
                    <stencil-route url="/bulma-components/button/" component="okt-demo-button" />
                    <stencil-route url="/bulma-components/column/" component="okt-demo-column" />
                  </stencil-route-switch>
                </stencil-router>
              </okt-column>

              <okt-column>
                <div class="nav">
                  <okt-button inverted color="link" tag="a" href="/bulma-components/" fullWidth>Home</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/button/" fullWidth>Button</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/column/" fullWidth>Column</okt-button>
                </div>
              </okt-column>
            </okt-columns>
          </okt-container>
        </section>
      </okt-bulma>
    );
  }
}