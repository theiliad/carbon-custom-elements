/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import createVueBindingsFromProps from '../../../.storybook/vue/create-vue-bindings-from-props';
import { defaultStory as baseDefaultStory } from './link-story';

export { default } from './link-story';

export const defaultStory = ({ parameters }) => ({
  template: `
    <bx-link :disabled="disabled" :href="href" @click="onClick">
      Link
    </bx-link>
  `,
  ...createVueBindingsFromProps(parameters?.props?.['bx-link']),
});

defaultStory.story = baseDefaultStory.story;
