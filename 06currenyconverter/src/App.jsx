import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const [result,setResult] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setResult(amount)
    setAmount(result)
  }

 const convert = () =>{
  setResult(amount * currencyInfo[to])
 }

 return (
  <div
      className="w-full h-screen flex  flex-row justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/19287989/pexels-photo-19287989/free-photo-of-broken-pier-on-ocean-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
  >
    {/* <div className='bg-gray-400 w-full h-screen bg-no-repeat bg-cover'
    style={{backgroundImage: `url("https://images.pexels.com/photos/4448561/pexels-photo-4448561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}
  
    ></div> */}

      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     convert()
                    //  console.log(amount)

                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          onAmountChange={(amount)=>setAmount(amount)}
                          onCurrencyChange={(currency) => setFrom(currency)}
                          selectCurrency={from}
                          currencyOptions={options}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={result}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setTo(currency)}
                          selectCurrency={to}
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
