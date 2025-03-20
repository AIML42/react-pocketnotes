import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    notes : [],
}

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers : {
        
        addNote(state, action){

            const groupId = action.payload.groupId;
            const content = action.payload.content;
            const uniqueId = uuidv4();
            const currentTime = new Date().toISOString();

            state.notes.push({
                id : uniqueId,
                groupId:groupId,
                content: content,
                createdAt: currentTime

            })

        }

    }

})

export const {addNote} = noteSlice.actions
export default noteSlice.reducer