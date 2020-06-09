// import {
//     ADD_TODO,
//     DELETE_TODO,
//     EDIT_TODO,
//     COMPLETE_TODO,
//     COMPLETE_ALL_TODOS,
//     CLEAR_COMPLETED
// } from '../constants/ActionTypes'

import {SET_SIDEPANEL_PROJECT_SUCCESS} from "../constants/ActionTypes"

const initialState = {
    fullName: "GVH",
    category: "GVH categories",
    donationTarget: 1000,
    donationCurrent: 1000,
    locations: [{
        lat: 0,
        long: 0
    }],
    updates: ["awd"]
}


export default function projectState(state = initialState, action) {
    switch (action.type) {
        case SET_SIDEPANEL_PROJECT_SUCCESS:
            return action.project

        // case DELETE_TODO:
        //     return state.filter(todo =>
        //         todo.id !== action.id
        //     )

        // case EDIT_TODO:
        //     return state.map(todo =>
        //         todo.id === action.id ?
        //             { ...todo, text: action.text } :
        //             todo
        //     )

        // case COMPLETE_TODO:
        //     return state.map(todo =>
        //         todo.id === action.id ?
        //             { ...todo, completed: !todo.completed } :
        //             todo
        //     )

        // case COMPLETE_ALL_TODOS:
        //     const areAllMarked = state.every(todo => todo.completed)
        //     return state.map(todo => ({
        //         ...todo,
        //         completed: !areAllMarked
        //     }))

        // case CLEAR_COMPLETED:
        //     return state.filter(todo => todo.completed === false)

        default:
            return state
    }
}
