import { createStore } from 'redux'

const store = createStore((state = { hello: 'world' }, action) => state)

export default store
