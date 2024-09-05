// eslint-disable-next-line react/prop-types
export const SelectLeng = ({ lenguage, setLenguage }) => {
  return (
    <label htmlFor="selectLeng" className="flex flex-col place-items-center">
      <select
        name=""
        id=""
        className="w-40 p-1 border border-slate-500 rounded-md"
        onChange={(e) => setLenguage(e.target.value)}
      >
        {lenguage &&
          // eslint-disable-next-line react/prop-types
          lenguage.map((language) => (
            <option key={language.language} value={language.language}>
              {language.language}
            </option>
          ))}
      </select>
    </label>
  )
}
