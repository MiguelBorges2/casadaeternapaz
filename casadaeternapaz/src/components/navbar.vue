<template>
    <nav v-if="largura > 768"class="d-flex w-100 justify-content-center align-items-center size">
        <img class="mini hov" src="@/assets/logo3.png"></img>
        <ul class="d-flex   justify-content-around navedit"> 
            <li @click="scrollto('inicio')"class="hov ">Início</li>
            <li @click="scrollto('fundador')" class="hov">Criador</li>
            <li @click="scrollto('quem')" class="hov">Comunidade</li>
            <li @click="contato()"class="hov">Entre em Contato</li>
        </ul>
    </nav>
    <nav v-else class="d-flex w-100 justify-content-center align-items-center size">
         <img class="mini hov" src="@/assets/logo3.png"></img>
        <ul class="d-flex   justify-content-around navedit"> 
            <li @click="scrollto('inicio')"class="hov ">Início</li>
            <li @click="scrollto('fundador')" class="hov">Criador</li>
            <li @click="scrollto('quem')"class="hov">Comunidade</li>
            <li @click="contato()"class="hov">Entre em Contato</li>
        </ul>
    </nav>
</template>

<script>

export default {
    name: "navbar",
 
       data(){
            return {
            showSecaJuste: true,
            largura: window.innerWidth
        }
    },
    methods: {
        scrollto(fonte) {
            const alvo = document.getElementById(fonte);
            console.log(alvo);
            if(alvo){
                console.log("entrou");
                alvo.scrollIntoView({ behavior: "smooth" });
            }
        },
        contato() {
            this.$router.push("contato");
        },
    atualizar(){
              this.largura = window.innerWidth;
            },
            
        },
        

 mounted() {
          window.addEventListener("resize", this.atualizar)
 },
  beforeUnmount() {
    window.removeEventListener("resize", this.atualizar);
  },    
  

}

</script>