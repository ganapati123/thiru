//index.js  -->root file for entire project
import React from 'react'

//import ReactDom
import ReactDOM from 'react-dom'
 
//import Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import Routings.js
import Routings from './components/Routings.js'

// import { legacy_createStore as createStore } from 'redux'
// import rootReducer from './../reducers/index.js'
// var store=createStore(rootReducer)

import { Provider } from 'react-redux'

import store from './store/index.js'

ReactDOM.render(<Provider store={store}>
                  <Routings/>
               </Provider>,document.getElementById('root'))

