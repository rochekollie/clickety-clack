const toggle = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return !state
    default:
      return state
  }
}


// Test: modules/toggle.test.js

import toggle from './toggle'



