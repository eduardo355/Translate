import './FormGet.css'
import { useStoreText } from '../Stored/Stored'

const FormGet = () => {
    const { transLate } = useStoreText((state) => ({
        transLate: state.transLate
    }))
    return (
        <div className='ContainerGet'>
            <textarea className="textAreaGet" name="" value={transLate} id="" cols="40" rows="6" readOnly></textarea>
        </div>
    )
}

export default FormGet