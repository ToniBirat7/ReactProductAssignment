import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NewApp from './NewApp.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import LearnRout from "./components/Routing.jsx";
import ProductPage from "./components/ProductForm.jsx";
import LearnUseRef from "./components/LearnUseRef.jsx";
import MyLinks from "./components/MyLinks.jsx";

// eslint-disable-next-line
const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
];

const nData = [
    "Birat",
    "Gautam",
    "Suman"
]

const nDataObj = nData.map((item,i) => {
    return {id: i,name: item}
})

ReactDOM.createRoot(document.getElementById('form')).render(
  <React.StrictMode>
    {/*<NewApp names={nDataObj}/>*/}
    {/*    <BrowserRouter>*/}
    {/*        /!*<NewAppSecond names={nData}/>*!/*/}
    {/*        <LearnRout/>*/}
    {/*    </BrowserRouter>*/}
    {/*<ProductPage/>*/}
    {/*  <NewApp/>*/}
    {/*  <LearnUseRef/>*/}
      <BrowserRouter>
          <MyLinks/>
      </BrowserRouter>
      
  </React.StrictMode>,
)