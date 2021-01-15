import React, { useState } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

const AppComponent: React.FC = () => {
  const [term, setTerm] = useState("")
  const { searchRepositories } = useActions()
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchRepositories(term)
  }
  return (
    <div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </div>
      </form>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {!loading && !error && data.map((d, index) => <p key={index}>{d}</p>)}
    </div>
  )
}

export default AppComponent
