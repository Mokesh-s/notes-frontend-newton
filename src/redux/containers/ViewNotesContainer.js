import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import ViewNotes from '../../component/ViewNotes/ViewNotes'

const mapPropsToState = (state, ownProps) => {
  return {
    notes: state.notesReducer.notes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const ViewNotesContainer = connect(
  mapPropsToState,
  mapDispatchToProps
)(ViewNotes)

export default ViewNotesContainer
