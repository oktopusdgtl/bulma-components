import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-pagination'
})
export class DemoPagination {
  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Pagination</h1>
          <hr />
          <okt-columns>
            <okt-column>
              <okt-pagination>
                <a class="pagination-previous">Previous</a>
                <a class="pagination-next">Next page</a>
                <ul class="pagination-list">
                  <li>
                    <okt-pagination-link>
                      <a>1</a>
                    </okt-pagination-link>
                    <okt-pagination-ellipsis></okt-pagination-ellipsis>
                    <okt-pagination-link>
                      <a>5</a>
                    </okt-pagination-link>
                    <okt-pagination-link current>
                      <a>6</a>
                    </okt-pagination-link>
                    <okt-pagination-ellipsis></okt-pagination-ellipsis>
                    <okt-pagination-link>
                      <a>10</a>
                    </okt-pagination-link>
                  </li>
                </ul>
              </okt-pagination>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-pagination>
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <okt-pagination-link>
        <a>1</a>
      </okt-pagination-link>
      <okt-pagination-ellipsis></okt-pagination-ellipsis>
      <okt-pagination-link>
        <a>5</a>
      </okt-pagination-link>
      <okt-pagination-link current>
        <a>6</a>
      </okt-pagination-link>
      <okt-pagination-ellipsis></okt-pagination-ellipsis>
      <okt-pagination-link>
        <a>10</a>
      </okt-pagination-link>
    </li>
  </ul>
</okt-pagination>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <okt-columns>
            <okt-column>
              <okt-pagination alignment="centered">
                <a class="pagination-previous">Previous</a>
                <a class="pagination-next">Next page</a>
                <ul class="pagination-list">
                  <li>
                    <okt-pagination-link>
                      <a>1</a>
                    </okt-pagination-link>
                    <okt-pagination-ellipsis></okt-pagination-ellipsis>
                    <okt-pagination-link>
                      <a>5</a>
                    </okt-pagination-link>
                    <okt-pagination-link current>
                      <a>6</a>
                    </okt-pagination-link>
                    <okt-pagination-ellipsis></okt-pagination-ellipsis>
                    <okt-pagination-link>
                      <a>10</a>
                    </okt-pagination-link>
                  </li>
                </ul>
              </okt-pagination>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-pagination alignment="centered">
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <okt-pagination-link>
        <a>1</a>
      </okt-pagination-link>
      <okt-pagination-ellipsis></okt-pagination-ellipsis>
      <okt-pagination-link>
        <a>5</a>
      </okt-pagination-link>
      <okt-pagination-link current>
        <a>6</a>
      </okt-pagination-link>
      <okt-pagination-ellipsis></okt-pagination-ellipsis>
      <okt-pagination-link>
        <a>10</a>
      </okt-pagination-link>
    </li>
  </ul>
</okt-pagination>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <okt-columns>
            <okt-column>
              <okt-pagination alignment="right">
                <a class="pagination-previous">Previous</a>
                <a class="pagination-next">Next page</a>
                <ul class="pagination-list">
                  <li>
                    <okt-pagination-link>
                      <a>1</a>
                    </okt-pagination-link>
                    <okt-pagination-ellipsis></okt-pagination-ellipsis>
                    <okt-pagination-link>
                      <a>5</a>
                    </okt-pagination-link>
                    <okt-pagination-link current>
                      <a>6</a>
                    </okt-pagination-link>
                    <okt-pagination-ellipsis></okt-pagination-ellipsis>
                    <okt-pagination-link>
                      <a>10</a>
                    </okt-pagination-link>
                  </li>
                </ul>
              </okt-pagination>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-pagination alignment="right">
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <okt-pagination-link>
        <a>1</a>
      </okt-pagination-link>
      <okt-pagination-ellipsis></okt-pagination-ellipsis>
      <okt-pagination-link>
        <a>5</a>
      </okt-pagination-link>
      <okt-pagination-link current>
        <a>6</a>
      </okt-pagination-link>
      <okt-pagination-ellipsis></okt-pagination-ellipsis>
      <okt-pagination-link>
        <a>10</a>
      </okt-pagination-link>
    </li>
  </ul>
</okt-pagination>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <okt-columns>
            <okt-column>
              <okt-pagination rounded>
                <a class="pagination-previous">Previous</a>
                <a class="pagination-next">Next page</a>
                <ul class="pagination-list">
                  <li>
                    <okt-pagination-link>
                      <a>1</a>
                    </okt-pagination-link>
                    <okt-pagination-ellipsis></okt-pagination-ellipsis>
                    <okt-pagination-link>
                      <a>5</a>
                    </okt-pagination-link>
                    <okt-pagination-link current>
                      <a>6</a>
                    </okt-pagination-link>
                    <okt-pagination-ellipsis></okt-pagination-ellipsis>
                    <okt-pagination-link>
                      <a>10</a>
                    </okt-pagination-link>
                  </li>
                </ul>
              </okt-pagination>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-pagination rounded>
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <okt-pagination-link>
        <a>1</a>
      </okt-pagination-link>
      <okt-pagination-ellipsis></okt-pagination-ellipsis>
      <okt-pagination-link>
        <a>5</a>
      </okt-pagination-link>
      <okt-pagination-link current>
        <a>6</a>
      </okt-pagination-link>
      <okt-pagination-ellipsis></okt-pagination-ellipsis>
      <okt-pagination-link>
        <a>10</a>
      </okt-pagination-link>
    </li>
  </ul>
</okt-pagination>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <okt-columns>
            <okt-column>
              <okt-pagination size="small">
                <a class="pagination-previous">Previous</a>
                <a class="pagination-next">Next page</a>
                <ul class="pagination-list">
                  <li>
                    <okt-pagination-link>
                      <a>1</a>
                    </okt-pagination-link>
                    <okt-pagination-ellipsis></okt-pagination-ellipsis>
                    <okt-pagination-link>
                      <a>5</a>
                    </okt-pagination-link>
                    <okt-pagination-link current>
                      <a>6</a>
                    </okt-pagination-link>
                    <okt-pagination-ellipsis></okt-pagination-ellipsis>
                    <okt-pagination-link>
                      <a>10</a>
                    </okt-pagination-link>
                  </li>
                </ul>
              </okt-pagination>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-pagination size="small">
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <okt-pagination-link>
        <a>1</a>
      </okt-pagination-link>
      <okt-pagination-ellipsis></okt-pagination-ellipsis>
      <okt-pagination-link>
        <a>5</a>
      </okt-pagination-link>
      <okt-pagination-link current>
        <a>6</a>
      </okt-pagination-link>
      <okt-pagination-ellipsis></okt-pagination-ellipsis>
      <okt-pagination-link>
        <a>10</a>
      </okt-pagination-link>
    </li>
  </ul>
</okt-pagination>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <okt-columns>
            <okt-column>
              <okt-pagination size="medium">
                <a class="pagination-previous">Previous</a>
                <a class="pagination-next">Next page</a>
                <ul class="pagination-list">
                  <li>
                    <okt-pagination-link>
                      <a>1</a>
                    </okt-pagination-link>
                    <okt-pagination-ellipsis></okt-pagination-ellipsis>
                    <okt-pagination-link>
                      <a>5</a>
                    </okt-pagination-link>
                    <okt-pagination-link current>
                      <a>6</a>
                    </okt-pagination-link>
                    <okt-pagination-ellipsis></okt-pagination-ellipsis>
                    <okt-pagination-link>
                      <a>10</a>
                    </okt-pagination-link>
                  </li>
                </ul>
              </okt-pagination>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-pagination size="medium">
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <okt-pagination-link>
        <a>1</a>
      </okt-pagination-link>
      <okt-pagination-ellipsis></okt-pagination-ellipsis>
      <okt-pagination-link>
        <a>5</a>
      </okt-pagination-link>
      <okt-pagination-link current>
        <a>6</a>
      </okt-pagination-link>
      <okt-pagination-ellipsis></okt-pagination-ellipsis>
      <okt-pagination-link>
        <a>10</a>
      </okt-pagination-link>
    </li>
  </ul>
</okt-pagination>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <hr />
          <okt-columns>
            <okt-column>
              <okt-pagination size="large">
                <a class="pagination-previous">Previous</a>
                <a class="pagination-next">Next page</a>
                <ul class="pagination-list">
                  <li>
                    <okt-pagination-link>
                      <a>1</a>
                    </okt-pagination-link>
                    <okt-pagination-ellipsis></okt-pagination-ellipsis>
                    <okt-pagination-link>
                      <a>5</a>
                    </okt-pagination-link>
                    <okt-pagination-link current>
                      <a>6</a>
                    </okt-pagination-link>
                    <okt-pagination-ellipsis></okt-pagination-ellipsis>
                    <okt-pagination-link>
                      <a>10</a>
                    </okt-pagination-link>
                  </li>
                </ul>
              </okt-pagination>
            </okt-column>
          </okt-columns>
          <okt-columns>
            <okt-column>
              <okt-code>{`
<okt-pagination size="large">
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <okt-pagination-link>
        <a>1</a>
      </okt-pagination-link>
      <okt-pagination-ellipsis></okt-pagination-ellipsis>
      <okt-pagination-link>
        <a>5</a>
      </okt-pagination-link>
      <okt-pagination-link current>
        <a>6</a>
      </okt-pagination-link>
      <okt-pagination-ellipsis></okt-pagination-ellipsis>
      <okt-pagination-link>
        <a>10</a>
      </okt-pagination-link>
    </li>
  </ul>
</okt-pagination>
              `}</okt-code>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}
