/* eslint-disable no-undef */

import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { RouteList,  } from './RouteList'

test('full app rendering/navigating', async () => {
  render(<RouteList />)

  expect(screen.getByText(/Lista de artistas/i)).toBeInTheDocument()

})
