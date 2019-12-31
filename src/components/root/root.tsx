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
                    <stencil-route url="/bulma-components/container/" component="okt-demo-container" />
                    <stencil-route url="/bulma-components/notification/" component="okt-demo-notification" />
                    <stencil-route url="/bulma-components/box/" component="okt-demo-box" />
                    <stencil-route url="/bulma-components/content/" component="okt-demo-content" />
                    <stencil-route url="/bulma-components/icon/" component="okt-demo-icon" />
                    <stencil-route url="/bulma-components/image/" component="okt-demo-image" />
                    <stencil-route url="/bulma-components/progress/" component="okt-demo-progress" />
                    <stencil-route url="/bulma-components/table/" component="okt-demo-table" />
                    <stencil-route url="/bulma-components/tag/" component="okt-demo-tag" />
                    <stencil-route url="/bulma-components/breadcrumb/" component="okt-demo-breadcrumb" />
                    <stencil-route url="/bulma-components/card/" component="okt-demo-card" />
                  </stencil-route-switch>
                </stencil-router>
              </okt-column>

              <okt-column>
                <div class="nav">
                  <okt-button inverted color="link" tag="a" href="/bulma-components/" fullWidth>Home</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/button/" fullWidth>Button</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/column/" fullWidth>Column</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/notification/" fullWidth>Notification</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/box/" fullWidth>Box</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/container/" fullWidth>Container</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/content/" fullWidth>Content</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/icon/" fullWidth>Icon</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/image/" fullWidth>Image</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/progress/" fullWidth>Progress</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/table/" fullWidth>Table</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/tag/" fullWidth>Tag</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/breadcrumb/" fullWidth>Breadcrumb</okt-button>
                  <okt-button inverted color="link" tag="a" href="/bulma-components/card/" fullWidth>Card</okt-button>
                </div>
              </okt-column>
            </okt-columns>
          </okt-container>
        </section>
      </okt-bulma>
    );
  }
}