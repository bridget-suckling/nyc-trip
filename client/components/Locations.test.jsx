import React from 'react'
import { render, screen } from '@testing-library/react'

import { useSelector } from 'react-redux'
import Locations from './Locations'

jest.mock('react-redux')
jest.mock('./Locations')

jest.mock('../apis/locations')
useSelector.mockReturnValue([
  { id: '1', name: 'upper west side' },
  { id: '2', name: 'upper east side' },
])

describe('<Locations />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it.skip('shows locations from api on load', () => {
    render(<Locations />)
    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(2)
  })
})
