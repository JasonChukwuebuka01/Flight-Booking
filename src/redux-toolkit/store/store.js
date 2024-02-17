import {configureStore} from "@reduxjs/toolkit"
import flightDataSliceReducer from "../flightDataSlice/flightDataSlice";





const store = configureStore({
    reducer:{
       flightData : flightDataSliceReducer,
    }
})


export default store;