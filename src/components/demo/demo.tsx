import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo'
})
export class Demo {
  render() {
    return (
      <okt-bulma>
        <okt-button disabled>Disabled</okt-button>
        <okt-button color="white">White</okt-button>
        <okt-button color="light">Light</okt-button>
        <okt-button color="dark">Dark</okt-button>
        <okt-button color="black">Black</okt-button>
        <okt-button color="text">Text</okt-button>
        <okt-button color="primary">Primary</okt-button>
        <okt-button color="primary" active>Primary</okt-button>
        <okt-button color="primary" disabled>Primary</okt-button>
        <okt-button color="primary" loading>Loading</okt-button>
        <okt-button color="primary" rounded>Primary</okt-button>
        <okt-button color="primary" inverted>Primary</okt-button>
        <okt-button color="primary" inverted outlined>Primary</okt-button>
        <okt-button color="primary" outlined>Primary</okt-button>
        <okt-button color="primary" light>Primary</okt-button>

        <okt-button size="small">Small</okt-button>
        <okt-button>Default</okt-button>
        <okt-button size="normal">Normal</okt-button>
        <okt-button size="medium">Medium</okt-button>
        <okt-button size="large">Large</okt-button>

        <okt-button fullWidth>Full</okt-button>
      </okt-bulma>
    );
  }
}
