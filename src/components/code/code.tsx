import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-code',
  styleUrl: 'code.scss'
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
