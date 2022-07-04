// filename.test.js

// or make __test__ folder and you can add filename.test file here
// ____

/**
 * Returns undefined
 *
 * @param {string} x The number to raise.
 * @param {callba} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */

test(
  "Test Name",
  () => {
    // Define Test Case
  },
  timeout
);
//

test.todo("Write Test Case for XYZ functon");

const sum = (...nums) => nums.reduce((acc, num) => acc + num);

test("Test Name or Discription", () => {
  expect(sum(2, 3)).toBe(5); // assertion;
  expect(sum(2, 3)).toBe(5); // assertion;
  expect(sum(2, 3)).toBe(5); // assertion;
});

it("Test Name or Discription", () => {
  expect(2 + 3).toBe(5);
  expect(2 + 3).toBe(5);
});

describe("Login Page", () => {
  test("Test Name or Discription", () => {
    expect(2 + 3).toBe(5);
    expect(2 + 3).toBe(5);
    expect(2 + 3).toBe(5);
  });

  it("Test Name or Discription", () => {
    expect(2 + 3).toBe(5);
  });
});

beforeEach(() => {
  // do Something
});

// afterEach

beforeAll(() => {
  // do Something
});

// afterAll

//

test.only("Test Name or Discription", () => {
  expect(2 + 3).toBe(5);
});

test.skip("Test Name or Discription", () => {
  expect(2 + 3).toBe(5);
});

test("Test Name or Discription", () => {
  expect(2 + 3).toBe(5);
}, 1000); // setTimout dy default 5000

//set for all
jest.setTimout(1900);

//  for loop

test.each([1, 2, 3])("description", (ele) => {
  expect(ele).toBe(ele);
});

test.each([
  [1, 2, 3],
  [4, 5, 6],
])("description", (ele1, ele2, ele3) => {
  expect(ele1 + ele2 + ele3).toBe(ele1 + ele2 + ele3);
});

//Matchers
test.skip("Test Name or Discription", () => {
  expect(2 + 3).toBe(5);
  expect(2 + 3).toEquall(5); // ===

  expect(2 + 3).toBeGreaterThan(5);
  expect(2 + 3).toBeLessThan(5);

  expect(2 + 3).toBeGreaterThanOrEqual(5);
  expect(2 + 3).toBeLessThanOrEqual(5);

  //regex
  expect("Name").toMatch(/Nam/);
  expect("Name").toMatch(/Nam/i); //not case sensative

  expect(["A", "B", "C"]).toContain("A");

  //Falsy : false, 0, null, undefined, NaN, ''
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect("abc").toBeDefined();

  expect(null).toBeFalsy();
  expect("as").toBeTruthy();

  //not
  expect(null).not.toBeFalsy();
});

// ThrowError

function check() {
  throw new Error("fatal error");
}

test("Test Name or Discription", () => {
  expect(check).toThrow();
  expect(check).toThrow(Error);
  expect(check).toThrow("fatal error");
  expect(check).toThrow(/fatal/i);
});

//  React testing library
// import { render } from '@testing-library/react'

test("Component render", () => {
  const comp = render(<Hello />);
  comp.debug();

  let helloText = comp.getByText("Hello"); // refernce of dom element
  console.log(helloText.tagName);
  console.log(helloText.textContent);
  expect(helloText).toBeTruthy();
});

test("Component render", () => {
  const { getByText, debug } = render(<Hello />);
});

//Methods to select element
//getBY : if element not avilable error
//queryBy : if element not avilable return empty
//findBy  : both aove can not use async. findBy can be use async

//<div data-testid="hello" >Hello</div>

test("Component render", () => {
  const { getByText, getByTestId, debug } = render(<Hello />);
  getByTestId("Hello ");
});

// Fire Event
// import { render, fireEvent  } from '@testing-library/react'

test("Component render", () => {
  const { getByText, getByTestId, getByRole, debug } = render(<Hello />);
  getByTestId("Hello ");
  let btn = getByRole("button");
  fireEvent.click(myBtn);
});

// Changing State
test("Component render", () => {
  const { getByText, getByTestId, getByRole, debug } = render(<Hello />);
  let input = getByRole("textbox");
  expect(input).toHaveValue("");
  fireEvent.change(input, { current: { target: { value: "new" } } });
  expect(input).toHaveValue("new");
});

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
// scripts.test = 'jest --coverage -- watch'
// npm t -- --watch
// npm t -- -u
// --env=jsdom

//

