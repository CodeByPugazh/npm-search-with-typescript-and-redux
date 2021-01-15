import { ActionTYpes } from "../action-types"

interface SearchRepositoriesAction {
  type: ActionTYpes.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccessAction {
  type: ActionTYpes.SEARCH_REPOSITORIES_SUCCCESS
  payload: string[]
}

interface SearchRepositoriesErrorAction {
  type: ActionTYpes.SEARCH_REPOSITORIES_ERROR
  payload: string
}
export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction
