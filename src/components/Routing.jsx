import React from "react";
import {NavLink, Route, Routes, useParams, useSearchParams} from "react-router-dom";

const About = () => {
    
    const [params,setParams] = useSearchParams();
    console.log(params.get('cast'));
    console.log(params.get('name'));
    const OnClick = () => {
            setParams({cast: "karki", name: "Suman"});
    }
    return (
        <div>
            <h1>We are in About Page</h1>
            <button onClick={
                OnClick
            }>Change Params</button>
        </div>
    )
}

const DynamicURL = () => {
    const params = useParams();
    console.log(params.id);
    console.log(params.id2);
    return (
        <div>
            <h1>Dynamic URL</h1>
        </div>
    )
}

const LearnRout = () => {
    return (
        <div>
            <a href="/about" className="">Click Me</a>
            <h1>Learn Routing</h1>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact" style={{marginLeft: "20px"}}>Contact</NavLink>
            <Routes>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<div>Hello Contact</div>}></Route>
                <Route path="/about/:id/a/:id2" element={<DynamicURL/>}></Route>
            </Routes>
        </div>
    )
}

export default LearnRout;

// Some Notes

// It is optional to use NavLink instead of Link. The only difference is that NavLink applies the active class to the link when it is active.
// The Routes component is used to define the routes in the application. It is similar to the Switch component in react-router-dom v5.
// The NavLink generates the same anchor tag as the Link component. But when we click native anchor tag it will reload the page. But when we click NavLink it will not reload the page. It will just change the URL. It is because NavLink uses the Link component internally. So, it will not reload the page. It will just change the URL. 
