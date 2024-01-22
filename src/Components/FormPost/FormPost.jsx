import { useEffect, useState } from 'react';
import { TransLateRecibe } from '../EndPoint/TransLate';
import { useStoreText } from '../Stored/Stored';
import { Lenguage } from '../EndPoint/GetLeng';


const FormPost = () => {

    const { translateText } = useStoreText()
    const [text, setText] = useState('')
    const [Message, setMessage] = useState('')
    const [Lenguages, setLenguage] = useState([])
    const [selectedLanguage, setSelectedLanguage] = useState('')

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    useEffect(() => {
        const GetLenguage = async () => {
            try {
                const result = await Lenguage()
                setLenguage(result.data.languages)

                if (result.data.languages.length <= 0) {
                    const MessageError = 'Error: límite de caracteres excedido'
                    setMessage(MessageError);
                } else {
                    setMessage('')
                }
            } catch (error) {
                console.error('Error al obtener los idiomas:', error)
                const MessageError = 'Error: límite de caracteres excedido'
                setMessage(MessageError)
            }
        };
        GetLenguage()
    }, [Lenguages])

    const Traducir = async () => {
        const result = await TransLateRecibe(text, selectedLanguage)
        translateText(result)
    }

    return (
        <div className='flex items-center flex-col'>
        <div className="p-5 m-5 w-80 text-center">
        <span className="text-lg font-bold mb-3 text-blue-500">Selecciona el lenguaje a traducir</span>

        <select
            className=' w-full p-2 mb-3 border border-gray-300 rounded-md mt-1'
            name=""
            id=""
            onChange={(e) => setSelectedLanguage(e.target.value)}
            value={selectedLanguage}
        >
            <option value="" className=' '>Seleccione un idioma</option>
            {Lenguages.map((language) => (
            <option key={language.language} value={language.language}>
                {language.language}
            </option>
            ))}
        </select>

        <span className="text-md">{selectedLanguage}</span>
        </div>
            <textarea 
            className="mt-2 resize-none rounded-md p-2 border border-gray-300 text-xl focus:outline-none shadow-md max-sm:w-11/12" 
            name="" 
            id="" 
            cols="40" 
            rows="6"
            value={text} 
            onChange={handleTextChange} 
            placeholder='Ingresa en lenguaje Español'
            >
            </textarea>
            <div className="flex gap-3">
                <button 
                className=' mt-2 text-xl bg-transparent rounded-md border border-gray-300 p-2 transition-all font-semiboldbold hover:bg-blue-500 hover:text-white dark:bg-blue-500 dark:border-none' 
                onClick={() => Traducir()}
                >Traducir</button>
                <button 
                className=' mt-2 text-xl bg-transparent rounded-md border border-gray-300 p-2 transition-all font-semiboldbold hover:bg-red-500 hover:text-white dark:bg-red-500 dark:border-none ' 
                onClick={() => setText('')} >Borrar</button>
            </div>
            <span className=' text-red-500 text-xl font-bold mt-2'>{Message}</span>
        </div>
    )
}

export default FormPost