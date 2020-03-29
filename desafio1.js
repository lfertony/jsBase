var endereco = {  
    rua: "Rua dos pinheiros",  
    numero: 1293,  
    bairro: "Centro",  
    cidade: "São Paulo", 
     uf: "SP"
    }

    function desafio1(endereco){
        console.log('O usuario mora em ' + endereco.cidade + ' / ' + endereco.uf + ' no bairro ' + endereco.bairro + `, na rua "${endereco.rua}" com o numero ${endereco.numero}. `);
    }

    desafio1(endereco);