const combine = (...args) => {
  if (args.length == 0) return 0;
  let result = null;
  let error = { status: false, message: "" };
  result = args.reduce((acc, num) => {
    const acc_int = parseInt(acc);
    const num_int = parseInt(num);
    if (isNaN(acc_int) && isNaN(num_int)) return acc + num;
    if (isNaN(acc_int) || isNaN(num_int)) {
      error.status = true;
      error.message = "Data Type Error";
    }
    return acc_int + num_int;
  });
  if (error.status) return error.message;
  return result;
};

describe("Calcultion", () => {
  test("if all the arguments are numbers", () => {
    expect(combine(2, 3)).toEqual(5);
    expect(combine(2, 6, 8)).toEqual(16);
  });

  test("if some of the numbers passed as a string", () => {
    expect(combine("2", 3)).toEqual(5);
    expect(combine(4, "5")).toEqual(9);
    expect(combine("2", "6")).toEqual(8);
  });

  test("if some of the arguments are a string", () => {
    expect(combine("A", 3)).toMatch(/Data Type Error/);
    expect(combine(4, "D")).toMatch(/Data Type Error/);
    expect(combine("A", "D")).toEqual("AD");
  });
});

function throwError() {
  throw new Error("fatal error");
}

test("Test Name or Discription", () => {
  expect(throwError).toThrow();
  expect(throwError).toThrow(Error);
  expect(throwError).toThrow("fatal error");
  expect(throwError).toThrow(/fatal/i);
});

test("Matchers", () => {
  // Test Equality
  const obj1 = { a: { b: 3 } };
  const obj2 = { a: { b: 3 } };

  expect(2 + 3).toBe(5);
  expect(obj1).toEqual(obj2);

  // Number
  expect(2 + 3).toBeGreaterThan(4);
  expect(2 + 3).toBeLessThan(6);
  expect(2 + 3).toBeGreaterThanOrEqual(5);
  expect(2 + 3).toBeLessThanOrEqual(5);

  //Match String
  expect("Name").toMatch(/Nam/);
  expect("Name").toMatch(/nam/i); // not case sensative

  //Array
  expect(["A", "B", "C"]).toContain("A");

  // Truthiness
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect("abc").toBeDefined();
  expect(null).toBeFalsy();
  expect("test").toBeTruthy();
  //Falsy Value : false, 0, null, undefined, NaN, ''

  //not
  expect(true).not.toBeFalsy();
});

// test("Sum of Numbers", () => {
//   expect(sum(2, 3)).toBe(5); // assertion;
//   expect(sum(4, 5)).toBe(9); // assertion;
//   expect(sum(2, 6)).toBe(8); // assertion;
// });

test("Component render", () => {
  // DOM node of rendered app component
  const component = render(<App />);

  // get the element which contain "ToDoApp" as a text
  const text = component.getByText("ToDoApp");

  // check if it's contain "ToDoApp" in text
  expect(text).not.toBeTruthy();
});

// describe("App Component", () => {
//   test("should match a snapshot", () => {
//     const container = render(<App />);
//     console.log(container);
//     // screen.debug()
//   });
// });

// test("Component contain 'ToDoApp' text", () => {
//   // DOM node of rendered app component
//   const component = render(<App />);

//   // get the element which contain "ToDoApp" as a text
//   const text = component.getByText("ToDoApp");

//   // check if it's contain "ToDoApp" in text
//   expect(text).toBeTruthy();
// });

// const table = document.createElement("table");
// const comp = render(<App />, {
//   container: document.body.appendChild(table),
// });

const obj1 = { a: { b: 3 } };
const obj2 = { a: { b: 3 } };

function throwError() {
  throw new Error("fatal error");
}

test("Matchers", () => {
  // Test Equality
  expect(2 + 3).toBe(5);
  expect(obj1).toEqual(obj2);

  // Number
  expect(2 + 3).toBeGreaterThan(4);
  expect(2 + 3).toBeLessThan(6);
  expect(2 + 3).toBeGreaterThanOrEqual(5);
  expect(2 + 3).toBeLessThanOrEqual(5);
  expect(NaN).toBeNaN();

  //Match String
  expect("Name").toMatch(/Nam/);
  expect("Name").toMatch(/nam/i); // not case sensative

  //Array
  expect(["A", "B", "C"]).toContain("A");

  // Truthiness
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect("abc").toBeDefined();
  expect(null).toBeFalsy();
  expect("test").toBeTruthy();
  //Falsy Value : false, 0, null, undefined, NaN, ''

  //not
  expect(true).not.toBeFalsy();

  //catch Error
  expect(throwError).toThrow();
  expect(throwError).toThrow(Error);
  expect(throwError).toThrow("fatal error");
  expect(throwError).toThrow(/fatal/i);
});

// test.only("Execute Test", () => {
//   // test case
// });

