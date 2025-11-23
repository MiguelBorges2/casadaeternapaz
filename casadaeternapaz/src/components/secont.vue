<template>
 <div v-if="largura > 768 "class="d-flex w-100 fundo2  flex-column justify-content-start align-items-center">
        <img class="ornamento" src="@/assets/logo2.png"></img>
        
  
        <div class=" w-100 d-flex conteudo alt justify-content-center align-items-center">  
            <div class="w-100 principal2  d-flex flex-column justify-content-center align-items-center">
                <h1 class="fontebanner2 conteudo ">Olá! Agradecemos o interesse</h1>
                <div class="d-flex  flex-column principal2 align-items-center justify-content-start">
                         <p class="fontecaminhada6 ">Sempre estamos felizes em receber novos membros que compartilham de nossos ideais! Saiba que na Casa da Paz Eterna você encontrara uma segunda família, irmãos e irmãs que cuidaram de você não te julgaram independente de origem, etnia ou pecados. Mas primeiro, queremos saber de você! qual seu nome, sua historia, o que fez você se conectar com nossa comunidade? você tem alguma duvida? por favor informe seu email e nos deixe uma mensagem!</p>
                         <div class="w-100 principal2 d-flex flex-column">
                            <div class="w-100 d-flex redondo  justify-content-between">
                                <div class="d-flex w-50 gap2">
                                    <p  class="fontecaminhada7  ">Nome:</p>
                                    <input placeholder="Nome..." id="nome" class="input3" type="text"></input>
                                </div>
                                <div class="d-flex w-50 gap2">
                                    <p class="fontecaminhada7  ">idade:</p>
                                    <input placeholder="Idade..." id="idade" class="input3" type="text"></input>
                                </div>
                            </div>
                            <div class="w-100 d-flex redondo  justify-content-between">
                                <div class="d-flex w-50 gap2">
                                    <p class="fontecaminhada7  ">Email:</p>
                                    <input placeholder="Email..." id="email" class="input3" type="text"></input>
                                </div>
                                <div class="d-flex w-50 gap2">
                                <p class="fontecaminhada7  ">Genero:</p>
                                  <label class="fontecaminhada7">
                                    <input type="checkbox" value="opcao1" />
                                    Masculino
                                </label>

                                <label class="fontecaminhada7">
                                    <input type="checkbox" value="opcao2" />
                                    Feminino
                                </label>
                                <label class="fontecaminhada7">
                                    <input type="checkbox" value="opcao2" />
                                    Outro
                                </label>
                            </div>
                            </div>
                           
                            
                            
                            <div class="d-flex w-100 gap">
                                 <p class="fontecaminhada6 ">Mensagem:</p>
                                 <textarea placeholder="Conte sobre você!"id="mensagem" class="input2"></textarea>
                            </div>
                           <button @click="enviaemail()" class="butao4 d-flex justify-content-center ">Enviar informações</button>
                           <p id="surpresa" class="fontecaminhada6 text-dark"></p>
                         </div>
                    
                </div>
                
            </div>
        </div>
      
        
    
    </div>
    <div v-if="largura <= 768 "class="d-flex w-100 fundo2  flex-column justify-content-start align-items-center">
        <img class="ornamento" src="@/assets/logo2.png"></img>
        
  
        <div class=" w-100 d-flex conteudo alt justify-content-center align-items-center">  
            <div class="w-100 principal2  d-flex flex-column justify-content-center align-items-center">
                <h1 class="fontebanner2 conteudo ">Olá! Agradecemos o interesse</h1>
                <div class="d-flex  flex-column principal2 align-items-center justify-content-start">
                         <p class="fontecaminhada6 ">Sempre estamos felizes em receber novos membros que compartilham de nossos ideais! Saiba que na Casa da Paz Eterna você encontrara uma segunda família, irmãos e irmãs que cuidaram de você não te julgaram independente de origem, etnia ou pecados. Mas primeiro, queremos saber de você! qual seu nome, sua historia, o que fez você se conectar com nossa comunidade? você tem alguma duvida? por favor informe seu email e nos deixe uma mensagem!</p>
                         <div class="w-100 principal2 d-flex flex-column">
                            <div class="w-100 d-flex flex-column  justify-content-between">
                                <div class="d-flex w-100 gap2">
                                    <p  class="fontecaminhada7  ">Nome:</p>
                                    <input placeholder="Nome..." id="nome" class="input3 fontecaminhada6    " type="text"></input>
                                </div>
                                <div class="d-flex w-100 gap2">
                                    <p class="fontecaminhada7  ">idade:</p>
                                    <input  placeholder="Idade..." id="idade" class="input3 fontecaminhada6" type="text"></input>
                                </div>
                            </div>
                            <div class="w-100 d-flex flex-column  justify-content-between">
                                <div class="d-flex w-100 gap2">
                                    <p class="fontecaminhada7  ">Email:</p>
                                    <input placeholder="Email..." id="email" class="input3 fontecaminhada6" type="text"></input>
                                </div>
                                <div class="d-flex w-100  gap2">
                                <p class="fontecaminhada7  ">Genero:</p>
                                  <label class="fontecaminhada7">
                                    <input type="checkbox" value="opcao1" />
                                    Masculino
                                </label>

                                <label class="fontecaminhada7">
                                    <input type="checkbox" value="opcao2" />
                                    Feminino
                                </label>
                                <label class="fontecaminhada7">
                                    <input type="checkbox" value="opcao2" />
                                    Outro
                                </label>
                            </div>
                            </div>
                           
                            
                            
                            <div class="d-flex w-100 gap2 ">
                                 <p class="fontecaminhada7 ">Mensagem:</p>
                                 <textarea placeholder="Conte sobre você!"id="mensagem" class="input2 fontecaminhada6"></textarea>
                            </div>
                           
                            <button @click="enviaemail()" class="butao4 d-flex justify-content-center ">Enviar informações</button>
                            <p id="surpresa" class="fontecaminhada6 text-dark"> </p>
                         </div>
                    
                </div>
                
            </div>
        </div>
      
        
    
    </div>

