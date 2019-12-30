import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-icon'
})
export class DemoIcon {
  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Icon</h1>

          <okt-columns vcentered>
            <okt-column>
              <okt-icon>
                <i class="fas fa-home"></i>
              </okt-icon>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-icon>
  <i class="fas fa-home"></i>
</okt-icon>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column>
              <okt-icon color="primary">
                <i class="fas fa-home"></i>
              </okt-icon>
              <okt-icon color="info">
                <i class="fas fa-home"></i>
              </okt-icon>
              <okt-icon color="link">
                <i class="fas fa-home"></i>
              </okt-icon>
              <okt-icon color="warning">
                <i class="fas fa-home"></i>
              </okt-icon>
              <okt-icon color="success">
                <i class="fas fa-home"></i>
              </okt-icon>
              <okt-icon color="danger">
                <i class="fas fa-home"></i>
              </okt-icon>
            </okt-column>

            <okt-column>
              <okt-code>{`
<okt-icon color="primary">
  <i class="fas fa-home"></i>
</okt-icon>
<okt-icon color="info">
  <i class="fas fa-home"></i>
</okt-icon>
<okt-icon color="link">
  <i class="fas fa-home"></i>
</okt-icon>
<okt-icon color="warning">
  <i class="fas fa-home"></i>
</okt-icon>
<okt-icon color="success">
  <i class="fas fa-home"></i>
</okt-icon>
<okt-icon color="danger">
  <i class="fas fa-home"></i>
</okt-icon>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <h2 class="subtitle">Sizes</h2>
          <okt-columns vcentered>
            <okt-column>
              <okt-icon size="small">
                <i class="fas fa-home"></i>
              </okt-icon>
              <okt-icon>
                <i class="fas fa-home fa-lg"></i>
              </okt-icon>
              <okt-icon size="medium">
                <i class="fas fa-home fa-2x"></i>
              </okt-icon>
              <okt-icon size="large">
                <i class="fas fa-home fa-3x"></i>
              </okt-icon>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-icon size="small">
  <i class="fas fa-home"></i>
</okt-icon>
<okt-icon>
  <i class="fas fa-home fa-lg"></i>
</okt-icon>
<okt-icon size="medium">
  <i class="fas fa-home fa-2x"></i>
</okt-icon>
<okt-icon size="large">
  <i class="fas fa-home fa-3x"></i>
</okt-icon>
              `}</okt-code>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}
