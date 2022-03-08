import { render } from '@testing-library/react';

import CarouselItem from './CarouselItem';

describe('CarouselItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CarouselItem />);
    expect(baseElement).toBeTruthy();
  });
});
