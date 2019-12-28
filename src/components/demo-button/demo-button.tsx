import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-button'
})
export class DemoButton {

  render() {
    return (
      <div class="container">
        <okt-columns vcentered>
          <okt-column>
            <okt-button>Button</okt-button>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button></okt-button>
  `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons>
              <okt-button tag="a">Anchor</okt-button>
              <okt-button>Button</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button tag="a">Anchor</okt-button>
<okt-button>Button</okt-button>
  `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons>
              <okt-button color="white">White</okt-button>
              <okt-button color="light">Light</okt-button>
              <okt-button color="dark">Dark</okt-button>
              <okt-button color="black">Black</okt-button>
              <okt-button color="text">Text</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button color="white">White</okt-button>
<okt-button color="light">Light</okt-button>
<okt-button color="dark">Dark</okt-button>
<okt-button color="black">Black</okt-button>
<okt-button color="text">Text</okt-button>
  `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons>
              <okt-button color="primary">Primary</okt-button>
              <okt-button color="link">Link</okt-button>
            </okt-buttons>
            <okt-buttons>
              <okt-button color="info">Info</okt-button>
              <okt-button color="success">Success</okt-button>
              <okt-button color="warning">Warning</okt-button>
              <okt-button color="danger">Danger</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button color="primary">Primary</okt-button>
<okt-button color="link">Link</okt-button>

<okt-button color="info">Info</okt-button>
<okt-button color="success">Success</okt-button>
<okt-button color="warning">Warning</okt-button>
<okt-button color="danger">Danger</okt-button>
  `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons>
              <okt-button color="primary" light>Primary</okt-button>
              <okt-button color="link" light>Link</okt-button>
            </okt-buttons>
            <okt-buttons>
              <okt-button color="info" light>Info</okt-button>
              <okt-button color="success" light>Success</okt-button>
              <okt-button color="warning" light>Warning</okt-button>
              <okt-button color="danger" light>Danger</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button color="primary" light>Primary</okt-button>
<okt-button color="link" light>Link</okt-button>

<okt-button color="info" light>Info</okt-button>
<okt-button color="success" light>Success</okt-button>
<okt-button color="warning" light>Warning</okt-button>
<okt-button color="danger" light>Danger</okt-button>
  `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons>
              <okt-button size="small">Small</okt-button>
              <okt-button>Default</okt-button>
              <okt-button size="normal">Normal</okt-button>
              <okt-button size="medium">Medium</okt-button>
              <okt-button size="large">Large</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button size="small">Small</okt-button>
<okt-button>Default</okt-button>
<okt-button size="normal">Normal</okt-button>
<okt-button size="medium">Medium</okt-button>
<okt-button size="large">Large</okt-button>
  `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons size="medium">
              <okt-button>ALL</okt-button>
              <okt-button>ARE</okt-button>
              <okt-button>MEDIUM</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-buttons size="medium">
  <okt-button>ALL</okt-button>
  <okt-button>ARE</okt-button>
  <okt-button>MEDIUM</okt-button>
</okt-buttons>
  `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons size="small">
              <okt-button>Small</okt-button>
              <okt-button>Small</okt-button>
              <okt-button>Small</okt-button>
              <okt-button size="normal">Normal</okt-button>
              <okt-button>Small</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-buttons size="small">
  <okt-button>Small</okt-button>
  <okt-button>Small</okt-button>
  <okt-button>Small</okt-button>
  <okt-button size="normal">Normal</okt-button>
  <okt-button>Small</okt-button>
</okt-buttons>
  `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons>
              <okt-button size="small" fullWidth>Small</okt-button>
              <okt-button size="normal" fullWidth>Normal</okt-button>
              <okt-button size="medium" fullWidth>Medium</okt-button>
              <okt-button size="large" fullWidth>Large</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button size="small" fullWidth>Small</okt-button>
<okt-button size="normal" fullWidth>Normal</okt-button>
<okt-button size="medium" fullWidth>Medium</okt-button>
<okt-button size="large" fullWidth>Large</okt-button>
  `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons>
              <okt-button outlined>Outlined</okt-button>
              <okt-button color="primary" outlined>Outlined</okt-button>
              <okt-button color="link" outlined>Outlined</okt-button>
            </okt-buttons>
            <okt-buttons>
              <okt-button color="info" outlined>Outlined</okt-button>
              <okt-button color="success" outlined>Outlined</okt-button>
              <okt-button color="danger" outlined>Outlined</okt-button>
            </okt-buttons>
            <okt-buttons>
              <okt-button color="warning" outlined>Outlined</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button outlined>Outlined</okt-button>
<okt-button color="primary" outlined>Outlined</okt-button>
<okt-button color="link" outlined>Outlined</okt-button>

<okt-button color="info" outlined>Outlined</okt-button>
<okt-button color="success" outlined>Outlined</okt-button>
<okt-button color="danger" outlined>Outlined</okt-button>
  `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-callout color="primary">
              <okt-buttons>
                <okt-button color="primary" inverted>Inverted</okt-button>
                <okt-button color="link" inverted>Inverted</okt-button>
                <okt-button color="info" inverted>Inverted</okt-button>
              </okt-buttons>
              <okt-buttons>
                <okt-button color="warning" inverted>Inverted</okt-button>
                <okt-button color="success" inverted>Inverted</okt-button>
                <okt-button color="danger" inverted>Inverted</okt-button>
              </okt-buttons>
            </okt-callout>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button color="primary" inverted>Inverted</okt-button>
<okt-button color="link" inverted>Inverted</okt-button>
<okt-button color="info" inverted>Inverted</okt-button>
<okt-button color="warning" inverted>Inverted</okt-button>
<okt-button color="success" inverted>Inverted</okt-button>
<okt-button color="danger" inverted>Inverted</okt-button>
  `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-callout color="primary">
              <okt-buttons>
                <okt-button color="primary" inverted outlined>Inverted</okt-button>
                <okt-button color="link" inverted outlined>Inverted</okt-button>
                <okt-button color="info" inverted outlined>Inverted</okt-button>
              </okt-buttons>
              <okt-buttons>
                <okt-button color="warning" inverted outlined>Inverted</okt-button>
                <okt-button color="success" inverted outlined>Inverted</okt-button>
                <okt-button color="danger" inverted outlined>Inverted</okt-button>
              </okt-buttons>
            </okt-callout>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button color="primary" inverted outlined>Inverted</okt-button>
<okt-button color="link" inverted outlined>Inverted</okt-button>
<okt-button color="info" inverted outlined>Inverted</okt-button>
<okt-button color="warning" inverted outlined>Inverted</okt-button>
<okt-button color="success" inverted outlined>Inverted</okt-button>
<okt-button color="danger" inverted outlined>Inverted</okt-button>
  `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons>
              <okt-button color="primary" rounded>Rounded</okt-button>
              <okt-button color="info" rounded>Rounded</okt-button>
              <okt-button color="link" rounded>Rounded</okt-button>
            </okt-buttons>
            <okt-buttons>
              <okt-button color="warning" rounded>Rounded</okt-button>
              <okt-button color="success" rounded>Rounded</okt-button>
              <okt-button color="danger" rounded>Rounded</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button color="primary" rounded>Rounded</okt-button>
<okt-button color="info" rounded>Rounded</okt-button>
<okt-button color="link" rounded>Rounded</okt-button>

<okt-button color="warning" rounded>Rounded</okt-button>
<okt-button color="success" rounded>Rounded</okt-button>
<okt-button color="danger" rounded>Rounded</okt-button>
            `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons>
              <okt-button hovered>Hover</okt-button>
              <okt-button color="primary" hovered>Hover</okt-button>
              <okt-button color="warning" hovered>Hover</okt-button>
              <okt-button color="link" hovered>Hover</okt-button>
            </okt-buttons>
            <okt-buttons>
              <okt-button color="info" hovered>Hover</okt-button>
              <okt-button color="success" hovered>Hover</okt-button>
              <okt-button color="danger" hovered>Hover</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button hovered>Hover</okt-button>
<okt-button color="primary" hovered>Hover</okt-button>
<okt-button color="warning" hovered>Hover</okt-button>
<okt-button color="link" hovered>Hover</okt-button>
<okt-button color="info" hovered>Hover</okt-button>
<okt-button color="success" hovered>Hover</okt-button>
<okt-button color="danger" hovered>Hover</okt-button>
            `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons>
              <okt-button focused>Focus</okt-button>
              <okt-button color="primary" focused>Focus</okt-button>
              <okt-button color="warning" focused>Focus</okt-button>
              <okt-button color="link" focused>Focus</okt-button>
            </okt-buttons>
            <okt-buttons>
              <okt-button color="info" focused>Focus</okt-button>
              <okt-button color="success" focused>Focus</okt-button>
              <okt-button color="danger" focused>Focus</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button focused>Focus</okt-button>
<okt-button color="primary" focused>Focus</okt-button>
<okt-button color="warning" focused>Focus</okt-button>
<okt-button color="link" focused>Focus</okt-button>
<okt-button color="info" focused>Focus</okt-button>
<okt-button color="success" focused>Focus</okt-button>
<okt-button color="danger" focused>Focus</okt-button>
            `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons>
              <okt-button active>Active</okt-button>
              <okt-button color="primary" active>Active</okt-button>
              <okt-button color="warning" active>Active</okt-button>
              <okt-button color="link" active>Active</okt-button>
            </okt-buttons>
            <okt-buttons>
              <okt-button color="info" active>Active</okt-button>
              <okt-button color="success" active>Active</okt-button>
              <okt-button color="danger" active>Active</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button active>Hover</okt-button>
<okt-button color="primary" active>Active</okt-button>
<okt-button color="warning" active>Active</okt-button>
<okt-button color="link" active>Active</okt-button>
<okt-button color="info" active>Active</okt-button>
<okt-button color="success" active>Active</okt-button>
<okt-button color="danger" active>Active</okt-button>
            `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons>
              <okt-button loading>Loading</okt-button>
              <okt-button color="primary" loading>Loading</okt-button>
              <okt-button color="link" loading>Loading</okt-button>
              <okt-button color="info" loading>Loading</okt-button>
            </okt-buttons>
            <okt-buttons>
              <okt-button color="warning" loading>Loading</okt-button>
              <okt-button color="success" loading>Loading</okt-button>
              <okt-button color="danger" loading>Loading</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button loading>Loading</okt-button>
<okt-button color="primary" loading>Loading</okt-button>
<okt-button color="link" loading>Loading</okt-button>
<okt-button color="info" loading>Loading</okt-button>
<okt-button color="warning" loading>Loading</okt-button>
<okt-button color="success" loading>Loading</okt-button>
<okt-button color="danger" loading>Loading</okt-button>
        `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns vcentered>
          <okt-column>
            <okt-buttons>
              <okt-button disabled>Disabled</okt-button>
              <okt-button color="primary" disabled>Disabled</okt-button>
              <okt-button color="info" disabled>Disabled</okt-button>
              <okt-button color="link" disabled>Disabled</okt-button>
            </okt-buttons>
            <okt-buttons>
              <okt-button color="warning" disabled>Disabled</okt-button>
              <okt-button color="success" disabled>Disabled</okt-button>
              <okt-button color="danger" disabled>Disabled</okt-button>
            </okt-buttons>
          </okt-column>
          <okt-column>
            <okt-code>{`
<okt-button disabled>Disabled</okt-button>
<okt-button color="primary" disabled>Disabled</okt-button>
<okt-button color="info" disabled>Disabled</okt-button>
<okt-button color="link" disabled>Disabled</okt-button>
<okt-button color="warning" disabled>Disabled</okt-button>
<okt-button color="success" disabled>Disabled</okt-button>
<okt-button color="danger" disabled>Disabled</okt-button>
            `}</okt-code>
          </okt-column>
        </okt-columns>

        <okt-columns>
          <okt-button color="primary">
            <i class="fas fa-bold"></i>
          </okt-button>
        </okt-columns>
      </div>
    );
  }
}
