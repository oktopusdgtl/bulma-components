import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-notification'
})
export class DemoNotification {
  render() {
    return (
      <div>
        <section>
          <h1 class="subtitle">Element</h1>
          <h1 class="title">Notification</h1>
          <hr />
          <okt-columns>
            <okt-column columns="half">
              <okt-notification>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit
          </okt-notification>
            </okt-column>
            <okt-column columns="half">
              <okt-code>{`
<okt-notification>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit
</okt-notification>
            `}</okt-code>
            </okt-column>
          </okt-columns>
          <h1 class="title">Colors</h1>
          <okt-columns>
            <okt-column columns="half">
              <okt-notification color="primary">
                Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,consectetur adipiscing elit
                  </okt-notification>
            </okt-column>
            <okt-column columns="half">
              <okt-code>{`
<okt-notification color="primary">
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,consectetur adipiscing elit
</okt-notification>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column columns="half">
              <okt-notification color="link">
                Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,consectetur adipiscing elit
                  </okt-notification>
            </okt-column>
            <okt-column columns="half">
              <okt-code>{`
<okt-notification color="link">
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,consectetur adipiscing elit
</okt-notification>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column columns="half">
              <okt-notification color="info">
                Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,consectetur adipiscing elit
                  </okt-notification>
            </okt-column>
            <okt-column columns="half">
              <okt-code>{`
<okt-notification color="info">
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,consectetur adipiscing elit
</okt-notification>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column columns="half">
              <okt-notification color="success">
                Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,consectetur adipiscing elit
                  </okt-notification>
            </okt-column>
            <okt-column columns="half">
              <okt-code>{`
<okt-notification color="success">
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,consectetur adipiscing elit
</okt-notification>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column columns="half">
              <okt-notification color="warning">
                Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,consectetur adipiscing elit
                  </okt-notification>
            </okt-column>
            <okt-column columns="half">
              <okt-code>{`
<okt-notification color="warning">
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,consectetur adipiscing elit
</okt-notification>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <okt-columns>
            <okt-column columns="half">
              <okt-notification color="danger">
                Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,consectetur adipiscing elit
                  </okt-notification>
            </okt-column>
            <okt-column columns="half">
              <okt-code>{`
<okt-notification color="danger">
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,consectetur adipiscing elit
</okt-notification>
              `}</okt-code>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}
