import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-tabs'
})
export class DemoTabs {
  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Tabs</h1>

          <okt-columns>
            <okt-column>
              <okt-tabs>
                <ul>
                  <li class="is-active"><a>Pictures</a></li>
                  <li><a>Music</a></li>
                  <li><a>Videos</a></li>
                  <li><a>Documents</a></li>
                </ul>
              </okt-tabs>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-tabs>
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</okt-tabs>
          `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <h2 class="subtitle">Alignment</h2>
          <okt-columns>
            <okt-column>
              <okt-tabs alignment="right">
                <ul>
                  <li class="is-active"><a>Pictures</a></li>
                  <li><a>Music</a></li>
                  <li><a>Videos</a></li>
                  <li><a>Documents</a></li>
                </ul>
              </okt-tabs>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-tabs alignment="right">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</okt-tabs>
          `}</okt-code>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-tabs alignment="centered">
                <ul>
                  <li class="is-active"><a>Pictures</a></li>
                  <li><a>Music</a></li>
                  <li><a>Videos</a></li>
                  <li><a>Documents</a></li>
                </ul>
              </okt-tabs>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-tabs alignment="centered">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</okt-tabs>
          `}</okt-code>
            </okt-column>
          </okt-columns>
          <hr />
          <h2 class="subtitle">Sizes</h2>

          <okt-columns>
            <okt-column>
              <okt-tabs size="small">
                <ul>
                  <li class="is-active"><a>Pictures</a></li>
                  <li><a>Music</a></li>
                  <li><a>Videos</a></li>
                  <li><a>Documents</a></li>
                </ul>
              </okt-tabs>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-tabs size="small">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</okt-tabs>
          `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column>
              <okt-tabs size="medium">
                <ul>
                  <li class="is-active"><a>Pictures</a></li>
                  <li><a>Music</a></li>
                  <li><a>Videos</a></li>
                  <li><a>Documents</a></li>
                </ul>
              </okt-tabs>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-tabs size="medium">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</okt-tabs>
          `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column>
              <okt-tabs size="large">
                <ul>
                  <li class="is-active"><a>Pictures</a></li>
                  <li><a>Music</a></li>
                  <li><a>Videos</a></li>
                  <li><a>Documents</a></li>
                </ul>
              </okt-tabs>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-tabs size="large">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</okt-tabs>
          `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <h2 class="subtitle">Styles</h2>

          <okt-columns>
            <okt-column>
              <okt-tabs boxed>
                <ul>
                  <li class="is-active"><a>Pictures</a></li>
                  <li><a>Music</a></li>
                  <li><a>Videos</a></li>
                  <li><a>Documents</a></li>
                </ul>
              </okt-tabs>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-tabs boxed>
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</okt-tabs>
          `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column>
              <okt-tabs toggle>
                <ul>
                  <li class="is-active"><a>Pictures</a></li>
                  <li><a>Music</a></li>
                  <li><a>Videos</a></li>
                  <li><a>Documents</a></li>
                </ul>
              </okt-tabs>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-tabs toggle>
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</okt-tabs>
          `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column>
              <okt-tabs toggle-rounded>
                <ul>
                  <li class="is-active"><a>Pictures</a></li>
                  <li><a>Music</a></li>
                  <li><a>Videos</a></li>
                  <li><a>Documents</a></li>
                </ul>
              </okt-tabs>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-tabs toggle-rounded>
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</okt-tabs>
          `}</okt-code>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}