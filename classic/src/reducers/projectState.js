// import {
//     ADD_TODO,
//     DELETE_TODO,
//     EDIT_TODO,
//     COMPLETE_TODO,
//     COMPLETE_ALL_TODOS,
//     CLEAR_COMPLETED
// } from '../constants/ActionTypes'

import {SET_SIDEPANEL_PROJECT_SUCCESS, PARSE_PROJECT_UPDATES_SUCCESS} from "../constants/ActionTypes"

const initialState = {
    fullName: "GVH",
    description: `
        “Give a man a fish, to feed him for a day. Teach a man to fish,
        and feed him for a lifetime” – Lao Tzu.

        We strongly believe in bringing funds to places in need, not to be given to the people, but to be used to fund actual projects that will benefit the local community.`,
    locations: [{
        lat: 0,
        long: 0
    }],
    updates: ["awd"],
    parsedUpdates: [
        {
            text: "This is a map view of the projects we have done so far.",
            pictures: ["https://gvh.sg/wp-content/uploads/2018/01/GVH-Logo-main-200.webp"]
        }
    ]
}


export default function projectState(state = initialState, action) {
    switch (action.type) {
        case SET_SIDEPANEL_PROJECT_SUCCESS:
            return {
                ...action.project,
                parsedUpdates: state.parsedUpdates
            }
        
        case PARSE_PROJECT_UPDATES_SUCCESS:
            return {
                ...state,
                parsedUpdates: action.updates
            }
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
