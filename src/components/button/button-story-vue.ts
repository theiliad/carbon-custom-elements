/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Add16 from '@carbon/icons-vue/es/add/16';
import createVueBindingsFromProps from '../../../.storybook/vue/create-vue-bindings-from-props';
import { defaultStory as baseDefaultStory, textAndIcon as baseTextAndIcon } from './button-story';

export { default } from './button-story';

export const defaultStory = ({ parameters }) => ({
  template: `
    <bx-btn :kind="kind" :disabled="disabled" :small="small" :href="href" @click="onClick">Button</bx-btn>
  `,
  ...createVueBindingsFromProps(parameters?.props?.['bx-btn']),
});

defaultStory.story = baseDefaultStory.story;

export const icon = ({ parameters }) => ({
  template: `
    <bx-btn :kind="kind" :disabled="disabled" :small="small" :href="href" @click="onClick">
      <add-16 slot="icon"></add-16>
    </bx-btn>
  `,
  components: {
    'add-16': Add16,
  },
  ...createVueBindingsFromProps(parameters?.props?.['bx-btn']),
});

export const textAndIcon = ({ parameters }) => ({
  template: `
    <bx-btn :kind="kind" :disabled="disabled" :small="small" :href="href" @click="onClick">
      Button <add-16 slot="icon"></add-16>
    </bx-btn>
  `,
  components: {
    'add-16': Add16,
  },
  ...createVueBindingsFromProps(parameters?.props?.['bx-btn']),
});

textAndIcon.story = baseTextAndIcon.story;
