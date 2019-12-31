import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-tag'
})
export class DemoTag {
  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Tag</h1>
          <hr />

          <okt-columns vcentered>
            <okt-column>
              <okt-tag>Tag label</okt-tag>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-tag>Tag label</okt-tag>
    `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <h2 class="subtitle">Colors</h2>
          <okt-columns vcentered>
            <okt-column>
              <okt-tag color="black">Black</okt-tag><br />
              <okt-tag color="dark">Dark</okt-tag><br />
              <okt-tag color="light">Light</okt-tag><br />
              <okt-tag color="white">White</okt-tag><br />
              <okt-tag color="primary">Primary</okt-tag><br />
              <okt-tag color="link">Link</okt-tag><br />
              <okt-tag color="info">Info</okt-tag><br />
              <okt-tag color="success">Success</okt-tag><br />
              <okt-tag color="warning">Warning</okt-tag><br />
              <okt-tag color="danger">Danger</okt-tag><br />
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-tag color="black">Black</okt-tag>
<okt-tag color="dark">Dark</okt-tag>
<okt-tag color="light">Light</okt-tag>
<okt-tag color="white">White</okt-tag>
<okt-tag color="primary">Primary</okt-tag>
<okt-tag color="link">Link</okt-tag>
<okt-tag color="info">Info</okt-tag>
<okt-tag color="success">Success</okt-tag>
<okt-tag color="warning">Warning</okt-tag>
<okt-tag color="danger">Danger</okt-tag>
    `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <h2 class="subtitle">Light Colors</h2>
          <okt-columns vcentered>
            <okt-column>
              <okt-tag color="primary" light>Primary</okt-tag><br />
              <okt-tag color="link" light>Link</okt-tag><br />
              <okt-tag color="info" light>Info</okt-tag><br />
              <okt-tag color="success" light>Success</okt-tag><br />
              <okt-tag color="warning" light>Warning</okt-tag><br />
              <okt-tag color="danger" light>Danger</okt-tag><br />
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-tag color="primary" light>Primary</okt-tag>
<okt-tag color="link" light>Link</okt-tag>
<okt-tag color="info" light>Info</okt-tag>
<okt-tag color="success" light>Success</okt-tag>
<okt-tag color="warning" light>Warning</okt-tag>
<okt-tag color="danger" light>Danger</okt-tag>
    `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <h2 class="subtitle">Sizes</h2>
          <okt-columns vcentered>
            <okt-column>
              <okt-columns>
                <okt-column>
                  <okt-tag size="normal">Normal</okt-tag>
                </okt-column>
                <okt-column>
                  <okt-tag size="medium">Medium</okt-tag>
                </okt-column>
                <okt-column>
                  <okt-tag size="large">Large</okt-tag>
                </okt-column>
              </okt-columns>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-tag>Normal</okt-tag>
<okt-tag size="medium">Medium</okt-tag>
<okt-tag size="large">Large</okt-tag>
    `}</okt-code>
            </okt-column>
          </okt-columns>
          <hr />
          <okt-columns vcentered>
            <okt-column>
              <okt-tag rounded>Rounded</okt-tag>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-tag rounded>Rounded</okt-tag>
              `}</okt-code>
            </okt-column>
          </okt-columns>
          <hr />
          <okt-columns vcentered>
            <okt-column>
              <okt-tag del><a></a></okt-tag>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-tag del><a></a></okt-tag>
              `}</okt-code>
            </okt-column>
          </okt-columns>
          <hr />
          <h2 class="subtitle">List of Tags</h2>
          <okt-columns vcentered>
            <okt-column>
              <okt-tags>
                <okt-tag>One</okt-tag>
                <okt-tag>Two</okt-tag>
                <okt-tag>Three</okt-tag>
                <okt-tag>Four</okt-tag>
                <okt-tag>Five</okt-tag>
                <okt-tag>Six</okt-tag>
                <okt-tag>Seven</okt-tag>
                <okt-tag>Eight</okt-tag>
                <okt-tag>Nine</okt-tag>
                <okt-tag>Ten</okt-tag>
                <okt-tag>Eleven</okt-tag>
                <okt-tag>Twelve</okt-tag>
              </okt-tags>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-tags>
  <okt-tag>One</okt-tag>
  <okt-tag>Two</okt-tag>
  <okt-tag>Three</okt-tag>
  <okt-tag>Four</okt-tag>
  <okt-tag>Five</okt-tag>
  <okt-tag>Six</okt-tag>
  <okt-tag>Seven</okt-tag>
  <okt-tag>Eight</okt-tag>
  <okt-tag>Nine</okt-tag>
  <okt-tag>Ten</okt-tag>
  <okt-tag>Eleven</okt-tag>
  <okt-tag>Twelve</okt-tag>
</okt-tags>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <h2 class="subtitle">Addons</h2>
          <okt-columns vcentered>
            <okt-column>
              <okt-tags addons>
                <okt-tag>Package</okt-tag>
                <okt-tag color="primary">Bulma</okt-tag>
              </okt-tags>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-tags addons>
  <okt-tag>Package</okt-tag>
  <okt-tag color="primary">Bulma</okt-tag>
</okt-tags>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <okt-columns vcentered>
            <okt-column>
              <okt-tags addons>
                <okt-tag color="danger">Alex Smith</okt-tag>
                <okt-tag del>
                  <a href=""></a>
                </okt-tag>
              </okt-tags>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-tags addons>
  <okt-tag color="danger">Alex Smith</okt-tag>
  <okt-tag del>
    <a href=""></a>
  </okt-tag>
</okt-tags>
              `}</okt-code>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}