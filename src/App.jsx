
import './App.css'
import FormPost from './Components/FormPost/FormPost'
import FormGet from './Components/FormGet/FormGet'
import Nav from './Components/Nav/Nav'
function App() {


  return (
    <main>
      <Nav />
      <div className='ContainerCard'>
        <FormPost />
        <FormGet />
      </div>
    </main>

  )
}

export default App
