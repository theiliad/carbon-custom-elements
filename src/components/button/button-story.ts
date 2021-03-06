/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit-element';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import Add16 from '@carbon/icons/lib/add/16';
import ifNonNull from '../../globals/directives/if-non-null';
import { BUTTON_KIND } from './button';
import textNullable from '../../../.storybook/knob-text-nullable';
import storyDocs from './button-story.mdx';

const kinds = {
  [`Primary button (${BUTTON_KIND.PRIMARY})`]: BUTTON_KIND.PRIMARY,
  [`Secondary button (${BUTTON_KIND.SECONDARY})`]: BUTTON_KIND.SECONDARY,
  [`Danger button (${BUTTON_KIND.DANGER})`]: BUTTON_KIND.DANGER,
  [`Ghost button (${BUTTON_KIND.GHOST})`]: BUTTON_KIND.GHOST,
};

export const defaultStory = ({ parameters }) => {
  const { autofocus, disabled, download, href, hreflang, kind, ping, rel, small, target, type, onClick } =
    parameters?.props?.['bx-btn'] ?? {};
  return html`
    <bx-btn
      ?autofocus="${autofocus}"
      ?disabled="${disabled}"
      download="${ifNonNull(download)}"
      href="${ifNonNull(href)}"
      hreflang="${ifNonNull(hreflang)}"
      kind="${ifNonNull(kind)}"
      ping="${ifNonNull(ping)}"
      rel="${ifNonNull(rel)}"
      ?small="${small}"
      target="${ifNonNull(target)}"
      type="${ifNonNull(type)}"
      @click=${onClick}
    >
      Button
    </bx-btn>
  `;
};

defaultStory.story = {
  name: 'Default',
};

export const icon = ({ parameters }) => {
  const { kind, disabled, small, href, onClick } = parameters?.props?.['bx-btn'] ?? {};
  return html`
    <bx-btn kind=${ifNonNull(kind)} ?disabled=${disabled} ?small=${small} href=${ifNonNull(href || undefined)} @click=${onClick}>
      ${Add16({ slot: 'icon' })}
    </bx-btn>
  `;
};

export const textAndIcon = ({ parameters }) => {
  const { kind, disabled, small, href, onClick } = parameters?.props?.['bx-btn'] ?? {};
  return html`
    <bx-btn kind=${ifNonNull(kind)} ?disabled=${disabled} ?small=${small} href=${ifNonNull(href || undefined)} @click=${onClick}>
      Button ${Add16({ slot: 'icon' })}
    </bx-btn>
  `;
};

textAndIcon.story = {
  name: 'Text and icon',
};

export default {
  title: 'Button',
  parameters: {
    docs: {
      page: storyDocs,
    },
    knobs: {
      'bx-btn': () => ({
        kind: select('Button kind (kind)', kinds, BUTTON_KIND.PRIMARY),
        disabled: boolean('Disabled (disabled)', false),
        small: boolean('Small (small)', false),
        href: textNullable('Link href (href)', ''),
        onClick: action('click'),
      }),
    },
  },
};