</template>

<script>
    export default {
    
        name: "sec",
        methods: {
            
        },
        data(){
            return {
            showSecaJuste: true,
            largura: window.innerWidth,
        }
        },
        methods: {
            async enviaemail(){
                const idade = document.getElementById("idade").value;
                const email = document.getElementById("email").value;
                const mensagem = document.getElementById("mensagem").value;
                const nome = document.getElementById("nome").value; 
                 if(nome == "1317"){
                    console.log("entrou");
                    let a = document.getElementById("surpresa");
                    a.textContent = "É tudo MENTIRA, eles são doentes, nos prometeram paz, sossego, perdão... levaram ela, levaram ela de mim...";
                    return;
                }
                 if(nome == "1" && idade == "3" && email == "1" && mensagem == "7" ){
                    console.log("entrou");
                    let a = document.getElementById("surpresa");
                    a.textContent = "É tudo MENTIRA, eles são doentes, nos prometeram paz, sossego, perdão... levaram ela, levaram ela de mim...";
                    return;
                }
                if(!nome){
                    alert("Digite um nome");
                    return;
                            }
                if (!/^[0-9]+$/.test(idade)) {
                    alert("Idade deve conter apenas números!");
                    return;
                }

                // ⚠️ CAMPO EMAIL: validação simples
                if (!/\S+@\S+\.\S+/.test(email)) {
                    alert("Digite um email válido!");
                    return;
                }
              
                const chama = await fetch("http://localhost:3000/api/rece" ,{
                    method: "POST", 
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: email, mensagem: mensagem, idade: idade, nome: nome})    
                       
                    
                })
                const dados =  await chama.json();

                if(!chama.ok){
                    alert("Ixi... " + dados.erro);
                }
                alert("Informações Enviadas");  
                document.getElementById("idade").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mensagem").value = "";
                document.getElementById("nome").value = "";
            },
             atualizar(){
              this.largura = window.innerWidth;
            }
        },
         mounted() {
          window.addEventListener("resize", this.atualizar);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.atualizar);
  },
    }
</script>
<style>
pop-enter-active, .pop-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.pop-enter-from {
  opacity: 0;
  transform: scale(0.5); /* começa pequeno */
}
.pop-enter-to {
  opacity: 1;
  transform: scale(1);   /* cresce até o tamanho normal */
}
.pop-leave-from {
  opacity: 1;
  transform: scale(1);
}
.pop-leave-to {
  opacity: 0;
  transform: scale(0.5); /* encolhe ao sair */
}
</style>