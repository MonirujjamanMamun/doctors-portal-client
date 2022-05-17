import { useEffect, useState } from "react";

const useTokon = user => {
    const [tokon, setTokon] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email }
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useTokon', data);
                    const accessToken = data.token
                    localStorage.setItem("accessToken", accessToken)
                    setTokon(accessToken)

                })
        }
    }, [user]);
    return [tokon];
}

export default useTokon;