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
          <button className="btn btn-primary" onClick={carica}>Carica</button>
        </div>
        {actresses.map(actress => {
          return (
            <div className="col-4" key={actress['id']}>
              <div className="d-flex">
                <img src={actress['image']} alt={actress['name']} />
                <div>
                  <h4>{actress['name']}</h4>
                  <p>{actress['biography']}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
