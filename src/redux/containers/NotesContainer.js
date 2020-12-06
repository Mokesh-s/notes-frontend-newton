import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import Notes from '../../component/Notes/Notes'

const mapPropsToState = (state, ownProps) => {
  return {
    notes: state.notesReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNote: (createNotePayload) => { dispatch(actions.createNote(createNotePayload)) }
  }
}

const NotesContainer = connect(
  mapPropsToState,
  mapDispatchToProps
)(Notes)

export default NotesContainer
