import "./productPage.css"

import { useContext } from "react"
import { ProductContext } from "../context/context"



export const ProductPage =() =>{
    const {pageData ,filterProductData, currentPage,setCurrentPage} = useContext(ProductContext);

    

    return(
        <div className="product-main-cont">
            <div>
                    <h1>Product Page</h1>
            </div>
            
            <div className="product-cont">
                
                

                {pageData.map((ele)=>(
                    <div className="card" key={ele.id}>
                        <img src={ele.image} alt="" />
                        <p>${ele.price}</p>
                        <h2>{ele.title}</h2>
                        <p>{ele.category}</p>
                        <button>Buy Now</button>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button disabled={currentPage===0} onClick={()=>setCurrentPage((prev)=>prev-1)}>Prev</button>
                <p>{ currentPage+1 }</p>
                <button  onClick={()=>setCurrentPage((prev)=>prev+1)}>Next</button>
            </div>
        </div>
    )
}