import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'addUser',
    initialState: {
        count: 0,
        member: [],
    },
    reducers: {
        addMember: (state, action) => {
            return {
                count: state.count += 1, 
                member: [...state.member, action.payload],
            };
        },
        deleteMember: (state, action) => {
            return {
                count: state.count -= 1, 
                member: state.member.filter(
                    (user) => user.name !== action.payload.username
                ),
            };
        },
    },
});

export const { addMember, deleteMember } = userSlice.actions;
export default userSlice.reducer;
