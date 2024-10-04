import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Posts from './components/Posts'
import User from './components/User'
import UploadPostForm from './components/UploadPostForm'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<UploadPostForm />, <Posts/>]} />
          <Route path='/:id' element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
