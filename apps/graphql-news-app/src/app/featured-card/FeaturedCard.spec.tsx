import { render } from '@testing-library/react';

import FeaturedCard from './FeaturedCard';

describe('FeaturedCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturedCard />);
    expect(baseElement).toBeTruthy();
  });
});
