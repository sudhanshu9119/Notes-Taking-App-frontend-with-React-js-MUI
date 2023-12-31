import { Route, Routes } from "react-router-dom"
import { Home } from "../../notes/components/Home"
import { Add } from "../../notes/components/Add.jsx"
import { List } from "../../notes/components/List.jsx"

export const Main = ()=>{
    return (<>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/view-all" element={<List/>}/>
        </Routes>
    </>)
}