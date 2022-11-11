import React from 'react'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen } from '../src/app/apps/front/components/TopThree/test-utils'
import App from './App'

describe('Renders App', () => {
  it('Renders the footer', () => {
    render(<App />)
    expect(screen.getByText(/App Athcross /i)).toBeInTheDocument()
  })
  it('Exist NavBar', () => {
    render(<App />)
    expect(screen.getByText(/Calendar/i)).toBeInTheDocument()
  })

})
