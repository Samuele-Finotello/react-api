import { useState, useEffect } from "react"
import axios from "axios"

const App = () => {

  const [actresses, setActresses] = useState([])

  const carica = () => {
    axios.get('https://lanciweb.github.io/demo/api/actresses').then((resp) => {
      console.log(resp.data)
      setActresses(resp.data)
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-5">
            <div className="card-body">
              <div className="card-title"></div>
              <div className="card-content"></div>
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => { carica() }}>Carica</button>
        </div>
      </div>
    </div>
  )
}

export default App
