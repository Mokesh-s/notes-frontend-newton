import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export function notesReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      return state.notes
    case actionTypes.CREATE_NOTE:
      var createNewNote = [...state.notes]
      var newNoteObj = { id: createNewNote.length + 1, note: action.createNotePayload.note }
      createNewNote.push(newNoteObj)
      console.log(createNewNote)
      return Object.assign({}, state, {
        notes: createNewNote
      })
    default:
      return state
  }
}
