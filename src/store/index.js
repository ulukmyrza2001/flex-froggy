import { configureStore } from '@reduxjs/toolkit'
import { FroggySlice } from './FroggyLevels'

export const store = configureStore({
	reducer: {
		froggy: FroggySlice.reducer,
	},
})
