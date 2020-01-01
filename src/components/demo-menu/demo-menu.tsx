import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-menu'
})
export class DemoMenu {
  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Menu</h1>
          <hr />
          <okt-columns>
            <okt-column>
              <aside>
                <okt-menu>
                  <okt-menu-label>
                    <p>General</p>
                  </okt-menu-label>
                  <okt-menu-list>
                    <ul>
                      <li><a>Dashboard</a></li>
                      <li><a>Customers</a></li>
                    </ul>
                  </okt-menu-list>
                  <okt-menu-label>
                    <p>Administration</p>
                  </okt-menu-label>
                  <okt-menu-list>
                    <ul>
                      <li><a>Team Settings</a></li>
                      <li>
                        <a class="is-active">Manage Your Team</a>
                        <ul>
                          <li><a>Members</a></li>
                          <li><a>Plugins</a></li>
                          <li><a>Add a member</a></li>
                        </ul>
                      </li>
                      <li><a>Invitations</a></li>
                      <li><a>Cloud Storage Environment Settings</a></li>
                      <li><a>Authentication</a></li>
                    </ul>
                  </okt-menu-list>
                  <okt-menu-label>
                    <p>Transactions</p>
                  </okt-menu-label>
                  <okt-menu-list>
                    <ul>
                      <li><a>Payments</a></li>
                      <li><a>Transfers</a></li>
                      <li><a>Balance</a></li>
                    </ul>
                  </okt-menu-list>
                </okt-menu>
              </aside>
            </okt-column>
            <okt-column>
              <okt-code>{`
<aside>
  <okt-menu>
    <okt-menu-label>
      <p>General</p>
    </okt-menu-label>
    <okt-menu-list>
      <ul>
        <li><a>Dashboard</a></li>
        <li><a>Customers</a></li>
      </ul>
    </okt-menu-list>
    <okt-menu-label>
      <p>Administration</p>
    </okt-menu-label>
    <okt-menu-list>
      <ul>
        <li><a>Team Settings</a></li>
        <li>
          <a class="is-active">Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li><a>Cloud Storage Environment Settings</a></li>
        <li><a>Authentication</a></li>
      </ul>
    </okt-menu-list>
    <okt-menu-label>
      <p>Transactions</p>
    </okt-menu-label>
    <okt-menu-list>
      <ul>
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
    </okt-menu-list>
  </okt-menu>
</aside>
              `}</okt-code>
            </okt-column>
          </okt-columns>

        </section>
      </div>
    );
  }
}