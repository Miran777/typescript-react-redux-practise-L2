import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Page {
    id: number,
    title: string,
}

type PagesState = {
    list: Page[]
}

const initialState: PagesState = {
    list: []
}

interface ListItem {
    id: number,
    title: string
}

let id:number = 0

const pageSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        addNumber(state, action: PayloadAction<ListItem>) {
            state.list.push({
                id: action.payload.id,
                title: action.payload.title,
            })
        },
        removeNumber(state, action: PayloadAction<number>) {
            state.list = state.list.filter(page => page.id !== action.payload)
        }
    }
})



export const {addNumber, removeNumber} = pageSlice.actions
export default pageSlice.reducer
