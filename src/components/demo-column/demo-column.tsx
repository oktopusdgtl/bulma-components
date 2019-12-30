import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-column',
  styleUrl: 'demo-column.scss'
})
export class DemoColumn {
  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Layout</h2>
          <h1 class="title">Column</h1>
          <hr />

          <okt-columns>
            <okt-column class="item">
              <p>First Item</p>
            </okt-column>
            <okt-column class="item">
              <p>Second Item</p>
            </okt-column>
            <okt-column class="item">
              <p>Third Item</p>
            </okt-column>
            <okt-column class="item">
              <p>Fourth Item</p>
            </okt-column>
          </okt-columns>
          <okt-code>{`
<okt-columns>
  <okt-column>
    First Item
  </okt-column>
  <okt-column>
    Second Item
  </okt-column>
  <okt-column>
    Third Item
  </okt-column>
  <okt-column>
    Fourth Item
  </okt-column>
</okt-columns>
        `}</okt-code>
        </section>

        <section>
          <h1 class="title">Column Sizes</h1>
          <okt-columns>
            <okt-column class="item" columns="four-fifths">
              <p>four-fifths</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns="three-quarters">
              <p>three-quarters</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns="two-thirds">
              <p>two-thirds</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns="three-fifths">
              <p>three-fifths</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns="half">
              <p>half</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns="two-fifths">
              <p>two-fifths</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns="one-third">
              <p>one-third</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns="one-quarter">
              <p>one-quarter</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns="one-fifth">
              <p>one-fifth</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
            <okt-column class="item normal">
              <p>Auto</p>
            </okt-column>
          </okt-columns>

          <okt-code>{`
        <okt-columns>
          <okt-column columns="four-fifths">
            four-fifths
          </okt-column>
          <okt-column>
            Auto>
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
        </okt-columns>

        <okt-columns>
          <okt-column columns="three-quarters">
            three-quarters
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
        </okt-columns>

        <okt-columns>
          <okt-column columns="two-thirds">
            two-thirds
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
        </okt-columns>

        <okt-columns>
          <okt-column columns="three-fifths">
            three-fifths
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
        </okt-columns>

        <okt-columns>
          <okt-column columns="half">
            half
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
        </okt-columns>

        <okt-columns>
          <okt-column columns="two-fifths">
            two-fifths
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
        </okt-columns>

        <okt-columns>
          <okt-column columns="one-third">
            one-third
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
        </okt-columns>

        <okt-columns>
          <okt-column columns="one-quarter">
            one-quarter
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
        </okt-columns>

        <okt-columns>
          <okt-column columns="one-fifth">
            one-fifth
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
          <okt-column>
            Auto
          </okt-column>
        </okt-columns>
          `}</okt-code>
        </section>

        <section>
          <h1 class="title">12 columns system</h1>

          <okt-columns>
            <okt-column class="item" columns={1}>
              <p>1</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns={2}>
              <p>2</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns={3}>
              <p>3</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns={4}>
              <p>4</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns={5}>
              <p>5</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns={6}>
              <p>6</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns={7}>
              <p>7</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns={8}>
              <p>8</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns={9}>
              <p>9</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns={10}>
              <p>10</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns={11}>
              <p>11</p>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column class="item" columns={12}>
              <p>12</p>
            </okt-column>
          </okt-columns>

          <okt-code>{`
  <okt-columns>
    <okt-column columns="1">
      <p>1</p>
    </okt-column>
  </okt-columns>

  <okt-columns>
    <okt-column columns="2">
      <p>2</p>
    </okt-column>
  </okt-columns>

  <okt-columns>
    <okt-column columns="3">
      <p>3</p>
    </okt-column>
  </okt-columns>

  <okt-columns>
    <okt-column columns="4">
      <p>4</p>
    </okt-column>
  </okt-columns>

  <okt-columns>
    <okt-column columns="5">
      <p>5</p>
    </okt-column>
  </okt-columns>

  <okt-columns>
    <okt-column columns="6">
      <p>6</p>
    </okt-column>
  </okt-columns>

  <okt-columns>
    <okt-column columns="7">
      <p>7</p>
    </okt-column>
  </okt-columns>

  <okt-columns>
    <okt-column columns="8">
      <p>8</p>
    </okt-column>
  </okt-columns>

  <okt-columns>
    <okt-column columns="9">
      <p>9</p>
    </okt-column>
  </okt-columns>

  <okt-columns>
    <okt-column columns="10">
      <p>10</p>
    </okt-column>
  </okt-columns>

  <okt-columns>
    <okt-column columns="11">
      <p>11</p>
    </okt-column>
  </okt-columns>

  <okt-columns>
    <okt-column columns="12">
      <p>12</p>
    </okt-column>
  </okt-columns>
          `}</okt-code>

        </section>

        <section>
          <h1 class="title">Offset</h1>
        </section>

        <okt-columns>
          <okt-column class="item" columns="half" offset="one-quarter">
            <p>columns="half" <br /> offset="one-quarter"</p>
          </okt-column>
        </okt-columns>

        <okt-columns>
          <okt-column class="item" columns="three-fifths" offset="one-fifth">
            <p>columns="three-fifths" <br /> offset="one-fifth"</p>
          </okt-column>
        </okt-columns>

        <okt-columns>
          <okt-column class="item" columns={4} offset={8}>
            <p>columns="4" <br /> offset="8"</p>
          </okt-column>
        </okt-columns>

        <okt-columns>
          <okt-column class="item" columns={11} offset={1}>
            <p>columns="11" <br /> offset="1"</p>
          </okt-column>
        </okt-columns>

        <okt-code>{`
    <okt-columns>
      <okt-column columns="half" offset="one-quarter">
        <p>columns="half" offset="one-quarter"</p>
      </okt-column>
    </okt-columns>

    <okt-columns>
      <okt-column columns="three-fifths" offset="one-fifth">
        <p>columns="three-fifths" offset="one-fifth"</p>
      </okt-column>
    </okt-columns>

    <okt-columns>
      <okt-column columns="4 offset="8">
        <p>columns="4" offset="8"</p>
      </okt-column>
    </okt-columns>

    <okt-columns>
      <okt-column columns="11" offset="1">
        <p>columns="11" offset="1"</p>
      </okt-column>
    </okt-columns>
        `}</okt-code>

        <section>
          <h1 class="title">Narrow Column</h1>

          <okt-columns>
            <okt-column class="item" narrow>
              <p class="title">Narrow column</p>
            </okt-column>
            <okt-column class="item">
              <p class="title">Flexible column</p>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}
