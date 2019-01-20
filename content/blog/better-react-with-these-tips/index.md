---
title: Grow out of tutorial code, write better React Apps with these 23 tips!
date: '2017-10-24T22:40:32.169Z'
---

![Graudate from Tutorial Code in React](./graduate-from-tutorial-code.jpg)

Aren't there times in life where we wish we could just go back in time and tell yourself to do something better. To start a project with a better approach, to share your learnings with your younger self. The classic I-need-a-time-machine to-fix this code! It would just save so much time refactoring your code. Like many of you who are reading this code, I learned React/Redux from online videos and tutorials. Many of these tutorials are outdated, and or made too easy for the students to understand React. These were never intended to be production level code.

I have been working on React almost exclusively from past one year and have been reading and writing code. Below tips are from my personal experiences of refactoring code not once but many times.

**1. Use ES7 features**, if you're not using ES6 then you can probably not write React these days, but even better would be to use ES7 ([reference](https://babeljs.io/blog/2015/06/07/react-on-es6-plus)), the notable ones which would save dev time are:
```javascript
// 1.1 static PropTypes
  static propTypes = {
    updateFunction: PropTypes.func.isRequired,
    params: PropTypes.shape({
      idef: PropTypes.string.isRequired,
    }).isRequired,
  }

// 1.2 no constructor: use componentWillMount
  componentWillMount() {
    window.scrollTo(0, 0)
    this.numOfReq = 0
  }

// 1.3 no bind : using fat arrow notation with ES7 enabled will
// auto bind your functions
 someFunctionToBeBinded = () => {
    this.setState({ showLoader: true }) // access to this
  }

// 1.4 spread operator : Instead of Object.assign, use ... operator, resulting in cleaner code
  ```
**2. Start with the latest stable versions:** React 16, React Router 4, Webpack 3 at least. Better if you use the stable latest versions from start. This will save your time in upgradation later.

**3. Use Proptypes:** This serves dual purpose, documentation and sort of type checking for your components. You can also provide default values to your props so that if things go south from the API response your app will not just crash and burn.

**4. Setup separate dev, stage and prod** environments. You can assign the env variable in React using the DefinePlugin. Use NPM scripts to run different versions as per requirements. It's super easy.

```javascript
new webpack.DefinePlugin({
  'process.env': {
   NODE_ENV: JSON.stringify(process.env.NODE_ENV),
   },
 }),
 ```

**5. Comment your logic along**, document the components. You think and make yourself believe that you'll remember but trust me you won't. I find this JSDoc style working for me, see if you find it useful:

```javascript
For file level documentation:
 /**
 * @render /mainpage/:index
 * @description Direct render, shows details of abc users
 * @protected
 * @author Tanay Pratap <tanay.mit@gmail.com>
 * @todo Refactor this code and extract out xyz function
 */


For functions, especially utility functions:
 
  /**
  * Shows Toast message when called
  * @param {string} toastMsg - Msg to be displayed
  * @param {boolean} [notSelfHide=false] - If true, the message will not autohide after ttl.
  * @param {boolean} [longText=false] - If toastMsg is long then show in smaller fonts.
  */
  showToast = (toastMsg, notSelfHide, longText) => {
  this.setState({ showToast: true, toastMsg, notSelfHide, longText })
  }
```

**6. Use async/await**, if not at least promises!: If you're starting now, it's best to use async/await than the promise. Makes the code easy on eyes and also easier to understand. If you see the newer documentations for any Javascript library/framework you'll see async/await being used extensively. Use async/await for your node server as well. Node supports async/await from 7.6.0 and above. Node 8 is stable and LTS release. 

If for some reason, you can't use async/await at least use promises.

**7. Don't forget Testing**: Jest is easy to setup. Requires minimal developer time but saves major bugs.

**8. Setup your Webpack for versioning and chunking**, don't start with Webpack 1 anymore. Higher versions support a lot of useful features by default for example tree shaking to make your build leaner.

**9. Save State to LocalStorage early on**, this will remove the need of reading it from two places, especially when reloading the app or saving user's login/logout state. Use something like Lodash's throttle to save it only after 500ms or 1s. This will save the expensive JSON.stringify operation being fired on every state change.

**10. Break Redux store into multiple stores**. This will make the store easier to reason with when your code base grows. You will always have ACTIONS to change things in more than one store at a time.

**11. Start using Redux early on** if you know the project is going to grow. For async operations use Redux Thunk for sure. Promise (another redux middleware for async, most tutorials use it) etc. are easy to understand but Redux Thunk is battle tested.

**12. Set up guidelines for your team**. You aren't going to work alone. It's better to document a set of rules which everyone should follow. Make sure that your team has the same liniter setup, code goes through code reviews, the coding style is clearly documented.

**13. Not more than 300 lines of code in one single file**. If it's growing refactor it in smaller components. Also, follow the component container pattern. It keeps the view (which is mostly verbose JSX) and your logic (JS with hooks) separate. Helps in reuse of code as well.

**14. Higher Order Components (HOC)** for extracting same code being used on every route out. Error handler UI, Toasts, Dialogs, SnackBar, etc. UI components and their show and hide logic can be handled easily with an HOC. 

**15. File Structure:** Separate your views into different folders and subfolders. for example, I use these top level directories: Public Views, Protected Views, Utility. You are advised to give it some thought when starting the project and create top level directories. 

**16. If a UI or logic is repeating** even once, don't copy paste code, create a function or classless component. It will save you time. Even if you don't need it the third time, refactoring would be easier. And trust me on this, you will need it the third time!

**17. this.setState({ variable: value })** only writes the changing variable to state, no need to do Object.assign or spread operator. I know this point is silly, but I didn't know this in the beginning and have to refactor later when came to know. So just being safe here! 

**18. Linting is important.** There are linters for JS and JSX, setting up both are important for consistent code following best practices.

**19. Don't use refs for input elements** until absolutely necessary. Writing a simple onChange function won't take much time but is more advisable. It will also make it easier if you want to do input validation as the user types.

**20. If you need a charting library**, ditch c3 and d3, their integration sucks, go for Chart.js implementation with React.

**21. Flex for styling**. Makes component styling much more easier. Try to write more style into your components than in your CSS files. No Bootstrap please. You don't need it. It just bloats your build. Plus you don't want your app to look like every other app out there. Invest some time in defining your styles. If you absolutely need a library I would recommend the material-ui library for React.

**22. JSX/Babel formatter for Atom**. Atom Beautify package with langauge-babel will do the trick. Makes your code look slick and indented as per your linter without you having to do any work.

**23. Most Important: Use axios, no fetch is not ready**, no fetch doesn't support simple things like interceptors, no an extra step just to convert stream to json when all your APIs are returning data in JSON is just waste of time, no writing functions/wrappers on top of it just makes it another library, no it's still not supported on every browser on desktop and phone and no all this hassle doesn't give you anything extra. Just don't use Fetch. Use Axios! I saved it for the last for a reason.



