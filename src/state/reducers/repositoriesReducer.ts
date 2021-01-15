import { ActionTYpes } from "../action-types"
import { Action } from "../actions"

interface RepositoriesState {
  loading: boolean
  error: string | null
  data: string[]
}

const initialState = {
  loading: false,
  error: null,
  data: [],
}

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionTYpes.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      }
    case ActionTYpes.SEARCH_REPOSITORIES_SUCCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      }
    case ActionTYpes.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      }
    default:
      return state
  }
}

export default reducer
