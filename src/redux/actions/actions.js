import * as actionTypes from './actionTypes'

export function addingNotes (addingNotesRequest) {
  return {
    type: actionTypes.ADD_NOTE,
    note: addingNotesRequest
  }
}

export function createNote (createNotePayload) {
  return {
    type: actionTypes.CREATE_NOTE,
    createNotePayload
  }
}
