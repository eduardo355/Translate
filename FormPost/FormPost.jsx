import { useEffect, useState } from 'react';
import { TransLateRecibe } from '../EndPoint/TransLate';
import { useStoreText } from '../Stored/Stored';
import { Lenguage } from '../EndPoint/GetLeng';
import './FormPost.css'

const FormPost = () => {

    const { translateText } = useStoreText()
    const [text, setText] = useState('')
    const [Lenguages, setLenguage] = useState([])
    const [reload, setReload] = useState(null)
    const [selectedLanguage, setSelectedLanguage] = useState('')

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    useEffect(()=> {
        const GetLenguage = async() =>{
            const result = await Lenguage()
            setLenguage(result.data.languages)
        }
        GetLenguage()
        
    },[reload])

    const Traducir = async () => {
        const result = await TransLateRecibe(text, selectedLanguage)
        translateText(result)
    }

    return (
        <div className='ContainerPost'>
        <div className="cardLenguage">
        <span className="cardTitle">Selecciona el lenguaje a traducir</span>

        <select
            className='LanguageInput'
            name=""
            id=""
            onChange={(e) => setSelectedLanguage(e.target.value)}
            value={selectedLanguage}
        >
            <option value="">Seleccione un idioma</option>
            {Lenguages.map((language) => (
            <option key={language.language} value={language.language}>
                {language.language}
            </option>
            ))}
        </select>

        <span className="selectedLanguage">{selectedLanguage}</span>
        </div>
            <textarea 
            className="textAreaPost" 
            name="" 
            id="" 
            cols="40" 
            rows="6"
            value={text} 
            onChange={handleTextChange} 
            placeholder='Ingresa en lenguaje Español'
            >
            </textarea>
            <div className="ConatinerBtn">
                <button className='BtnFormPost' onClick={() => Traducir()}>Traducir</button>
                <button className='BtnFormPostDelete' onClick={() => setText('')} >Borrar</button>
            </div>
        </div>
    )
}

export default FormPost