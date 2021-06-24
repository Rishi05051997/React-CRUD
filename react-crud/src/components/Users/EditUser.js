import React , {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

 const  EditUser = () => {
    //  const {user , setUser} = useState({
    //      name: " ",
    //      username:" ",
    //      email:" ",
    //      phoneNo:" ",
    //      website:" "
    //  })
    let history = useHistory();
    const params = useParams();
    const [name, setName] = useState('');
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [web, setWeb] = useState('');


    //  const onInputChange = (e) => {
    //      console.log(user.name)
    //      console.log(e.target.value);
    //      setUser();
    //  }
    useEffect(() => {
        loadUser();
    });
    const loadUser = async () => {
        console.log(params);
        const result = await axios.get(`http://localhost:4000/users/${params.id}`);
        console.log(result.data)
        setName(result.data.name);
        setUname(result.data.username);
        setEmail(result.data.email);
        setPhoneNo(result.data.phone);
        setWeb(result.data.website);
        // console.log(result.data);
    }

    const onFormSubmission = async(e) => {
        e.preventDefault();
        // console.log(e.target.value);
        const userObj = {
            name: name,
            username: uname,
            email: email,
            phone: phoneNo,
            website: web
        }
        console.log(userObj)
        await axios.put(`http://localhost:4000/users/${params.id}`, userObj);
        setName('');
        setUname('');
        setEmail('');
        setPhoneNo('');
        setWeb('');
        history.push("/")
    }
    
    return (
        <div className="container mt-5">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add a User</h2>
                <form onSubmit={onFormSubmission}>
                    <div className="form-group mb-4">
                        <input  
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your name"
                            name="name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group  mb-4">
                        <input  
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            value={uname}
                            onChange={(e)=>setUname(e.target.value)}
                        />
                    </div>

                    <div className="form-group  mb-4">
                        <input  
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Email"
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group  mb-4">
                        <input  
                            type="number"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Number"
                            name="phoneNo"
                            value={phoneNo}
                            onChange={(e)=>setPhoneNo(e.target.value)}
                        />
                    </div>

                    <div className="form-group  mb-4">
                        <input  
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="website"
                            value={web}
                            onChange={(e)=>setWeb(e.target.value)}
                        />
                    </div>

                    <div className="form-group  mb-4">
                        <button className="btn btn-warning w-100">Update User</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser;
