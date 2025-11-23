<template>
   
    <div id="inicio" class="d-flex w-100 fundo  flex-column justify-content-start align-items-center">
        <img class="ornamento" src="@/assets/fundo4.jpeg"></img>
        
        <navbar class="w-100  conteudo"></navbar>
        <div class=" w-100 d-flex  alt justify-content-center align-items-center">
           
            <div class="w-100 principal  d-flex flex-column justify-content-center align-items-center">
                <h1 class="fontebanner2 conteudo ">Bem Vindo</h1>
                <h1 class="fontebanner conteudo ">A Casa da Paz Eterna</h1>
                <button @click="contato()" class="butao2 conteudo">Seja Parte</button>
                
            </div>
            
        </div>
      
        
    
    </div>
</template>
<script>
    import navbar from './navbar.vue';
    export default {
        name: "hero",
        components: {
             navbar,
        },
        methods: {
         
            async teste(){
                console.log("botão clickado")
                const resposta = await fetch("http://localhost:3000/api/rece", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: "teste@teste.com",
                        mensagem: "mensagem qualquer"
                    })
        
                });
              
            },
            contato(){
                this.$router.push('contato');
            }
            
        }
    }
</script>