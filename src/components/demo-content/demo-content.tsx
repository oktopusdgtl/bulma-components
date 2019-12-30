import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-content'
})
export class DemoContent {

  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Content</h1>
          <hr />
          <okt-columns>
            <okt-column>
              <okt-content>
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
              </okt-content>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-content>
  <h1>Hello World</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
</okt-content>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <h2 class="subtitle">Size</h2>
          <h2 class="subtitle">Small</h2>
          <okt-columns>
            <okt-column>
              <okt-content size="small">
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
                <blockquote>Blockqoute Content</blockquote>
              </okt-content>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-content size="small">
  <h1>Hello World</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
  <blockquote>Blockqoute Content</blockquote>
</okt-content>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <h2 class="subtitle">Medium</h2>
          <okt-columns>
            <okt-column>
              <okt-content size="medium">
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
                <blockquote>Blockqoute Content</blockquote>
              </okt-content>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-content size="medium">
  <h1>Hello World</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
  <blockquote>Blockqoute Content</blockquote>
</okt-content>
              `}</okt-code>
            </okt-column>
          </okt-columns>

          <h2 class="subtitle">Large</h2>
          <okt-columns>
            <okt-column>
              <okt-content size="large">
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
                <blockquote>Blockqoute Content</blockquote>
              </okt-content>
            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-content size="large">
  <h1>Hello World</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
  <blockquote>Blockqoute Content</blockquote>
</okt-content>
              `}</okt-code>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}