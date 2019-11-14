class Busqueda{

    static get ITEMS() {
        return{
        urlPosts:'https://jsonplaceholder.typicode.com/posts/',
        urlUsers:'https://jsonplaceholder.typicode.com/users/',
        inputNombre: document.querySelector('#nombreUsuario'),    
        inputBusqueda: document.querySelector('#numeroConsulta'),
        addTemplate: document.querySelector('#posts'),
        botonEnviar: document.querySelector('#enviarConsulta')
            };
    }

    async setData(url, postId){
        try {
        
        const req = await fetch(url + postId);
        const data = await req.json();
        data.user = Busqueda.ITEMS.inputNombre.value;
        this.getInfo(data);
        } catch (error) {
        console.log(`Error Al cargar el usuario 
        ${userId}`);    
        }
    }
// generador
    getInfo(data){
        try {
            this.templateDraw(data.user, data.title, data.body);
            console.log(data);
        } catch (error) {
            console.log(`Error Al cargar data 
        ${error}`);
        }
    }

// dibujar template nuevo
    templateDraw(userName, title, body){
        Busqueda.ITEMS
        .addTemplate
        .innerHTML += `<h4>${userName}</h4>
        <h5>${title}</h5>
        <p>${body}</p>`;
    }

    getIDUser(){
        const userId = Busqueda.ITEMS.inputBusqueda.value;
        this.setData(Busqueda.ITEMS.urlPosts, userId);
    }
    
    sendIdUser(){
        Busqueda.ITEMS.botonEnviar.addEventListener('click', this.getIDUser.bind(this));
    }
}


let nuevaBusqueda = new Busqueda();

nuevaBusqueda.sendIdUser();