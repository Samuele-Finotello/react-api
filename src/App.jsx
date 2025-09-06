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
            <div className="col-4 my-4" key={actress['id']}>
              <div className="card h-100">
                <img src={actress['image']} alt={actress['name']} />
                <div className="card-body">
                  <h3 className="card-title">{actress['name']}</h3>
                  <span className="fs-5">Birth year: <strong>{actress['birth_year']}</strong></span>
                  <p className="my-2 fs-5">Nationality: <strong>{actress['nationality']}</strong></p>
                  <p className="my-2 fs-6">{actress['biography']}</p>
                  <span className="fs-5">Awards: <strong>{actress['awards']}</strong></span>
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
