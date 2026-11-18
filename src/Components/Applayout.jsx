import { Main } from "./Maincontent"
import { Sidebar } from "./Sidebar"

import "./Layout.css"

export const Applayout = () =>{
    return(
        <div className="container">
             <Sidebar />
             <Main />
        </div>
    )
}