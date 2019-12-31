import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-breadcrumb'
})
export class DemoBreadcrumb {
  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Breadcrumb</h1>
          <hr />
          <okt-columns vcentered>
            <okt-column>
              <nav>
                <okt-breadcrumb>
                  <ul>
                    <li>
                      <a href="#">Bulma</a>
                    </li>
                    <li>
                      <a href="#">Webcomponents</a>
                    </li>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                  </ul>
                </okt-breadcrumb>
              </nav>
            </okt-column>
            <okt-column>
              <okt-code>{`
<nav>
  <okt-breadcrumb>
    <ul>
      <li>
        <a href="#">Bulma</a>
      </li>
      <li>
        <a href="#">Webcomponents</a>
      </li>
      <li>
        <a href="#">Documentation</a>
      </li>
    </ul>
  </okt-breadcrumb>
</nav>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <okt-columns vcentered>
            <okt-column>
              <nav>
                <okt-breadcrumb alignment="centered">
                  <ul>
                    <li>
                      <a href="#">Bulma</a>
                    </li>
                    <li>
                      <a href="#">Webcomponents</a>
                    </li>
                  </ul>
                </okt-breadcrumb>
              </nav>
            </okt-column>
            <okt-column>
              <okt-code>{`
<nav>
  <okt-breadcrumb alignment="centered">
    <ul>
      <li>
        <a href="#">Bulma</a>
      </li>
      <li>
        <a href="#">Webcomponents</a>
      </li>
    </ul>
  </okt-breadcrumb>
</nav>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <okt-columns vcentered>
            <okt-column>
              <nav>
                <okt-breadcrumb alignment="right">
                  <ul>
                    <li>
                      <a href="#">Bulma</a>
                    </li>
                    <li>
                      <a href="#">Webcomponents</a>
                    </li>
                  </ul>
                </okt-breadcrumb>
              </nav>
            </okt-column>
            <okt-column>
              <okt-code>{`
<nav>
  <okt-breadcrumb alignment="right">
    <ul>
      <li>
        <a href="#">Bulma</a>
      </li>
      <li>
        <a href="#">Webcomponents</a>
      </li>
    </ul>
  </okt-breadcrumb>
</nav>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <h1 class="title">Custom Separators</h1>
          <okt-columns vcentered>
            <okt-column>
              <nav>
                <okt-breadcrumb separator="arrow">
                  <ul>
                    <li>
                      <a href="#">Bulma</a>
                    </li>
                    <li>
                      <a href="#">Webcomponents</a>
                    </li>
                  </ul>
                </okt-breadcrumb>
              </nav>
            </okt-column>
            <okt-column>
              <okt-code>{`
<nav>
  <okt-breadcrumb separator="arrow">
    <ul>
      <li>
        <a href="#">Bulma</a>
      </li>
      <li>
        <a href="#">Webcomponents</a>
      </li>
    </ul>
  </okt-breadcrumb>
</nav>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column>
              <nav>
                <okt-breadcrumb separator="bullet">
                  <ul>
                    <li>
                      <a href="#">Bulma</a>
                    </li>
                    <li>
                      <a href="#">Webcomponents</a>
                    </li>
                  </ul>
                </okt-breadcrumb>
              </nav>
            </okt-column>
            <okt-column>
              <okt-code>{`
<nav>
  <okt-breadcrumb separator="bullet">
    <ul>
      <li>
        <a href="#">Bulma</a>
      </li>
      <li>
        <a href="#">Webcomponents</a>
      </li>
    </ul>
  </okt-breadcrumb>
</nav>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column>
              <nav>
                <okt-breadcrumb separator="dot">
                  <ul>
                    <li>
                      <a href="#">Bulma</a>
                    </li>
                    <li>
                      <a href="#">Webcomponents</a>
                    </li>
                  </ul>
                </okt-breadcrumb>
              </nav>
            </okt-column>
            <okt-column>
              <okt-code>{`
<nav>
  <okt-breadcrumb separator="dot">
    <ul>
      <li>
        <a href="#">Bulma</a>
      </li>
      <li>
        <a href="#">Webcomponents</a>
      </li>
    </ul>
  </okt-breadcrumb>
</nav>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column>
              <nav>
                <okt-breadcrumb separator="succeeds">
                  <ul>
                    <li>
                      <a href="#">Bulma</a>
                    </li>
                    <li>
                      <a href="#">Webcomponents</a>
                    </li>
                  </ul>
                </okt-breadcrumb>
              </nav>
            </okt-column>
            <okt-column>
              <okt-code>{`
<nav>
  <okt-breadcrumb separator="succeeds">
    <ul>
      <li>
        <a href="#">Bulma</a>
      </li>
      <li>
        <a href="#">Webcomponents</a>
      </li>
    </ul>
  </okt-breadcrumb>
</nav>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <h1 class="title">Sizes</h1>

          <okt-columns vcentered>
            <okt-column>
              <nav>
                <okt-breadcrumb size="small">
                  <ul>
                    <li>
                      <a href="#">Bulma</a>
                    </li>
                    <li>
                      <a href="#">Webcomponents</a>
                    </li>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                  </ul>
                </okt-breadcrumb>
              </nav>
            </okt-column>
            <okt-column>
              <okt-code>{`
<nav>
  <okt-breadcrumb size="small">
    <ul>
      <li>
        <a href="#">Bulma</a>
      </li>
      <li>
        <a href="#">Webcomponents</a>
      </li>
      <li>
        <a href="#">Documentation</a>
      </li>
    </ul>
  </okt-breadcrumb>
</nav>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column>
              <nav>
                <okt-breadcrumb size="medium">
                  <ul>
                    <li>
                      <a href="#">Bulma</a>
                    </li>
                    <li>
                      <a href="#">Webcomponents</a>
                    </li>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                  </ul>
                </okt-breadcrumb>
              </nav>
            </okt-column>
            <okt-column>
              <okt-code>{`
<nav>
  <okt-breadcrumb size="medium">
    <ul>
      <li>
        <a href="#">Bulma</a>
      </li>
      <li>
        <a href="#">Webcomponents</a>
      </li>
      <li>
        <a href="#">Documentation</a>
      </li>
    </ul>
  </okt-breadcrumb>
</nav>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns vcentered>
            <okt-column>
              <nav>
                <okt-breadcrumb size="large">
                  <ul>
                    <li>
                      <a href="#">Bulma</a>
                    </li>
                    <li>
                      <a href="#">Webcomponents</a>
                    </li>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                  </ul>
                </okt-breadcrumb>
              </nav>
            </okt-column>
            <okt-column>
              <okt-code>{`
<nav>
  <okt-breadcrumb size="large">
    <ul>
      <li>
        <a href="#">Bulma</a>
      </li>
      <li>
        <a href="#">Webcomponents</a>
      </li>
      <li>
        <a href="#">Documentation</a>
      </li>
    </ul>
  </okt-breadcrumb>
</nav>
              `}</okt-code>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}
