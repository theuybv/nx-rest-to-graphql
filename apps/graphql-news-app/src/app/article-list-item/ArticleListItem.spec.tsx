import { render } from '@testing-library/react';

import ArticleListItem from './ArticleListItem';

describe('ArticleListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleListItem />);
    expect(baseElement).toBeTruthy();
  });
});
