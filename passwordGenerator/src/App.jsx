import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  //1 which are change
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, serCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // ref hook
  const passwordRef = useRef(null)

  // copy fun
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password)
  }, [password])

  // 2 password generator har condition me bar bar call hoga -> useCallback ->re-render-> memorize the function
  // if their is any change is dependecies call function again
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*"
    //random 
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)

    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword])
// when page load or change in dependency array -> re-render useEffect 
  useEffect(() => { passwordGenerator() }, [length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              value={length}
              className='cursor-pointer'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id='charecterInput'

              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charecterInput">Charecters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
