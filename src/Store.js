import { createStore } from 'redux'

import Rootreducer from "./redux/reducer/main";


const store=createStore(
    Rootreducer
)

export default store;