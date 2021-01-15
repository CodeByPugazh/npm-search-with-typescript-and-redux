import axios from "axios"
import { Dispatch } from "redux"
import { ActionTYpes } from "../action-types"
import { Action } from "../actions"

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTYpes.SEARCH_REPOSITORIES,
    })

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      )

      const names = data.objects.map((result: any) => {
        return result.package.name
      })
      dispatch({
        type: ActionTYpes.SEARCH_REPOSITORIES_SUCCCESS,
        payload: names,
      })
    } catch (error) {
      dispatch({
        type: ActionTYpes.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      })
    }
  }
}
