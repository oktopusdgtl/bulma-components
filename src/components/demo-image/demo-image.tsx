import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-image'
})
export class DemoImage {
  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Image</h1>
          <hr />

          <okt-columns vcentered>
            <okt-column>
              <okt-image
                size={16}
                src="https://bulma.io/images/placeholders/16x16.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="16" src="https://bulma.io/images/placeholders/16x16.png"></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column>
              <okt-image
                size={24}
                src="https://bulma.io/images/placeholders/24x24.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="24" src="https://bulma.io/images/placeholders/24x24.png"></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column>
              <okt-image
                size={32}
                src="https://bulma.io/images/placeholders/32x32.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="32" src="https://bulma.io/images/placeholders/32x32.png"></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column>
              <okt-image
                size={48}
                src="https://bulma.io/images/placeholders/48x48.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="48" src="https://bulma.io/images/placeholders/48x48.png"></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column>
              <okt-image
                size={64}
                src="https://bulma.io/images/placeholders/64x64.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="64" src="https://bulma.io/images/placeholders/64x64.png"></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column>
              <okt-image
                size={96}
                src="https://bulma.io/images/placeholders/96x96.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="96" src="https://bulma.io/images/placeholders/96x96.png"></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column>
              <okt-image
                size={128}
                src="https://bulma.io/images/placeholders/128x128.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="128" src="https://bulma.io/images/placeholders/128x128.png"></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <h2 class="subtitle">Rounded</h2>

          <okt-columns vcentered>
            <okt-column>
              <okt-image
                rounded
                size={128}
                src="https://bulma.io/images/placeholders/128x128.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="128" src="https://bulma.io/images/placeholders/128x128.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <h2 class="subtitle">Responsive images with ratios</h2>
          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="square"
                src="https://bulma.io/images/placeholders/480x480.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="square" src="https://bulma.io/images/placeholders/480x480.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="1by1"
                src="https://bulma.io/images/placeholders/480x480.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="1by1" src="https://bulma.io/images/placeholders/480x480.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="5by4"
                src="https://bulma.io/images/placeholders/600x480.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="5by4" src="https://bulma.io/images/placeholders/600x480.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="4by3"
                src="https://bulma.io/images/placeholders/640x480.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="4by3" src="https://bulma.io/images/placeholders/640x480.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="3by2"
                src="https://bulma.io/images/placeholders/480x320.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="3by2" src="https://bulma.io/images/placeholders/480x320.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="5by3"
                src="https://bulma.io/images/placeholders/800x480.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="5by3" src="https://bulma.io/images/placeholders/800x480.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="16by9"
                src="https://bulma.io/images/placeholders/640x360.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="16by9" src="https://bulma.io/images/placeholders/640x360.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="2by1"
                src="https://bulma.io/images/placeholders/640x320.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="2by1" src="https://bulma.io/images/placeholders/640x320.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="3by1"
                src="https://bulma.io/images/placeholders/720x240.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="3by1" src="https://bulma.io/images/placeholders/720x240.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="4by5"
                src="https://bulma.io/images/placeholders/480x600.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="4by5" src="https://bulma.io/images/placeholders/480x600.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="3by4"
                src="https://bulma.io/images/placeholders/480x640.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="3by4" src="https://bulma.io/images/placeholders/480x640.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="2by3"
                src="https://bulma.io/images/placeholders/320x480.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="2by3" src="https://bulma.io/images/placeholders/320x480.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="3by5"
                src="https://bulma.io/images/placeholders/480x800.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="3by5" src="https://bulma.io/images/placeholders/480x800.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="9by16"
                src="https://bulma.io/images/placeholders/360x640.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="9by16" src="https://bulma.io/images/placeholders/360x640.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="1by2"
                src="https://bulma.io/images/placeholders/320x640.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="1by2" src="https://bulma.io/images/placeholders/320x640.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column columns={3}>
              <okt-image
                size="1by3"
                src="https://bulma.io/images/placeholders/240x720.png"
              ></okt-image>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-image size="1by3" src="https://bulma.io/images/placeholders/240x720.png" rounded></okt-image>
              `}</okt-code>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}