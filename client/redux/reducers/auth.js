const initialState = {
  isAuthenticated: false
}

export default function (state = initialState, action) {
  if (!action) return state

  switch (action.type) {
    default:
      return state
  }
}
