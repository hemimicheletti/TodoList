import {Switch, Route} from "react-router-dom";
import Home from "../Pages/Home/home";
import User from "../Pages/User/user";


function Rotas (){
    return(
        <>
            <Switch>
                <Route exact path={"/"}> <Home/> </Route>
                <Route exact path={"/user"}> <User/> </Route>
            </Switch>
        </>
    )
}

export default Rotas;