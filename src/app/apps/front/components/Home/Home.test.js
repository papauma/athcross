import React from 'react'
import { render, screen } from '@testing-library/react';

import {Home} from './Home'

test('renders Home', () => {    
    render(<Home />)
    const div = screen.getByText('Home')
    expect(div).toBeInTheDocument()
    //screen.debug()
});