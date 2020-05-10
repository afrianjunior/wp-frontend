import React from 'react'
import { render, screen } from '@testing-library/react'
import Label from '../Label'

it('Label component rendered properly', () => {
  const _expected = 'Test Label'
  const { getByText } = render(<Label>{_expected}</Label>)
  expect(getByText(_expected)).toBeInTheDocument
})