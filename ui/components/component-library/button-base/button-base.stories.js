import React from 'react';
import {
  AlignItems,
  DISPLAY,
  FLEX_DIRECTION,
  Size,
} from '../../../helpers/constants/design-system';
import Box from '../../ui/box/box';
import { ICON_NAMES } from '../icon';
import { BUTTON_BASE_SIZES } from './button-base.constants';
import { ButtonBase } from './button-base';
import README from './README.mdx';

const marginSizeControlOptions = [
  undefined,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  'auto',
];

export default {
  title: 'Components/ComponentLibrary/ButtonBase',

  component: ButtonBase,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['button', 'a'],
    },
    block: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    iconName: {
      control: 'select',
      options: Object.values(ICON_NAMES),
    },
    loading: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: Object.values(BUTTON_BASE_SIZES),
    },
    marginTop: {
      options: marginSizeControlOptions,
      control: 'select',
      table: { category: 'box props' },
    },
    marginRight: {
      options: marginSizeControlOptions,
      control: 'select',
      table: { category: 'box props' },
    },
    marginBottom: {
      options: marginSizeControlOptions,
      control: 'select',
      table: { category: 'box props' },
    },
    marginLeft: {
      options: marginSizeControlOptions,
      control: 'select',
      table: { category: 'box props' },
    },
  },
  args: {
    children: 'Button Base',
  },
};

export const DefaultStory = (args) => <ButtonBase {...args} />;

DefaultStory.storyName = 'Default';

export const SizeStory = (args) => (
  <>
    <Box
      display={DISPLAY.FLEX}
      alignItems={AlignItems.baseline}
      gap={1}
      marginBottom={2}
    >
      <ButtonBase {...args} size={Size.SM}>
        Button SM
      </ButtonBase>
      <ButtonBase {...args} size={Size.MD}>
        Button MD
      </ButtonBase>
      <ButtonBase {...args} size={Size.LG}>
        Button LG
      </ButtonBase>
    </Box>
  </>
);

SizeStory.storyName = 'Size';

export const Block = (args) => (
  <>
    <ButtonBase {...args} marginBottom={2}>
      Default Button
    </ButtonBase>
    <ButtonBase {...args} block marginBottom={2}>
      Block Button
    </ButtonBase>
  </>
);

export const As = (args) => (
  <Box display={DISPLAY.FLEX} flexDirection={FLEX_DIRECTION.ROW} gap={2}>
    <ButtonBase {...args}>Button Element</ButtonBase>
    <ButtonBase as="a" href="#" {...args}>
      Anchor Element
    </ButtonBase>
  </Box>
);

export const Href = (args) => <ButtonBase {...args}>Anchor Element</ButtonBase>;

Href.args = {
  href: '/metamask',
};

export const Disabled = (args) => (
  <ButtonBase {...args}>Disabled Button</ButtonBase>
);

Disabled.args = {
  disabled: true,
};

export const Loading = (args) => (
  <ButtonBase {...args}>Loading Button</ButtonBase>
);

Loading.args = {
  loading: true,
};

export const Icon = (args) => (
  <ButtonBase {...args} icon={ICON_NAMES.ADD_SQUARE}>
    Button
  </ButtonBase>
);
