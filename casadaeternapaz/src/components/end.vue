<template>
    <nav v-if="largura > 768" class="d-flex align-items-center justify-content-center bg-dark w-100">
        <img @click="scrollto('inicio')" class="mini2 hov" src="@/assets/logo3.png"></img>
        <ul class="d-flex align-items-center justify-content-around navedit2"> 
            <li @click="scrollto('inicio')" class="hov ">Início</li>
            <li @click="scrollto('fundador')" class="hov">Criador</li>
            <li @click="scrollto('quem')" class="hov">Comunidade</li>
    
          
        </ul>
    </nav>
      <nav v-else class="d-flex marg align-items-center justify-content-center  bg-dark w-100">
        <img @click="scrollto('inicio')"  class="mini2 hov" src="@/assets/logo3.png"></img>
        <ul class="d-flex align-items-center justify-content-around navedit2"> 
            <li @click="scrollto('inicio')"  class="hov ">Início</li>
            <li @click="scrollto('fundador')" class="hov">Criador</li>
            <li @click="scrollto('quem')" class="hov">Comunidade</li>
        
           
        </ul>
    </nav>
</template>

<script>

export default {
    name: "end",
    components: {
        
    },
     data(){
            return {
            showSecaJuste: true,
            largura: window.innerWidth
        }
        },
    methods: {
         atualizar(){
              this.largura = window.innerWidth;
            },
              scrollto(fonte) {
            this.$router.push('/');
            const intervalo = setInterval(() => {
                const alvo = document.getElementById(fonte);
                console.log(alvo);
                if(alvo){
                    console.log("entrou");
                    alvo.scrollIntoView({ behavior: "smooth" });
                    clearInterval(intervalo);
                }
            }, 200)
            
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