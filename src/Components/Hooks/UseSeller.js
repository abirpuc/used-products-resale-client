import { isSeller } from "@firebase/util"
import { useEffect, useState } from "react"


const UseSeller = email =>{
    const [isSeller, setIsAdmin] = useState(false)
    const [isSellerLoading,setIsSellerLoading] = useState(true)

    useEffect(()=>{
        if(email){
            fetch(`https://used-products-reasel-market-server.vercel.app/user/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isSeller);
                setIsSellerLoading(false)
            })
        }
    },[email])
    return [isSeller,setIsSellerLoading]
}

export default UseSeller;