test.skip(" Skip This Test", () => {
  // test case
});

test("Do not Execute", () => {
  // test case
});

test.skip("Test Name or Discription", () => {
  expect(2 + 3).toBe(5);
});

test("Test Name or Discription", () => {
  expect(2 + 3).toBe(5);
}, 1000); // setTimout dy default 5000

//set for all
// jest.setTimout(1900);

//  for loop

test.each([1, 2, 3])("increment", (ele) => {
  expect(ele).toBe(ele);
});

test.each([
  [1, 2, 3],
  [4, 5, 9],
])("sum rsult", (num1, num2, res) => {
  expect(num1 + num2).toBe(res);
});

test.todo("Write Test Case for XYZ functon");

//4 jul
import { render, fireEvent, screen } from "@testing-library/react";
import { App } from "../App";
import React from "react";

// test("Using Queries", () => {
//   const {
//     getByText,
//     getByRole,
//     getByPlaceholderText,
//     getByAltText,
//     getByTitle,
//     getByTestId,
//   } = render(<App />);

//   let headding = getByText("Add Todo"); // <h1> Add Todo </h1>
//   let myBtn = getByRole("button", { name: "add" }); // <button name='add' > Add </button>
//   let input = getByPlaceholderText("Enter Todo"); // <input placeholder="Enter Todo" />
//   let icon = getByAltText("icon"); // <img alt="icon" src="/icon.png" />
//   let close = getByTitle("close"); //<span title="close"></span>
//   let todoList = getByTestId("list"); // <div data-testid="list" ></div>
// });

// test("Add Todo", () => {
//   const { getByTestId } = render(<App />);

//   let input = getByTestId("todo_input");
//   let myBtn = getByTestId("add");
//   let todoList = getByTestId("list");

//   expect(input).toHaveValue("");
//   fireEvent.change(input, { current: { target: { value: "new task" } } });
//   expect(input).toHaveValue("new task");

//   expect(todoList.length).toBe(0);
//   fireEvent.click(myBtn);
//   expect(todoList.length).toBe(1);
// });

// test("Add Todo", () => {
//   render(<App />);

//   let input = screen.getByTestId("todo_input");
//   let myBtn = screen.getByTestId("add");
//   let todoList = screen.getByTestId("list");

//   expect(input).toHaveValue("");
//   fireEvent.change(input, { current: { target: { value: "new task" } } });
//   expect(input).toHaveValue("new task");

//   expect(todoList.length).toBe(0);
//   fireEvent.click(myBtn);
//   expect(todoList.length).toBe(1);
// });

// describe("App Component", () => {
//   test("Render", () => {
//     const { container, debug, rerender, unmount, baseElement } = render(
//       <App theme={"light"} />
//     );

//     expect(container).toMatchSnapshot(); // take a sanpshot
//     expect(baseElement.tagName).toBe("BODY"); // check if parent element is body
//     rerender(<App theme={"dark"} />); // rerender App componet
//     debug(); // print HTML
//     unmount(); // unmount the component
//   });
// });

// test("Submit Button", () => {
//   let myBtn = getByTestId("add");
//   fireEvent.click(myBtn);
//   expect();
// });

// describe("App Component", () => {
//   test("Render", () => {
//     const { getByRole, findByRole, queryByRole } = render(
//       <App theme={"light"} />
//     );
//     const btn = getByRole("button");
//     const qbtn = queryByRole("button");
//     const findbtn = findByRole("button");
//     console.log(btn);
//     console.log(qbtn);
//     console.log(findbtn);
//   });
// });

// describe("Test", () => {
//   const intialValue = getInitialValue();

//   afterEach(() => {
//     resetValue(intialValue);
//   });

//   test("Test Case 1", () => {
//     // modifiy initial value
//   });

//   test("Test Case 2", () => {
//     // modifiy initial value
//   });
// });

// describe("DB Test", () => {
//   beforAll(() => {
//     db.connect();
//   });

//   test("Test Case 1", () => {
//     // performe db operation
//   });

//   test("Test Case 2", () => {
//     // performe db operation
//   });

//   afterAll(() => {
//     db.disconnect();
//   });
// });

// describe("App Component", () => {
//   test("Render", () => {
//     const { container, debug, rerender, unmount, baseElement } = render(
//       <App theme={"light"} />
//     );

//     expect(container).toMatchSnapshot(); // take a sanpshot
//     expect(baseElement.tagName).toBe("BODY"); // check if parent element is body
//     rerender(<App theme={"dark"} />); // rerender App componet
//     debug(); // print HTML
//     unmount(); // unmount the component
//   });
// });
