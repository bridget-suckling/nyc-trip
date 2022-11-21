import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

// import { apiGetActivities } from '../apis/activities'
import { apiDeleteActivity } from '../apis/activities'
import { fetchLocationsAndActivities } from '../apis/locations'
import { useSelector, useDispatch } from 'react-redux'
import Activities from './Activities'
import Locations from './Locations'
import ActivityForm from './ActivityForm'
import DeleteActivity from './DeleteActivity'

jest.mock('react-redux')
// jest.mock('./Locations')
// jest.mock('./ActivityForm')
// jest.mock('./DeleteActivity')

jest.mock('../apis/activities')
jest.mock('../apis/locations')
useSelector.mockReturnValue([{ id: '1', name: 'upper west side' }])
// const fakeDispatch = jest.fn()
// useDispatch.mockReturnValue(fakeDispatch)

describe('<Activities />', () => {
  it('loads activities from api on load', async () => {
    fetchLocationsAndActivities.mockReturnValue(
      Promise.resolve([
        { id: 1, name: 'Met Museum', url: 'test', type: 'museum' },
      ])
    )
    render(<Activities />)
    console.log(fetchLocationsAndActivities.mock.calls)

    // expect(fetchLocationsAndActivities.mock.calls).toHaveLength(1)
    return waitFor(
      () => fetchLocationsAndActivities.mock.calls.length > 0
    ).then(() => {
      expect(fetchLocationsAndActivities.mock.calls).toHaveLength(1)
      // let activities = screen.getByText('Met Museum')
      // expect(activities).not.toBeNull()
    })
  })
})
