import {useState} from 'react'

import './App.css'

function App() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handlePassword=(event)=>{
        setPassword(event.target.value)
    }
    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }
    return (
        <div>
            <h2>Log In To Your Personal Linked Notes</h2>
            <div className="form-wrapper">
                <form className={"form"}>
                    <div className={"form-item"}>
                        <label>Email</label>
                        <input type={"email"} name="email" value={email} onChange={(event)=>handleEmail(event)}></input>
                    </div>
                    <div className={"form-item"}>
                        <label>Password</label>
                        <input type={"password"} value={password} onChange={(event)=>handlePassword(event)}></input>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default App
