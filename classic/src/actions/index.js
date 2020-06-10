import * as types from '../constants/ActionTypes'

export const setNavState = navState => ({ type: types.SET_NAV_STATE, navState })
export const setSidePanelProject = projectId => (
    function(dispatch){
        fetch('https://myanmar-map.herokuapp.com/projects/' + projectId).then(
            (res) => {
                return res.json()
            },
            (error) => console.log("There has been an error", error)
        ).then(project => {
            console.log(project)

            dispatch(setSidePanelProjectSuccess(project))

            window.FB.api(
                '/375770749282695_1016928725166891',
                'GET',
                { "fields": "full_picture,picture,attachments{description,media_type,unshimmed_url,subattachments},properties" },
                function (response) {
                    console.log(response)
                }
            )
        })
    }
)
const setSidePanelProjectSuccess = project => (
    { type: types.SET_SIDEPANEL_PROJECT_SUCCESS, project }
)

// export const addTodo = text => ({ type: types.ADD_TODO, text })
// export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
// export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
// export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
// export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
// export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
// export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter })