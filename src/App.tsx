import React from "react"
import { Provider } from "react-redux"
import { store } from "./state"
import RepositoriesList from "./components/RepositoriesList"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h4 className="my-3">NPM Search for a package</h4>
        <RepositoriesList />
      </div>
    </Provider>
  )
}
export default App
