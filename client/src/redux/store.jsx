import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { AuthApi } from './AuthSlice/AuthSlice'
import { CategoryApi } from './CategorySlice/CategorySlice'
import { AdminStore } from './AdminStore/AdminStore'
import { productslice } from './ProductSlice/productslice'
import { PlanSlice } from './PlanSlice/PlanSlice'

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
    [AdminStore.reducerPath]: AdminStore.reducer,
    [productslice.reducerPath]: productslice.reducer,
    [PlanSlice.reducerPath]: PlanSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware)
      .concat(CategoryApi.middleware)
      .concat(AdminStore.middleware)
      .concat(productslice.middleware)
      .concat(PlanSlice.middleware)
})

setupListeners(store.dispatch);