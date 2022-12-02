import { useEffect, useState } from "react";
const UseUser = () => {
    const [sellerUser, setSellerUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users/seller')
            .then(res => res.json())
            .then(data => {
                setSellerUser(data)
            })
    }, [])
    return sellerUser;
}

export default UseUser;