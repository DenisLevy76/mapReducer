/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from 'react'
import './App.css'

function App() {
  const [file, setFile] = useState<File | null>(null)
  const [txt, setTxt] = useState<string>('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const text = await file?.text()

    text && setTxt(text)
  }

  const words = txt.trim().replace('\n', '').replace('\r', '').split(/\s+/)
  const numWords = words.length

  const totais = words.reduce((acumulador: any, elemento: string) => {
    acumulador[elemento] = (acumulador[elemento] || 0) + 1
    return acumulador
  }, {})

  console.log(totais)

  return (
    <>
      <main className='flex h-screen'>
        <form onSubmit={handleSubmit}>
          <input
            type='file'
            accept='.txt'
            onChange={(event) =>
              event.target.files && setFile(event.target.files[0])
            }
          />

          <button type='submit'>Contar</button>
        </form>
        {numWords} palavras.
      </main>
    </>
  )
}

export default App
