import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from './App'
import Index from './pages/Index'
import Show from './pages/Show'
import About from './pages/About'
import { allBooksLoader, oneBookLoader } from './Loaders/bookLoaders'
import { aboutLoader } from './Loaders/aboutLoader'
import { createAction, updateAction, deleteAction } from './actions'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>

            <Route path="" element={<Index/>} loader={allBooksLoader}/>

            <Route path=":id" element={<Show/>} loader={oneBookLoader} />

            <Route path="/about" element={<About/>} loader={aboutLoader}/>

            <Route path="create" action={createAction}/>

            <Route path="update/:id" action={updateAction}/>

            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    )
)

export default router