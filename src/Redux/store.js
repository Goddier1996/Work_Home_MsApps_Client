import { configureStore } from '@reduxjs/toolkit'
import ValueCategory from './featuersAllValueCategory'



const store = configureStore({
    reducer: {
        categoryValueId: ValueCategory
    }
})

export default store;