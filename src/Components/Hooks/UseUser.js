import { useEffect, useState } from "react";
const UseUser = () => {
    const [sellerUser, setSellerUser] = useState([])
    useEffect(() => {
        fetch('https://used-products-reasel-market-server.vercel.app/users/seller')
            .then(res => res.json())
            .then(data => {
                setSellerUser(data)
            })
    }, [])
    return sellerUser;
}

export default UseUser;