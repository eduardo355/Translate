import { useEffect, useState } from 'react'
import { Nav } from './Components/Nav/Nav'
import { fecthLenguage } from './Components/EndPoint/GetLeng'
import { FormText } from './Components/textArea/TextArea'
import { SelectLeng } from './Components/selectLeng/SelectLeng'
import { translateRecibe } from './Components/EndPoint/TransLate'

function App() {
  const [lenguage, setLenguage] = useState([])
  const [translate, setTranslate] = useState('')
  const [lenguageSelected, setLenguageSelected] = useState('')
  const [value, setValue] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fecthLeng = async () => {
      const selectLeng = await fecthLenguage()
      if (selectLeng && selectLeng.data && selectLeng.data.languages) {
        setLenguage(selectLeng.data.languages)
      } else {
        setMessage('No se pudieron cargar los lenguajes.')
      }
    }
    fecthLeng()
  }, [])

  const fetchTranslate = async () => {
    const translateFecth = await translateRecibe(value, lenguageSelected)
    setTranslate(translateFecth)
    if (value === '') setTranslate('')
  }

  return (
    <main className="w-screen h-screen grid grid-cols-2 grid-rows-10 max-xl:flex max-xl:flex-col max-xl:space-y-1 dark:bg-slate-950">
      <div className="col-span-2">
        <Nav />
      </div>
      <div className="col-span-2 place-content-center">
        <SelectLeng lenguage={lenguage} setLenguage={setLenguageSelected} />
      </div>
      <div className="row-span-3 flex justify-center ">
        <form
          className="flex max-xl:w-full max-xl:p-4"
          onChange={fetchTranslate}
        >
          <FormText value={value} setValue={setValue} />
        </form>
      </div>
      <div className="row-span-3 flex justify-center max-xl:p-4">
        <FormText value={translate} />
      </div>
      <div>
        <p className="text-red-500 text-center text-xl">{message}</p>
      </div>
    </main>
  )
}

export default App
