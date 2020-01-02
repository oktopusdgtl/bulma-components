import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-navbar'
})
export class DemoNavbar {

  @State() bottomNavbarOpen = false;

  toggleBottomNavbar = () => {
    this.bottomNavbarOpen = !this.bottomNavbarOpen;
  }

  navbar = (color: any) => (
    <okt-navbar color={color}>
      <div slot="brand">
        <okt-navbar-item>
          <a href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28" />
          </a>
        </okt-navbar-item>
      </div>
      <div slot="menu-start">
        <okt-navbar-item>
          <a href="">Home</a>
        </okt-navbar-item>
        <okt-navbar-item>
          <a href="">Documentation</a>
        </okt-navbar-item>
        <okt-navbar-item dropdown hoverable>
          <okt-navbar-item>
            <a class="navbar-link">More</a>
          </okt-navbar-item>
          <div class="navbar-dropdown">
            <okt-navbar-item>
              <a>About</a>
            </okt-navbar-item>
            <hr class="navbar-divider" />

            <okt-navbar-item>
              <a>Report an issue</a>
            </okt-navbar-item>
          </div>
        </okt-navbar-item>
      </div>

      <div slot="menu-end">
        <okt-navbar-item>
          <okt-buttons>
            <okt-button color={color}>
              <strong>Sign up</strong>
            </okt-button>
            <okt-button color="light">Login</okt-button>
          </okt-buttons>
        </okt-navbar-item>
      </div>
    </okt-navbar>
  );

  render() {

    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Navbar</h1>
          <hr />

          <okt-columns>
            <okt-column>
              <nav role="navigation" aria-label="main navigation">
                <okt-navbar>
                  <div slot="brand">
                    <okt-navbar-item>
                      <a href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                      </a>
                    </okt-navbar-item>
                  </div>
                  <div slot="menu-start">
                    <okt-navbar-item>
                      <a href="">Home</a>
                    </okt-navbar-item>
                    <okt-navbar-item>
                      <a href="">Documentation</a>
                    </okt-navbar-item>
                    <okt-navbar-item dropdown hoverable>
                      <okt-navbar-item>
                        <a class="navbar-link">More</a>
                      </okt-navbar-item>
                      <div class="navbar-dropdown">
                        <okt-navbar-item>
                          <a>About</a>
                        </okt-navbar-item>
                        <hr class="navbar-divider" />

                        <okt-navbar-item>
                          <a>Report an issue</a>
                        </okt-navbar-item>
                      </div>
                    </okt-navbar-item>
                  </div>

                  <div slot="menu-end">
                    <okt-navbar-item>
                      <okt-buttons>
                        <okt-button color="primary">
                          <strong>Sign up</strong>
                        </okt-button>
                        <okt-button color="light">
                          Login
                        </okt-button>
                      </okt-buttons>
                    </okt-navbar-item>
                  </div>
                </okt-navbar>
              </nav>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<nav role="navigation" aria-label="main navigation">
  <okt-navbar>
    <div slot="brand">
      <okt-navbar-item>
        <a href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>
      </okt-navbar-item>
    </div>
    <div slot="menu-start">
      <okt-navbar-item>
        <a href="">Home</a>
      </okt-navbar-item>
      <okt-navbar-item>
        <a href="">Documentation</a>
      </okt-navbar-item>
      <okt-navbar-item dropdown hoverable>
        <okt-navbar-item>
          <a>More</a>
        </okt-navbar-item>
        <div class="navbar-dropdown">
          <okt-navbar-item>
            <a>About</a>
          </okt-navbar-item>
          <hr class="navbar-divider" />

          <okt-navbar-item>
            <a>Report an issue</a>
          </okt-navbar-item>
        </div>
      </okt-navbar-item>
    </div>

    <div slot="menu-end">
      <okt-navbar-item>
        <okt-buttons>
          <okt-button color="primary">
            <strong>Sign up</strong>
          </okt-button>
          <okt-button color="light">
            Login
          </okt-button>
        </okt-buttons>
      </okt-navbar-item>
    </div>
  </okt-navbar>
</nav>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column>
              <okt-button color="link" onClick={this.toggleBottomNavbar}>
                Toggle <strong>Bottom</strong> Navbar
              </okt-button>

              {this.bottomNavbarOpen && (
                <nav role="navigation" aria-label="main navigation">
                  <okt-navbar fixed="bottom">
                    <div slot="brand">
                      <okt-navbar-item>
                        <a href="https://bulma.io">
                          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                        </a>
                      </okt-navbar-item>
                    </div>
                    <div slot="menu-start">
                      <okt-navbar-item>
                        <a href="">Home</a>
                      </okt-navbar-item>
                      <okt-navbar-item>
                        <a href="">Documentation</a>
                      </okt-navbar-item>
                      <okt-navbar-item dropdown hoverable>
                        <okt-navbar-item>
                          <a>More</a>
                        </okt-navbar-item>
                        <div class="navbar-dropdown">
                          <okt-navbar-item>
                            <a>About</a>
                          </okt-navbar-item>
                          <hr class="navbar-divider" />

                          <okt-navbar-item>
                            <a>Report an issue</a>
                          </okt-navbar-item>
                        </div>
                      </okt-navbar-item>
                    </div>

                    <div slot="menu-end">
                      <okt-navbar-item>
                        <okt-buttons>
                          <okt-button color="primary">
                            <strong>Sign up</strong>
                          </okt-button>
                          <okt-button color="light">
                            Login
          </okt-button>
                        </okt-buttons>
                      </okt-navbar-item>
                    </div>
                  </okt-navbar>
                </nav>
              )}
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column>
              <okt-code>{`
<html class="has-navbar-fixed-bottom">
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-navbar fixed="bottom">
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column>
              {this.navbar('primary')}
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              {this.navbar('info')}
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              {this.navbar('link')}
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              {this.navbar('warning')}
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              {this.navbar('success')}
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              {this.navbar('danger')}
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              {this.navbar('dark')}
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              {this.navbar('black')}
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}
