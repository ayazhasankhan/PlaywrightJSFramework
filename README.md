# Playwright Testing

# Running Tests

Important: Playwright is installed in the `root`, so the following commands should also be used in the root:

To run all tests: `npx playwright test`


To run a single test file: `npx run playwright test partial-name-of-spec` i.e. `npx run playwright test Bed`.

To run visual tests `TEST_SUITE=visual npx test:component`.


# Visual Tests

By default, the snapshot saved has browser name and platform as part of the file name. For example: `example-test-chromium-darwin.png`. The tests run on Docker during CI builds meaning that the operating system is not same as your local and tests can fail. To fix this issue, run the test on Docker locally to generate an additional snapshot with `-linux` suffix (Note: The snapshot will be automatically mounted to the snapshot directory).

To generate a snapshot, make sure you annotate the test with `test.only` and then run this commnad: `npx test:component-generate-snapshot`.

# Debugging

On certain occasions, you may want to debug a test. To do so, use `--debug` which would open a browser window and allow you to interact with the page.

To debug a single spec file run `npx test:debug partial-name-of-spec` ie: `npx test:debug mapViewBoundary.spec.ts`

# Test results

When a pull request is created and the playwright tests run, the results will be available in the `Tests` tab in CircleCI and an html report will be available for each parallel run in the `artifacts` tab.

After running the tests on your local, you can also use `npx test:report`

# Custom Settings

Settings can be modified using one or more environment variables:

To execute a specific set of tests, pass `TEST_SUITE` parameter. For example, to run all tests with `@smoke` in the `describe` or `test` descriptions:

```sh
TEST_SUITE=smoke npx test:component
```

To target a particular domain / base URL:

```sh
BASE_URL=http://localhost:4000 npx test:component
```

# Creating Tests

When creating tests and pages, try to keep the files as small as possible and the test should mostly test one flow at a time. Always consider if the e2e you are creating would be better suited as an unit test instead.

Tests should be by component and divided by a `test.describe`. For an example, see [Bath filter](filterTray/bath/BathFilter.spec.ts).

Error handling has been added in the form of a [fixture](https://playwright.dev/docs/test-fixtures#creating-a-fixture) that can be accessed by importing ErrorHandlingFixture.ts into the test file. Example:

```javascript
import { test } from '../errorHandling/ErrorHandlingFixture';

test('Can save city search', async ({ errorHandling }) => {
    ...
    await errorHandling.verifyPageForAllErrors();
    ...
  });
```

The method verifyPageForAllErrors() will fail if there is a console error or warning triggered on the page.

# Page Objects

Page objects should stay inside [Page](https://playwright.dev/docs/test-pom/) files. You can use any of the options listed in the playwright [documentation](https://playwright.dev/docs/selectors) as element selectors, but the recommendations are ids/testids, aria-labels and non-dynamic selectors.

# Organization

Pages and Tests are under each component folder, such as [bed](filter-tray/bed) and the files end with `Page`, e.g. `BedFilterPage` and `.spec`, e.g.: `BedFilter.spec`. In the implementation under the packages folder, filters such as Price, Bed, Bath are under a folder called `filterTray`, we should try to follow the same pattern in the tests here to keep consistency.

Mobile tests need to have `.mobile` in order to run in mobile browsers, e.g.: `Header.mobile.spec.ts`, otherwise they will run against Chrome by default.

For convention purposes, map tests have a `.map`. By default test files without `.map` will be considered to be for list view.

If a test does not need to run with every pull request, it does not need to be a smoke test and should have a `.p1` on the file name and a `@p1` tag in the `test.describe`.

# Capturing Interactions

[Playwright CLI](https://playwright.dev/docs/cli) offers a [`codegen`](https://playwright.dev/docs/cli#generate-code) option which launches an inspector that records your actions as code. This can be helpful when defining element locators.

```sh
npx playwright codegen https://app.kantanstream.com
```

# Making Tests Reliable

Playwright includes auto-wait logic to make it easier to avoid synchronization issues.

However, clicking elements that trigger asynchronous processing before initiating navigation can cause a race condition that leads to intermittent failures. It is [recommended](https://playwright.dev/docs/navigations#asynchronous-navigation) to resolve cases like this by using `page.waitForNavigation([options])`:

```javascript
/* Note that Promise.all prevents a race condition between clicking and waiting for a navigation,
 and that waitForNavigation is intentionally placed before the click. */
await Promise.all([page.waitForNavigation(), page.click('div.with-delayed-navigation')]);
```
# Assertions

`Playwright Test` uses [(Jest's) expect library](https://jestjs.io/docs/expect) for [test assertions](https://playwright.dev/docs/test-assertions). It provides a lot of matchers like `toEqual`, `toContain`, `toMatch`, `toMatchSnapshot` and many more.

Playwright also offers web-first assertions that will wait until the expected condition is met.

Find out more in the [assertions guide](https://playwright.dev/docs/test-assertions).

# Configuration

The test configuration file for this project is located [here](../../playwright.config.js).

The number of workers is currently set as `2` to avoid timeouts in CircleCI, as test flakiness was observed when this number was increased.

For more information on configuration options, please refer to the [documentation](https://playwright.dev/docs/test-intro#create-a-configuration-file).
