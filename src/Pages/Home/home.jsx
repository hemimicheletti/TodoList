import api from "../../Service/api";

function Home (){

    api.get("/todos")
    .then(response => response.json())
    .then(json => console.log(json))

    return(
        <div>
            <header> Usuários</header>
            <main></main>

        </div>
    )
}

export default Home;