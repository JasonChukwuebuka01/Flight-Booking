import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: []
};

const flightDataSlice = createSlice({
    name: "flightData",
    initialState,
    reducers: {
        saveFlightData: (state, action) => {

            const newFlightData = [...state.data];

            newFlightData.push(action.payload);

            return {
                data: newFlightData
            }

        },

        deleteFlightData: (state, action) => {

            const filteredFlightData = state.data.filter(data => data.id !== action.payload);

            return {
                data: filteredFlightData
            }
        }
    }

});



export default flightDataSlice.reducer;

export const { saveFlightData , deleteFlightData} = flightDataSlice.actions;