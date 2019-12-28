import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo'
})
export class Demo {
  render() {
    return (
      <okt-bulma>
        <okt-demo-button></okt-demo-button>
      </okt-bulma>
    );
  }
}
