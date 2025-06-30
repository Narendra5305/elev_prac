import { useEffect, useState } from "react"
import "./navbar.css"

import { useContext } from "react"
import { ProductContext } from "../context/context"




export const Navbar =() =>{
    const {filterProduct ,setPerPage} = useContext(ProductContext);

    const [searchInput , setSearchInput] = useState("");


    
    useEffect(()=>{
        setTimeout(() => {
            filterProduct(searchInput)
        }, 1000);
    },[searchInput])

    
    

    const handleSearchInputChange =(e) =>{
        setSearchInput(e.target.value)
    }

    


    return(
        <div className="navbar">
            <div className="nav-cont">
                <div className="logo">
                    <h2>Products Website</h2>
                </div>
                <div className="search">
                    <input type="text" placeholder="search the product" value={searchInput}  onChange={handleSearchInputChange} />
                </div>

                
                <div className="nav-pagination">
                    <label >
                        Per Page
                        <select onChange={(e)=>setPerPage(Number(e.target.value))}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                    </label>
                </div>

            </div>
           
        </div>
    )
}