import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-code'
})
export class Code {
  render() {
    return (
      <pre>
        <code>
          <slot></slot>
        </code>
      </pre>
    );
  }
}
