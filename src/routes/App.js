import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../components/styles/App.css";
import Tecnico from "../pages/Tecnico";
import E404 from "../pages/errors/E404";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Servicio from "../pages/Servicio";
import RegistroVehiculo from "../pages/RegistroVehiculo";


const App = () => (

    <BrowserRouter>
        {window.location.pathname !== "/" && <Header/>}
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/tecnico" component={Tecnico} />
            <Route exact path="/servicio" component={Servicio} />
            <Route exact path="/Registro" component={Registro} />
            <Route exact path="/RegistroVehiculo" component={RegistroVehiculo} />
            <Route component={E404} />
        </Switch>
        <Footer/>
    </BrowserRouter>
)

export default App;