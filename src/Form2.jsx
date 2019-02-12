import React, { useState } from "react";
// useState is the react hook that allows you to access and manipulate state in components 
// import "./styles.css";

// notice functional component, no need to extend 
function Form2() {
    // no longer declaring single object 'state' and instead will split state into multiple declarations (one for each part of the form)
    const [firstName, setFirstName] = useState("");
    // firstName is the state variable, setFirstName which updates firstname every time it is called 
    const [lastName, setLastName] = useState("");
    // because using 'useState' hook, there is no 'setState' to modify value of the state variable, so each needs its own declaration. 
    const [email, setEmail] = useState("");
    // basically just declaring a state variable and a function to allow to modify the state variable later (useState)
    const [password, setPassword] = useState("");
    // setInsertHere can be named anything, but it is convention to use 'setBlankBlank' 
    return (
        <form>
            <input
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="First name"
                type="text"
                name="firstName"
                required
            />
            <input
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="Last name"
                type="text"
                name="lastName"
                required
            />
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email address"
                type="email"
                name="email"
                required
            />
            <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                name="password"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
}
export default Form2;