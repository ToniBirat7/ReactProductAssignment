import React, {useState} from "react";
import axios from 'axios';

// URL of the API endpoint
const url = 'https://jsonplaceholder.typicode.com/posts/1';

function NewApp() {
    let [username,setUsername] = React.useState("");
    let [pswd,setPswd] = React.useState("");
    let [desc,setDesc] = React.useState("");
    let [country,setCountry] = React.useState("");
    const url = 'https://66e7cb40b17821a9d9d9f6b4.mockapi.io/user/User_Data/';

    return (
        <form onSubmit={
            async  (e) => {
                e.preventDefault();
                console.log("Form submitted");
                console.log("Username : ", username);
                console.log("Password : ", pswd);
                console.log("Description : ", desc);
                console.log("Country : ", country);
                let dat = {
                    'username': username,
                    'desc': desc,
                    'country': country,
                    'id': 1
                }
                // Sending a GET request
                   var resp =  await axios.post(url,dat)
                   console.log("Response : ", resp.data);
            }

        }>
            <div>
                <label htmlFor="username">
                    Username :
                </label>
                <input
                    type="text"
                    id="username"
                    name="text"
                    autoComplete="off"
                    value={username}
                    onChange={
                        (e) => {
                            setUsername(e.target.value);
                        }
                    }
                />
            </div>
            <div>
                <label htmlFor="pswd">
                    Password :
                </label>
                <input
                    type="password"
                    id="pswd"
                    name="text"
                    autoComplete="off"
                    value={pswd}
                    onChange={
                        (e) => {
                            setPswd(e.target.value);
                        }
                    }
                />
            </div>
            <div>
                <label htmlFor="description">
                    Description :
                </label>
                <input
                    type="textarea"
                    id="description"
                    name="text"
                    value={desc}
                    autoComplete="off"
                    onChange={
                        (e) => {
                            setDesc(e.target.value);
                        }
                    }
                />
            </div>
            <div>
                <label htmlFor="country">
                    
                </label>
                <select id="country" value={country} onChange={
                    (e) => {
                        setCountry(e.target.value);
                    }
                } autoComplete="true">
                    <option value="Nepal">Nepal</option>
                    <option value="India">India</option>
                    <option value="China">China</option>
                </select>
            </div>
            <div>
                <button>
                    Submit
                </button>
            </div>
        </form>
    );
}

export default NewApp;

// function FreshList(props) {
//     return <h1>{props.value.name}</h1>
// }
//
// function NewAppSecond(props)
// {
//     let [name,setName] = useState("")
//     let [t_f, setT_F] = useState(true)
//     console.log(props.names)
//     const lis = props.names.map((item,i) => {
//         return <FreshList key={i} value={item}/>
//     })
//     console.log(lis)
//     return (
//         <>
//             <p>Hello {name}</p>
//             <button onClick={() => {
//                 setName("Birat")
//             }}>Show
//             </button>
//             <br/>
//             <button onClick={() => {
//                 setName("")
//             }}>Hide</button>
//             <br />
//             <button onClick={t_f ? () => {
//                 setName("Birat")
//                 setT_F(false)
//                
//             } :
//                 () => {
//                 setName("")
//                     setT_F(true)
//                 }
//             }>Toggle</button>
//             <ul>
//                 {lis}
//             </ul>
//         </>
//     )
// }
//
// export default NewAppSecond;

// useState re-renders the component everytime the variable gets changed from it's initial state

// Rendering 
// If any state variable changes the component is rendered again from the beginning. 
// Variables defined using useState will only re-render the component when the initial value of useState variable is changed. 

// Problem with Rendering 
// There might be a question, if we are re-rending the component everytime we might have performance issue. But to solve it the concept of Virtual DOM is used. 


// Component Update (State/Props Change):

// When the state or props of a component changes, React re-renders the affected component, creating a new version of the Virtual DOM tree.
//     React then compares the new Virtual DOM tree with the previous version (this is called reconciliation).

// The comparison is done using an efficient algorithm (called the diffing algorithm) that checks for changes between the two Virtual DOM trees.
//     After identifying the changes, React selectively updates only the parts of the real DOM that have actually changed, minimizing performance costs.