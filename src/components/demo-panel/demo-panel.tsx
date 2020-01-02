import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-panel'
})
export class DemoPanel {

  generate = (color: any = '') => {
    return (
      <okt-columns>
        <okt-column>
          <okt-panel color={color}>
            <p slot="heading">Repositories</p>
            <okt-panel-block>
              <okt-control icon-left>
                <input class="input" type="text" placeholder="Search" />
                <span class="icon is-left">
                  <i class="fas fa-search" aria-hidden="true"></i>
                </span>
              </okt-control>
            </okt-panel-block>
            <okt-panel-tabs>
              <a class="is-active">All</a>
              <a>Public</a>
              <a>Private</a>
              <a>Sources</a>
              <a>Forks</a>
            </okt-panel-tabs>
            <okt-panel-block active>
              <a>
                <span class="panel-icon">
                  <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                bulma</a>
            </okt-panel-block>
            <okt-panel-block>
              <a>
                <span class="panel-icon">
                  <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                marksheet</a>
            </okt-panel-block>
            <okt-panel-block>
              <a>
                <span class="panel-icon">
                  <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                minireset.css</a>
            </okt-panel-block>
            <okt-panel-block>
              <okt-button color="link" outlined full-width>
                Reset All Filters
            </okt-button>
            </okt-panel-block>
          </okt-panel>
        </okt-column>
        <okt-column>
          <okt-code>{`
<okt-panel${color ? ` color="${color}"` : ''}>
  <p slot="heading">Repositories</p>
  <okt-panel-block>
    <okt-control icon-left>
      <input class="input" type="text" placeholder="Search" />
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </okt-control>
  </okt-panel-block>
  <okt-panel-tabs>
    <a class="is-active">All</a>
    <a>Public</a>
    <a>Private</a>
    <a>Sources</a>
    <a>Forks</a>
  </okt-panel-tabs>
  <okt-panel-block active>
  <a>
  <span class="panel-icon">
    <i class="fas fa-book" aria-hidden="true"></i>
  </span>
  bulma</a>
  </okt-panel-block>
  <okt-panel-block>
  <a>
  <span class="panel-icon">
    <i class="fas fa-book" aria-hidden="true"></i>
  </span>
  marksheet</a>
  </okt-panel-block>
  <okt-panel-block>
    <a>
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    minireset.css</a>
  </okt-panel-block>
  <okt-panel-block>
    <okt-button color="link" outlined full-width>
      Reset All Filters
    </okt-button>
  </okt-panel-block>
</okt-panel>
        `}</okt-code>
        </okt-column>
      </okt-columns>
    );
  }

  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Panel</h1>
          <hr />
          {this.generate()}
          {this.generate('primary')}
          {this.generate('info')}
          {this.generate('link')}
          {this.generate('warning')}
          {this.generate('success')}
          {this.generate('danger')}
        </section>
      </div >
    );
  }
}
