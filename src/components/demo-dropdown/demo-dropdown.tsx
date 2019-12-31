import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-dropdown'
})
export class DemoDropdown {
  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Dropdown</h1>
          <hr />
          <okt-columns>
            <okt-column>
              <okt-dropdown>
                <okt-button slot="trigger">
                  <span>Dropdown</span>
                  <okt-icon size="small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </okt-icon>
                </okt-button>
                <div slot="content">
                  <a href="#" class="dropdown-item">Dropdown item</a>
                  <okt-dropdown-divider></okt-dropdown-divider>
                  <a class="dropdown-item">Other dropdown item</a>
                </div>
              </okt-dropdown>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-dropdown>
  <okt-button slot="trigger">
    <span>Dropdown</span>
    <okt-icon size="small">
      <i class="fas fa-angle-down" aria-hidden="true"></i>
    </okt-icon>
  </okt-button>
  <div slot="content">
    <a href="#" class="dropdown-item">Dropdown item</a>
    <okt-dropdown-divider></okt-dropdown-divider>
    <a class="dropdown-item">Other dropdown item</a>
  </div>
</okt-dropdown>
              `}</okt-code>
            </okt-column>
          </okt-columns>
          <hr />
          <h2 class="subtitle">Hovered</h2>
          <okt-columns>
            <okt-column>
              <okt-dropdown hoverable>
                <okt-button slot="trigger">
                  <span>Dropdown</span>
                  <okt-icon size="small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </okt-icon>
                </okt-button>
                <div slot="content">
                  <a href="#" class="dropdown-item">Dropdown item</a>
                  <okt-dropdown-divider></okt-dropdown-divider>
                  <a class="dropdown-item">Other dropdown item</a>
                </div>
              </okt-dropdown>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-dropdown hoverable>
  <okt-button slot="trigger">
    <span>Dropdown</span>
    <okt-icon size="small">
      <i class="fas fa-angle-down" aria-hidden="true"></i>
    </okt-icon>
  </okt-button>
  <div slot="content">
    <a href="#" class="dropdown-item">Dropdown item</a>
    <okt-dropdown-divider></okt-dropdown-divider>
    <a class="dropdown-item">Other dropdown item</a>
  </div>
</okt-dropdown>
              `}</okt-code>
            </okt-column>
          </okt-columns>
          <hr />
          <h2 class="subtitle">Right Aligned</h2>
          <okt-columns>
            <okt-column>
              <okt-dropdown right>
                <okt-button slot="trigger">
                  <span>Dropdown</span>
                  <okt-icon size="small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </okt-icon>
                </okt-button>
                <div slot="content">
                  <a href="#" class="dropdown-item">Dropdown item</a>
                  <okt-dropdown-divider></okt-dropdown-divider>
                  <a class="dropdown-item">Other dropdown item</a>
                </div>
              </okt-dropdown>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-dropdown right>
  <okt-button slot="trigger">
    <span>Dropdown</span>
    <okt-icon size="small">
      <i class="fas fa-angle-down" aria-hidden="true"></i>
    </okt-icon>
  </okt-button>
  <div slot="content">
    <a href="#" class="dropdown-item">Dropdown item</a>
    <okt-dropdown-divider></okt-dropdown-divider>
    <a class="dropdown-item">Other dropdown item</a>
  </div>
</okt-dropdown>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <h2 class="subtitle">Up</h2>
          <okt-columns>
            <okt-column>
              <okt-dropdown up>
                <okt-button slot="trigger">
                  <span>Dropdown</span>
                  <okt-icon size="small">
                    <i class="fas fa-angle-up" aria-hidden="true"></i>
                  </okt-icon>
                </okt-button>
                <div slot="content">
                  <a href="#" class="dropdown-item">Dropdown item</a>
                  <okt-dropdown-divider></okt-dropdown-divider>
                  <a class="dropdown-item">Other dropdown item</a>
                </div>
              </okt-dropdown>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-dropdown up>
  <okt-button slot="trigger">
    <span>Dropdown</span>
    <okt-icon size="small">
      <i class="fas fa-angle-up" aria-hidden="true"></i>
    </okt-icon>
  </okt-button>
  <div slot="content">
    <a href="#" class="dropdown-item">Dropdown item</a>
    <okt-dropdown-divider></okt-dropdown-divider>
    <a class="dropdown-item">Other dropdown item</a>
  </div>
</okt-dropdown>
              `}</okt-code>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}
