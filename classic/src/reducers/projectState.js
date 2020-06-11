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
    category: "GVH categories",
    donationTarget: 1000,
    donationCurrent: 1000,
    description: " The Crown House is owned by Mrs. awd, and she takes care of a total of 20 children. She works as a farmer, using what profits she has left to provide for the needs of the children and to give them some joy in life.",
    locations: [{
        lat: 0,
        long: 0
    }],
    updates: ["awd"],
    parsedUpdates: [
        {
            text: "Bla bla ba",
            src: "https://scontent.fsin1-1.fna.fbcdn.net/v/t15.5256-10/55900091_843508385984093_8618666742094233600_n.jpg?_nc_cat=104&_nc_sid=ad6a45&_nc_oc=AQljIuQ4pUN-UJdRhsF9nzV-TfN81MyubXajTfCUEUzWsvMenl634t2Xy0LqaI4SEgs&_nc_ht=scontent.fsin1-1.fna&oh=03ae31c092f6ab60b9aae45657558b9a&oe=5F083077"
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
