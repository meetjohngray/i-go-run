import { example } from '../actions/index'

const initialState = []
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // A reducer will return anything you want it to
    case 'Bananas':
      return 'I like bANANAS!!!'

    default:
      return state
  }
}

export default reducer
