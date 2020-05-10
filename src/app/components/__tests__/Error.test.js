import React from 'react'
import { render, screen } from '@testing-library/react'
import Error from '../Error'

it('Error component rendered properly', () => {
  const _expected = 'test'
  render(<Error message={_expected} />)
  expect(screen.queryByText(_expected)).toEqual
})