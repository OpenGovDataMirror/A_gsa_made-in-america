<!--
  Federalist recommends you use Continuous Integration to automatically test
  and validate any new changes to your site. CircleCI is free for open source
  projcets. You should replace this badge with your own.

  https://circleci.com/
-->

# Federalist + U.S. Web Design System + Jekyll

This [Jekyll theme](https://jekyllrb.com/docs/themes/) is developed using the [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov) and is focused on providing developers a starter kit and reference implementation for Federalist websites.

This code uses the [Jekyll](https://jekyllrb.com) site engine and built with Ruby. If you prefer to use Javascript, check out [federalist-uswds-gatsby](https://github.com/18F/federalist-uswds-gatsby), which uses [Gatsby](https://gatsbyjs.org) site engine.

This project strives to be compliant with requirements set by [21st Century IDEA Act](https://www.meritalk.com/articles/senate-passes-idea-act/). The standards require that a website or digital service:

- is accessible to individuals with disabilities;
- has a consistent appearance;
- does not duplicate any legacy websites (the legislation also requires agencies to ensure that legacy websites are regularly reviewed, removed, and consolidated);
- has a search function;
- uses an industry standard secure connection;
- “is designed around user needs with data-driven analysis influencing management and development decisions, using qualitative and quantitative data to determine user goals, needs, and behaviors, and continually test the website, web-based form, web-based application, or digital service to ensure that user needs are addressed;”
- allows for user customization; and
- is mobile-friendly.

## Getting Started

### Running the application

#### With locally installed `node` and `ruby`

    $ npm install
    $ bundle install
    $ npm start

#### To build but not serve the site, run

    $ npm run build

> Note that when built by Federalist, `npm run federalist` is used instead of
> `npm run build`.

Open your web browser to [localhost:4000](http://localhost:4000/) to view your
site.

### Search App

This project contains a progressively decoupled application built in Angular and located in `/search-app`. It is rendered in the template under the `/search` directory.

Please review the application [README](search-app/README.md) to get started.

### Testing

#### With locally installed `node` and `ruby`

    $ npm test-local

## Testing locally with Cypress

See [Installing Cypress Documentation](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements) to get Cypress set up on local

### Command line for download

    $ npm install cypress --save-dev

_Make sure that you have already run npm init or have a node_modules folder or package.json file in the root of your project to ensure cypress is installed in the correct directory._

### testing scripts and their use

- "test": runs all integration tests for site
- "test-local": will run the full pipeline on your local
- "cy:vis-regression": will run all visual regression tests for site
- "cy:open": opens the cypress runner

### Before starting your tests

#### Before you can run any test the following command needs to be ran

    $ npm run start

- After that spilt the terminal and the testing commands below can be used

### Cypress testing commands:

#### Run Cypress in the browser

    $ npm run cy:open

#### Run all Cypress integration tests headless

    $ npm run test

#### Run Cypress visual regression tests

    $ npm run cy:vis-regression

#### Run full pipeline locally

    $ npm run test-local

## Technologies you should be familiarize yourself with

- [Jekyll](https://jekyllrb.com/docs/) - The primary site engine that builds your code and content.
- [Front Matter](https://jekyllrb.com/docs/frontmatter) - The top of each page/post includes keywords within `--` tags. This is meta data that helps Jekyll build the site, but you can also use it to pass custom variables.
- [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.
