import { useState } from 'react'

function App() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState(null)

  const calculateBmi = (e) => {
    e.preventDefault()
    if (height && weight) {
      const calculatedBmi = weight / (height / 100) ** 2
      setBmi(calculatedBmi.toFixed(2))
    }
  }

  const resetForm = () => {
    setHeight('')
    setWeight('')
    setBmi(null)
  }

  return (
    <div className="container">
      <h1 className="container__header">Kalkulator bmi</h1>
      <form className="form" onSubmit={calculateBmi} onReset={resetForm}>
        <fieldset className="form__fieldset">
          <legend className="form__legend">Twoje dane</legend>
          <p>
            <label>
              Twój wzrost*
              <input
                className="height"
                required
                type="number"
                min="1"
                step="any"
                autoFocus
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
          </p>
          <p>
            <label>
              Twoja waga*
              <input
                className="weight"
                required
                type="number"
                min="1"
                step="any"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>
          </p>
        </fieldset>
        <div className="form__actions">
          <button className="form__button" type="submit">policz</button>
          <button className="form__button" type="reset">wyczyść</button>
        </div>
      </form>
      <p className="container__paragraph">
        Twoje bmi wynosi: <br /><strong className="outcome">{bmi !== null ? bmi : ''}</strong>
      </p>
    </div>
  )
}

export default App
