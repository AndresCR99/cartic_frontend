import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../components/styles/App.css";
import Tecnico from "../pages/Tecnico";
import E404 from "../pages/errors/E404";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/Login";

const App = () => (

    <BrowserRouter>
        {window.location.pathname !== "/" && <Header/>}
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/tecnico" component={Tecnico} />
            <Route component={E404} />
        </Switch>
        <Footer/>
    </BrowserRouter>
)

export default App;