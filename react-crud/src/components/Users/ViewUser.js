import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';



export default function ViewUser() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;

    const params = useParams();
    const { id } = params;
    // alert(id);

    useEffect(() => {
        loaduser();
    }, [])

    const loaduser = async () => {
        const result = await axios.get(`http://localhost:4000/users/${id}`)
        console.log(result.data)
        setUser(result.data)
    }
    return (
        <div className="container">
            <div className="py-4 ">
                <div className="card shadow">
                    <div className="card-body">
                        <h1 className="card-title " style={{ textAlign: "center", fontWeight: "bold" }}>Name: {name}</h1>
                        <p className="card-text" style={{textAlign: "center", fontWeight: "bold"}}>Username: {username}</p>
                        <p className="card-text" style={{textAlign: "center", fontWeight: "bold"}}>Email: {email}</p>
                        <p className="card-text" style={{textAlign: "center", fontWeight: "bold"}}>Phone No: {phone}</p>
                        <p className="card-text" style={{textAlign: "center", fontWeight: "bold"}}>Website: {website}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
