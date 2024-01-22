import { useStoreText } from '../Stored/Stored'

const FormGet = () => {
    const { transLate } = useStoreText((state) => ({
        transLate: state.transLate
    }))
    return (
        <div className='flex items-center justify-center mt-20 max-sm:mt-4'>
            <textarea className="resize-none rounded-md p-2 border-none bg-gray-300 focus:outline-none text-xl shadow-md max-sm:w-11/12 max-sm:mb-4" name="" value={transLate} id="" cols="40" rows="6" readOnly></textarea>
        </div>
    )
}

export default FormGet