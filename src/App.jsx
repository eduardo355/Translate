
import FormGet from './Components/FormGet/FormGet'
import FormPost from './Components/FormPost/FormPost'
import Nav from './Components/Nav/Nav'
function App() {


  return (
    <main>
      <Nav />
      <div className='flex items-center justify-center gap-3 max-sm:flex-col'>
        <FormPost />
        <FormGet />
      </div>
    </main>

  )
}

export default App
