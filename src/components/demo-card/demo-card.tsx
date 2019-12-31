import { Component, h } from '@stencil/core';

@Component({
  tag: 'okt-demo-card'
})
export class DemoCard {
  render() {
    return (
      <div>
        <section>
          <h2 class="subtitle">Component</h2>
          <h1 class="title">Card</h1>
          <hr />
          <okt-columns>
            <okt-column columns={4}>

              <okt-card>
                <okt-card-header>
                  <p class="card-header-title">Component</p>
                  <a href="#" class="card-header-icon" aria-label="more options">
                    <okt-icon>
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </okt-icon>
                  </a>
                </okt-card-header>
                <okt-card-image>
                  <okt-image size="4by3" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></okt-image>
                </okt-card-image>
                <okt-card-content>
                  <okt-media>
                    <okt-media-left>
                      <okt-image size={48} src="https://bulma.io/images/placeholders/96x96.png"></okt-image>
                    </okt-media-left>
                    <okt-media-content>
                      <p class="title is-4">John Smith</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </okt-media-content>
                  </okt-media>
                  <okt-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a> <a href="#">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </okt-content>
                </okt-card-content>
              </okt-card>

            </okt-column>
            <okt-column>
              <okt-code>{`
<okt-card>
  <okt-card-header>
    <p class="card-header-title">Component</p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <okt-icon>
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </okt-icon>
    </a>
  </okt-card-header>
  <okt-card-image>
    <okt-image size="4by3" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></okt-image>
  </okt-card-image>
  <okt-card-content>
    <okt-media>
      <okt-media-left>
        <okt-image size="48" src="https://bulma.io/images/placeholders/96x96.png"></okt-image>
      </okt-media-left>
      <okt-media-content>
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </okt-media-content>
    </okt-media>
    <okt-content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a> <a href="#">#responsive</a>
      <br />
      <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </okt-content>
  </okt-card-content>
</okt-card>
              `}</okt-code>
            </okt-column>
          </okt-columns>
        </section>
      </div>
    );
  }
}
