import { render } from '@testing-library/react';

import MediaCard from './MediaCard';

describe('MediaCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MediaCard />);
    expect(baseElement).toBeTruthy();
  });
});
