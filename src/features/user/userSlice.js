import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import getAddress from "../../services/apiGeocoding";


function getPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

export const fetchAddress = createAsyncThunk('user/fetchAddress', async function () {
    const { coords } = await getPosition();
    const position = { latitude: coords.latitude, longitude: coords.longitude };

    const location = await getAddress(position);
    const address = `${location?.locality}, ${location?.city} ${location?.postcode}, ${location?.countryName}`;

    return { position, address };
})

const initialState = {
    userName: '',
    status: 'idle',
    position: {},
    address: '',
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName(state, action) {
            state.userName = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAddress.pending, (state) => {
            state.status = 'loading';
        }).addCase(fetchAddress.fulfilled, (state, action) => {
            state.position = action.payload.position;
            state.address = action.payload.address;
            state.status = 'idle';
        }).addCase(fetchAddress.rejected, (state) => {
            state.error = 'There was a problem getting your location, make sure to fill this field';
            state.status = 'error';
        });
    }
});

export default userSlice.reducer;

export const { updateName } = userSlice.actions;