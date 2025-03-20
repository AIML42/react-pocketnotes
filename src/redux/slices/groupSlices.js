import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    groups: [],
    selectedGroupId: null,
    error: null
}

const groupSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {

        addGroup(state, action) {


            if (!action.payload.groupName || !action.payload.groupName.trim()) {
                state.error = "Name is required";
                return;
            }

            const newGroupName = action.payload.groupName.trim();
            const existingGroupName = state.groups.some(
                group => group.name.toLowerCase() === newGroupName.toLowerCase());

            if (newGroupName.length > 25) {
                state.error = "Name is bigger than 25 characters!";
                return;
            }

            if (existingGroupName) {
                state.error = "Name already exists!";
                return;
            }

            // now create group 
            const uniqueId = uuidv4();
            const values = newGroupName.split(" ");


            let dP;
            if (!newGroupName.includes(" ")) {
                dP = newGroupName.slice(0, 1).toUpperCase();
            } else {
                const values = newGroupName.split(/\s+/); 
                dP = (values[0][0] + (values[1] ? values[1][0] : "")).toUpperCase();
            }

            const currentTime = new Date().toISOString();

            state.error = null;
            state.groups.push({
                id: uniqueId,
                name: newGroupName,
                color:action.payload.color,
                displayPicture: dP,
                createdAt: currentTime
            })

        },

        setCurrentGroupId(state, action) {
            state.selectedGroupId = action.payload
        }

    }

})

export const { addGroup, setCurrentGroupId } = groupSlice.actions
export default groupSlice.reducer