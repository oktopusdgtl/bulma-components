import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-progress'
})
export class DemoProgress {
  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Progress</h1>
          <hr />

          <okt-columns vcentered>
            <okt-column>
              <okt-progress value="15">
              </okt-progress>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-progress value="15"></okt-progress>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <h2 class="subtitle">Colors</h2>
          <okt-columns vcentered>
            <okt-column>
              <okt-progress
                color="primary"
                value="15">
              </okt-progress>
              <hr />
              <okt-progress
                color="info"
                value="25">
              </okt-progress>
              <hr />
              <okt-progress
                color="link"
                value="35">
              </okt-progress>
              <hr />
              <okt-progress
                color="warning"
                value="45">
              </okt-progress>
              <hr />
              <okt-progress
                color="success"
                value="55">
              </okt-progress>
              <hr />
              <okt-progress
                color="danger"
                value="65">
              </okt-progress>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-progress color="primary" value="15"></okt-progress>
<okt-progress color="info" value="25"> </okt-progress>
<okt-progress color="link" value="35"></okt-progress>
<okt-progress color="warning"value="45"></okt-progress>
<okt-progress color="success" value="55"></okt-progress>
<okt-progress color="danger" value="65"></okt-progress>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <h2 class="subtitle">Sizes</h2>
          <okt-columns vcentered>
            <okt-column>
              <okt-progress size="small" value="15"></okt-progress>
              <hr />
              <okt-progress value="30"></okt-progress>
              <hr />
              <okt-progress size="medium" value="45"></okt-progress>
              <hr />
              <okt-progress size="large" value="60"></okt-progress>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-progress size="small" value="15"></okt-progress>
<okt-progress value="30"></okt-progress>
<okt-progress size="medium" value="45"></okt-progress>
<okt-progress size="large" value="60"></okt-progress>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <h2 class="subtitle">Indeterminate</h2>
          <okt-columns vcentered>
            <okt-column>
              <okt-progress color="primary"></okt-progress>
              <hr />
              <okt-progress color="info"> </okt-progress>
              <hr />
              <okt-progress color="warning"></okt-progress>
              <hr />
              <okt-progress color="success"></okt-progress>
              <hr />
              <okt-progress color="danger"></okt-progress>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-progress color="primary"></okt-progress>
<okt-progress color="info"> </okt-progress>
<okt-progress color="warning"></okt-progress>
<okt-progress color="success"></okt-progress>
<okt-progress color="danger"></okt-progress>
              `}</okt-code>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}
