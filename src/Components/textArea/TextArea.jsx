// eslint-disable-next-line react/prop-types
export const FormText = ({ value, setValue }) => {
  return (
    <textarea
      placeholder={setValue ? undefined : 'Traducción'}
      className={`rounded-2xl p-3 text-2xl focus:outline-none resize-none ${
        setValue ? 'border-slate-500 border' : 'bg-slate-50'
      } `}
      rows={10}
      cols={55}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={setValue ? false : true}
    ></textarea>
  )
}
