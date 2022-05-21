import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Index from './index'

test.skip('should render correctly', () => {
  const { container } = render(<Index />)
  expect(container).toMatchSnapshot()
})
