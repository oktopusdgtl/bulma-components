import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo'
})
export class Demo {
  render() {
    return (
      <div>
        <h1 class="title">Bulma Web Components</h1>
        <p>Web components version of the famous Bulma css library</p>
      </div>
    );
  }
}
