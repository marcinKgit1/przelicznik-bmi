import { useState } from 'react'

function App() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState(null)
  const [showCalculator, setShowCalculator] = useState(false)

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

      {!showCalculator ? (
        <>
          <div className="info-panel">
            <h2 className="info-panel__title">Normy BMI</h2>
            <ul className="info-panel__list">
              <li className="info-panel__item">
                <span>Wygłodzenie</span>
                <span className="info-panel__range">&lt; 16.0</span>
              </li>
              <li className="info-panel__item">
                <span>Wychudzenie</span>
                <span className="info-panel__range">16.0 - 16.99</span>
              </li>
              <li className="info-panel__item">
                <span>Niedowaga</span>
                <span className="info-panel__range">17.0 - 18.49</span>
              </li>
              <li className="info-panel__item">
                <span>Waga prawidłowa</span>
                <span className="info-panel__range">18.5 - 24.99</span>
              </li>
              <li className="info-panel__item">
                <span>Nadwaga</span>
                <span className="info-panel__range">25.0 - 29.99</span>
              </li>
              <li className="info-panel__item">
                <span>Otyłość</span>
                <span className="info-panel__range">&gt; 30.0</span>
              </li>
            </ul>
          </div>
          <button 
            className="toggle-button" 
            onClick={() => setShowCalculator(true)}
          >
            Oblicz swoje BMI
          </button>
        </>
      ) : (
        <>
          <form className="form" onSubmit={calculateBmi} onReset={resetForm}>
            <fieldset className="form__fieldset">
              <legend className="form__legend">Twoje dane</legend>
              <p>
                <label>
                  Twój wzrost (cm)*
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
                  Twoja waga (kg)*
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
              <button 
                className="form__button" 
                type="button" 
                onClick={() => {
                  setShowCalculator(false);
                  resetForm();
                }}
              >
                powrót
              </button>
            </div>
          </form>
          {bmi !== null && (
            <p className="container__paragraph">
              Twoje bmi wynosi: <br /><strong className="outcome">{bmi}</strong>
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default App
