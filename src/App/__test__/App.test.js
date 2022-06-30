import { render, fireEvent } from '@testing-library/react'
import { App } from '../App';
import React from 'react';

test('should first', () => { 
    const {getByText ,getByTestId, getByRole, debug} = render(<App/>);
    const text = getByText('App') //asertion
    expect(text).toBe()
 })

//  describe('dsd' )


