app.component('nav-blog',{
    template:
    /*html*/

    `  <nav class="nav">
        <img class="nav_foto" :src="logo_Pagina" alt="Imagen de globo">
        <form class="nav_for">
        <input class="nav_input" type="text" id="inputUsuario" placeholder="Ingresar usuario..."> 
        </form>
        </nav>
    `,
    data(){
        return{
            logo_Pagina:"./Imagenes/imagen.png",
        }
    }
})