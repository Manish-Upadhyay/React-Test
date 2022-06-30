// filename.test.js

// or make __test__ folder and you can add filename.test file here
// ____

test('Test Name or Discription', () => {
	expect( 2+3 ).toBe( 5 )   /assertion 
})

it('Test Name or Discription', () => {
	expect( 2+3 ).toBe( 5 )
	expect( 2+3 ).toBe( 5 )

})

describe ('Login Page' , () => {
   
   test('Test Name or Discription', () => {
	 expect( 2+3 ).toBe( 5 )
     expect( 2+3 ).toBe( 5 )
     expect( 2+3 ).toBe( 5 )
  })

   it('Test Name or Discription', () => {
	expect( 2+3 ).toBe( 5 )
  })
	
})

beforeEach(()=> {
    // do Something
})

// afterEach

beforeAll(()=> {
    // do Something
})

// afterAll


// 

test.only('Test Name or Discription', () => {
    expect( 2+3 ).toBe( 5 )
 })

 test.skip('Test Name or Discription', () => {
    expect( 2+3 ).toBe( 5 )
 })


 test('Test Name or Discription', () => {
    expect( 2+3 ).toBe( 5 )
 }, 1000) // setTimout dy default 5000


 //set for all
 jest.setTimout(1900)

//  for loop

test.each([1,2,3])('description', ele => {
    expect( ele ).toBe( ele )
})

test.each([[1,2,3],[4,5,6]])('description', (ele1, ele2, ele3) => {
    expect( ele1 + ele2 + ele3 ).toBe( ele1 + ele2 + ele3  )
})

//Matchers
test.skip('Test Name or Discription', () => {
    expect( 2+3 ).toBe( 5 )
    expect( 2+3 ).toEquall( 5 ) // ===

    expect( 2+3 ).toBeGreaterThan( 5 )
    expect( 2+3 ).toBeLessThan( 5 )

    expect( 2+3 ).toBeGreaterThanOrEqual( 5 )
    expect( 2+3 ).toBeLessThanOrEqual( 5 )


    //regex
    expect( 'Name' ).toMatch( /Nam/ )
    expect( 'Name' ).toMatch( /Nam/i ) //not case sensative

    expect( ['A', 'B', 'C'] ).toContain( 'A' )

    //Falsy : false, 0, null, undefined, NaN, ''
    expect( null ).toBeNull( )
    expect( undefined ).toBeUndefined( )
    expect( 'abc' ).toBeDefined( )

    expect( null ).toBeFalsy( )
    expect( 'as' ).toBeTruthy( )

    //not
    expect( null ).not.toBeFalsy( )
 
 })

 // ThrowError

 function check(){
    throw new Error('fatal error')
 }

 test('Test Name or Discription', () => {
    expect(check).toThrow()
    expect(check).toThrow(Error)
    expect(check).toThrow('fatal error')
    expect(check).toThrow(/fatal/i)
 })

//  React testing library
// import { render } from '@testing-library/react'

test('Component render', () => {
    const comp = render(<Hello/>);
    comp.debug();

    let helloText = comp.getByText("Hello") // refernce of dom element
    console.log(helloText.tagName )
    console.log(helloText.textContent )
    expect(helloText).toBeTruthy()
})

test('Component render', () => {
    const {getByText , debug} = render(<Hello/>);
    
})

//Methods to select element
//getBY : if element not avilable error
//queryBy : if element not avilable return empty
//findBy  : both aove can not use async. findBy can be use async

//<div data-testid="hello" >Hello</div>

test('Component render', () => {
    const {getByText ,getByTestId, debug} = render(<Hello/>);
    getByTestId('Hello ')
    
})

// Fire Event
// import { render, fireEvent  } from '@testing-library/react'

test('Component render', () => {
    const {getByText ,getByTestId, getByRole, debug} = render(<Hello/>);
    getByTestId('Hello ')
    let btn = getByRole('button')
    fireEvent.click(myBtn)
})

// Changing State
test('Component render', () => {
    const {getByText ,getByTestId, getByRole, debug} = render(<Hello/>);
    let input = getByRole('textbox')
    expect(input).toHaveValue('');
    fireEvent.change(input, { current : { target : { value : 'new'} } })
    expect(input).toHaveValue('new');
   
})



// steps:
//  package
/**
 * "jest": "^28.1.1",
 * "@testing-library/jest-dom": "^5.16.4",
 * "@testing-library/react": "^12.1.2",
 *  "jest-environment-jsdom": "^28.1.1",
 * "@types/jest": "^28.1.3",
 */

// create jest.config.js
// module.exports = {
//   testEnvironment: "jsdom",
// };

//package.json
// scripts.test = 'jest'

//