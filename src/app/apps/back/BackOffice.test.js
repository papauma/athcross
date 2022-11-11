import React from 'react'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen } from '../../../../src/app/apps/front/components/TopThree/test-utils'
import {BackOffice} from './BackOffice'

describe('BackOffice App', () => {
  it('Apperas login forms no user', ()=> {
    render(<BackOffice />)
    expect(screen.getByPlaceholderText('User...')).toBeInTheDocument()
  })

  it('Apperas backoffice with user', ()=> {
    render(<BackOffice />)
    expect(screen.getByPlaceholderText('User...')).toBeInTheDocument()
  })
})

