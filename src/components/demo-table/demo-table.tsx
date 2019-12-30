import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-table'
})
export class DemoTable {

  generate(attrs?: any) {
    return (<okt-table {...attrs}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>Doe</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </okt-table>)
  }
  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Table</h1>
          <hr />
          <okt-columns vcentered>
            <okt-column>
              {this.generate()}
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-table>
              `}</okt-code>
            </okt-column>
          </okt-columns>
          <hr />
          <okt-columns vcentered>
            <okt-column>
              {this.generate({ bordered: true })}
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-table bordered>
              `}</okt-code>
            </okt-column>
          </okt-columns>
          <hr />
          <okt-columns vcentered>
            <okt-column>
              {this.generate({ striped: true })}
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-table striped>
              `}</okt-code>
            </okt-column>
          </okt-columns>
          <hr />
          <okt-columns vcentered>
            <okt-column>
              {this.generate({ narrow: true })}
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-table narrow>
              `}</okt-code>
            </okt-column>
          </okt-columns>
          <hr />
          <okt-columns vcentered>
            <okt-column>
              {this.generate({ hoverable: true })}
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-table hoverable>
              `}</okt-code>
            </okt-column>
          </okt-columns>
          <hr />
          <okt-columns vcentered>
            <okt-column>
              {this.generate({ fullWidth: true })}
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-table full-width>
              `}</okt-code>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}