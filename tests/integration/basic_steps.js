/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const path = require('path');
const { setup: setupDevServer, teardown: teardownDevServer } = require('jest-dev-server');

const PORT = 1234;

describe('Basic example', () => {
  beforeAll(async () => {
    const dist = path.resolve(__dirname, '../../es');
    const src = path.resolve(__dirname, '../../examples/codesandbox/basic');
    const tmpDir = process.env.CCE_EXAMPLE_TMPDIR;
    await setupDevServer({
      command: [
        `cp -r ${src} ${tmpDir}`,
        `cd ${tmpDir}/basic`,
        'yarn install',
        'rm -Rf node_modules/carbon-custom-elements/es',
        `cp -r ${dist} node_modules/carbon-custom-elements`,
        `yarn parcel --port ${PORT} index.html`,
      ].join(' && '),
      launchTimeout: Number(process.env.LAUNCH_TIMEOUT),
      port: PORT,
    });
    await page.goto(`http://localhost:${PORT}`);
  }, Number(process.env.LAUNCH_TIMEOUT));

  it('should show a title', async () => {
    await expect(page).toMatch('Hello World!');
  });

  it('should have dropdown interactive', async () => {
    await expect(page).toClick('bx-dropdown');
    await expect(page).toMatchElement('bx-dropdown[open]');
    await expect(page).toClick('bx-dropdown');
    await expect(page).toMatchElement('bx-dropdown:not([open])');
  });

  afterAll(async () => {
    await teardownDevServer();
  });
});
