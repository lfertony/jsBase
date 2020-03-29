var usuarios = [  
    {    
        nome: "Diego",    
        habilidades: ["Javascript", "ReactJS", "Redux"]  
    },  
    {    
        nome: "Gabriel",    
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]  
    }
];

function show(usuarios){
    usuarios.forEach(usuarios=>{
        console.log(`O ${usuarios.nome} possui as habilidade: ${usuarios.habilidades}`)
    })
}

show(usuarios);