import * as types from '../constants/ActionTypes'

export const setNavState = navState => ({ type: types.SET_NAV_STATE, navState })
export const setSidePanelProject = projectId => {
    return dispatch => {
        return fetch('https://myanmar-map.herokuapp.com/projects/' + projectId).then(
            (res) => {
                return res.json()
            },
            (error) => console.log("There has been an error", error)
        ).then(project => {

            dispatch(setSidePanelProjectSuccess(project))
            dispatch(parseProjectUpdates(project.updates))
        })
    }
}
const setSidePanelProjectSuccess = project => (
    { type: types.SET_SIDEPANEL_PROJECT_SUCCESS, project }
)
const parseProjectUpdates = updates => {
    return dispatch => {
        var postPromises = []
        updates.forEach(update => {
            var postId = update.substr(update.lastIndexOf('/') + 1)

            //REMEMBER TO BUILD USING WEBPACK AFTER CHANGE
            var postPromise = fetch(`https://graph.facebook.com/375770749282695_${postId}?fields=full_picture,attachments{subattachments,media_type,media},created_time,message,permalink_url&access_token=EAAjPCUaN90oBAMQRxRDWikIRVcWFeBvNZBKZA1bubxCBAXsUgVx6jTolD55V8ElmgRWkIKypdYPPFtqZCkj9iNqA69ktZAzggQhJe4LRJsnvs3tkSdyIg8azjEtgGqIlzlZBTmezZAH1ZAQ6aZCsmf8ahh2CZCrb2zRPf7L77gPnoXgZDZD`)
                .then(
                    (res) => res.json(),
                    (error) => console.log("There has been an error", error)
                )
            postPromises.push(postPromise)
        })

        return Promise.all(postPromises).then(updates => {
            console.log("These are the updates : " + updates[0].message)

            var parsedUpdates = []
            updates.forEach(update => {
                var picData = update.attachments.data[0]
                console.log(update)
                parsedUpdates.push({
                    text: update.message,
                    pictures: picData.subattachments ? picData.subattachments.data.map(x => x.media.image.src) : [picData.media.image.src],
                    //Unix date number is stored, to be sorted later in UpdatesTab
                    date: Date.parse(update.created_time),
                    url: update.permalink_url
                })
            })
            console.dir(parsedUpdates)
            dispatch(parseProjectUpdatesSuccess(parsedUpdates))
        })
    }
}

const parseProjectUpdatesSuccess = updates => (
    { type: types.PARSE_PROJECT_UPDATES_SUCCESS, updates }
)

// export const addTodo = text => ({ type: types.ADD_TODO, text })
// export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
// export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
// export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
// export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
// export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
// export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter })