<template>
   
    <div class="d-flex w-100 fundo  flex-column justify-content-start align-items-center">
        <img class="ornamento" src="@/assets/fundo4.jpeg"></img>
        
        <navbar class="w-100  conteudo"></navbar>
        <div class=" w-100 d-flex  alt justify-content-center align-items-center">
            <div class="conteudo setinha"><img class="conteudo " src="@/assets/seta-esquerda.svg"></img></div>
            <div class="w-100 principal  d-flex flex-column justify-content-center align-items-center">
                <h1 class="fontebanner2 conteudo ">Bem Vindo</h1>
                <h1 class="fontebanner conteudo ">A Casa da Eterna Paz</h1>
                <button class="butao2 conteudo">Seja Parte</button>
            </div>
             <div class="conteudo setinha"><img class="conteudo " src="@/assets/seta-direita.svg"></img></div>
        </div>
      
        
    
    </div>
</template>
<script>
    import navbar from './navbar.vue';
    export default {
        name: "hero",
        components: {
             navbar,
        }
    }
</script>