import React from 'react';

const Blog = () => {
    return (
        <div className='bg-red-50'>
            <div className='max-w-screen-2xl mx-auto '>
                <h3 className='text-4xl	font-bold text-center py-4 text-primary'>Ques-Ans</h3>
                <h4 className='text-2xl my-2 font-bold'>Ques 1. How will you improve the performance of a React Application</h4>
                <p className='leading-7'>Ans: Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI.
                    <br />
                    1. Using Immutable Data Structures: Data immutability is not an architecture or design pattern, it’s an opinionated way of writing code.
                    2. Function/Stateless Components and React.PureComponent: In React, function components and PureComponent provide two different ways of optimizing React apps at the component level.
                    <br />
                    3. Multiple Chunk Files: Your application always begins with a few components. You start adding new features and dependencies, and before you know it, you end up with a huge production file.
                    <br />
                    4. Using Production Mode Flag in Webpack:If you are using webpack 4 as a module bundler for your app, you can consider setting the mode option to production.
                    <br />
                    5.Dependency optimization: When considering optimizing the application bundle size, it’s worth checking how much code you are actually utilizing from dependencies. For example, you could be using Moment.js which includes localized files for multi-language support.
                    <br />
                    7. Avoid Inline Function Definition in the Render Function: Since functions are objects in JavaScript ({ } !== { }), the inline function will always fail the prop diff when React does a diff check. Also, an arrow function will create a new instance of the function on each render if it's used in a JSX property.
                    <br />
                    8. Throttling and Debouncing Event Action in JavaScript:Event trigger rate is the number of times an event handler invokes in a given amount of time.
                    <br />
                    9. Avoid using Index as Key for map : You often see indexes being used as a key when rendering a list.
                    <br />
                    10. Avoiding Props in Initial States: We often need to pass initial data with props to the React component to set the initial state value.
                    <br />
                    11. Spreading props on DOM elements: You should avoid spreading properties into a DOM element as it adds unknown HTML attribute, which is unnecessary and a bad practice.
                    <br />
                    12. Use Reselect in Redux to Avoid Frequent Re-render: Reselect is a simple selector library for Redux, which can be used for building memorized selectors. You can define selectors as a function, retrieving snippets of the Redux state for React components.
                    <br />
                    12. Memoize React Components: Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. A memoized function is usually faster because if the function is called with the same values as the previous one then instead of executing function logic it would fetch the result from cache.
                </p>

                <h4 className='text-2xl my-2 font-bold'>Ques 2. What are the different ways to manage a state in a React application</h4>
                <p>Ans: There are four main types of state you need to properly manage in your React apps:
                    <br />
                    1. Local state: Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                    <br />
                    2. Global state: lobal state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                    Sometimes state we think should be local might become global.
                    <br />
                    3. Server state: Server state – Data that comes from an external server that must be integrated with our UI state.

                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                    There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                    Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                    <br />
                    4. URL state: URL state – Data that exists on our URLs, including the pathname and query parameters.

                    URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                </p>
                <h4 className='text-2xl my-2 font-bold'>Ques 3.  How does prototypical inheritance work? </h4>
                <p>Ans: Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.
                    <br />
                    language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                    Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                    JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

                    Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.
                    <br />
                    JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.Nearly all objects in JavaScript are instances of Object, which has null as its prototype.
                    While this confusion is often considered to be one of JavaScript's weaknesses, the prototypal inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypal model.JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
                </p>
                <h4 className='text-2xl my-2 font-bold'>Ques 4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?  </h4>
                <p>Dynamic searching is the functionality that allows a user to type into a search field to have the results filter and render instantly on the screen.The state contains the key of names, price etc pointing to an array of names, and the key of search referring to an empty string to be controlled by our input JSX tag or array.
                    <br />
                    This function is what allows us to render what shows up onto the page dynamically. As we type into the input field and control our search value string, we check to see if any of the names have the string within them.
                </p>
                <h4 className='text-2xl my-2 font-bold'>Ques 5. What is a unit test? Why should write unit tests?  </h4>
                <p>Unit testing involves testing individual components of the software program or application. The main purpose behind this is to check that all the individual parts are working as intended. A unit is known as the smallest possible component of software that can be tested. Generally, it has a few inputs and a single output.
                    <br />
                    The main objective of unit testing is to ensure that each individual part is working well and as it’s supposed to work. The entire system will only be able to work well if the individual parts are working well. Unit testing is performed by the software developers themselves. Sometimes, independent software testers also perform these tests.

                    There are two main types of unit testing: manual and automated. The automated method is the most preferred as it is faster and more accurate, but performing this task manually is also an option. The manual approach has a step by step instructional procedure that helps testers perform this task efficiently. The automated unit testing usually involves the developer first writing a section of the code in the application so that the function can be tested.

                    After that, when the application is deployed, they remove the test code. They can also isolate the function to test it in a more thorough way. This helps with identifying any dependency that might be there between the tested code and the other data spaces. These dependencies can then be eliminated.
                </p>
            </div>
        </div>
    );
};

export default Blog;