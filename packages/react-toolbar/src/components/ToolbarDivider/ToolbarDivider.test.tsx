import * as React from 'react';
import { render } from '@testing-library/react';
import { ToolbarDivider } from './ToolbarDivider';
import { isConformant } from '../../common/isConformant';

describe('ToolbarDivider', () => {
  isConformant({
    Component: ToolbarDivider,
    displayName: 'ToolbarDivider',
  });

  // TODO add more tests here, and create visual regression tests in /apps/vr-tests

  it('renders a default state', () => {
    const result = render(<ToolbarDivider>Default ToolbarDivider</ToolbarDivider>);
    expect(result.container).toMatchSnapshot();
  });
});
