import { createContext, useEffect, useState } from "react";
import axios from "axios"


export const ProductContext = createContext();



export const ProductContextProvider = ({children}) =>{
    const [products , setProducts] = useState([]);
    const [filterProductData , setFilterProductData] = useState([]);
    const [pageData , setPageData] = useState([])
    const [perPage , setPerPage] = useState(5)

    console.log(perPage)

    const [currentPage , setCurrentPage] = useState(0);

    useEffect(()=>{
        try {
            const fetchData =async()=>{
                const response  = await axios.get("https://fakestoreapi.com/products")

                setProducts([...response.data])
                setFilterProductData([...response.data])        
            }
            fetchData()

        } catch (error) {
            console.log("there has been an error on fetching api" , error)
        }
    },[])


    const filterProduct  =(word)=>{
        const SearchData =async()=>{
             const response  = await axios.get("https://fakestoreapi.com/products")
            const filterData = response.data.filter((ele)=>ele.title.toLowerCase().includes(word.toLowerCase()))
            setFilterProductData([...filterData])
        }
        SearchData()
       
    }



    useEffect(()=>{
        const data = filterProductData.slice(currentPage*perPage , (currentPage*perPage)+perPage)
        setPageData([...data])

    }, [ filterProductData ,perPage])


    return(
        <ProductContext.Provider value={{pageData ,setPerPage ,filterProductData , filterProduct , currentPage ,setCurrentPage}}>
            {children}
        </ProductContext.Provider>
    )
}