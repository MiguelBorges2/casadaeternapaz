<template>

<div class="w-100 d-flex justify-content-center  align-items-center flex-column">
        <div v-if="largura > 768" class="d-flex  fundo2 justify-content-around align-items-center secajuste">
           <img class="ornamento" src="@/assets/logo2.png"></img>
          <div class="d-flex larg flex-column conteudo">
                <h2 >Ultimas mensagem</h2>
                <h2 class="fontesub "> Nossa Caminhada pela Paz Eterna</h2>
                <p class="cita ">"O ser humano julga o próximo como se fosse seu lugar de fala, como se soubesse como é estar na pele do próximo... cada um carrega sua própria dor, sua batalha, sua <a @click="download(1)" class="fontecaminhada3 text-dark link">cruz</a> e um coração arrependido, atrás de uma mudança, sempre tem seu valor. Nosso senhor Jesus Cristo se cercou de doentes, ladrões, prostituas, ele não os julgou, ele estendeu sua mão, por que eles foram atrás de ajuda, a humanidade so ira evoluir quando começarmos a seguir os ensinamentos do mestre, até os que dão trabalho e não nos são convenientes." -El Pastor</p>
            </div>
            <div class="larg2 d-flex justify-content-around conteudo">
                <div class="d-flex flex-column janela justify-content-center align-items-center">
                    <img class="imagem" src="@/assets/cult.webp">
                    
                </div>
                <div class="d-flex  flex-column janela justify-content-center align-items-center">
                    <img class="imagem" src="@/assets/fundo2.webp">

                </div>
            </div>        
        </div>
         <div v-if="largura <= 768" class="d-flex  fundo2 flex-column justify-content-around align-items-center secajuste">
           <img class="ornamento" src="@/assets/logo2.png"></img>
          <div class="d-flex redu flex-column conteudo">
                <h5>Ultimas mensagem</h5>
                <h2 class="fontesub"> Nossa Caminhada pela Paz Eterna</h2>
                <p class="cita mt-3 ">"O ser humano julga o próximo como se fosse seu lugar de fala, como se soubesse como é estar na pele do próximo... cada um carrega sua própria dor, sua batalha,  sua <a @click="download(1)" class="fontecaminhada3 text-dark link">cruz</a> e um coração arrependido, atrás de uma mudança, sempre tem seu valor. Nosso senhor Jesus Cristo se cercou de doentes, ladrões, prostituas, ele não os julgou, ele estendeu sua mão, por que eles foram atrás de ajuda, a humanidade so ira evoluir quando começarmos a seguir os ensinamentos do mestre, até os que dão trabalho e não nos são convenientes." -El Pastor</p>
            </div>
            <div class="w-100 d-flex flex-column justify-content-center  align-items-center conteudo">
                <div class="d-flex flex-column janela justify-content-center align-items-center">
                    <img class="imagem" src="@/assets/cult.webp">
                    
                </div>
                <div class="d-flex  flex-column janela justify-content-center align-items-center">
                    <img class="imagem" src="@/assets/fundo2.webp">

                </div>
            </div>        
        </div>
    
    <div id="fundador" v-if="largura > 768" class="d-flex w-100 justify-content-between dark secajuste">
        <img class="fundador" src="@/assets/ernesto.png"></img>
        <div class="d-flex larg3 align-items-center justify-content-center">
          <div class="d-flex larg4 flex-column  ">
             <h2 class="fontesub "> Nosso Fundador</h2>
                <p class="fontecaminhada2 ">Elias “El Pastor” Orozco nasceu e cresceu na Nicarágua durante os anos mais duros do regime Somoza. Sua infância foi marcada pela seca, pela fome e pelo som constante das botas dos  sua <a @click="download(3)" class="fontecaminhada3 text-light link">soldados</a> marchando nas estradas poeirentas. Sua mãe, uma mulher devota, rezava o rosário todos os dias diante de um pequeno altar — mesmo quando os corpos dos vizinhos se empilhavam nas valas, Elias, nunca duvidou de que Deus ainda escutasse.</p>
                <p class="fontecaminhada2 ">Aos dezessete anos, durante um levante camponês nas cercanias de León, Elias foi ferido por estilhaços de uma granada. Ele caiu em meio ao campo devastado, entre os mortos, e ali ficou por horas — a fronte quente contra a terra fria. Diz ele que nesse momento a Muerte veio até ele, não como um monstro, mas como uma mãe. Ela o tocou no rosto e sussurrou que o mundo não precisava temer o fim, mas abraçá-lo, pois na morte há o descanso que a vida nega. Mas ela ainda não iria leva-lo, não era sua hora, ele devia serguir, com um propósito muito especial, ser seu profeta, espalhar sua causa, a morte iguala a todos.</p>
                <p class="fontecaminhada2">Se mudou para o México em 1998, desde então, tem pregado sua palavra, atraindo seguidores que acreditam no perdão, igualdade, bondade, salvação, e não temem a morte.</p>
             <p class="fontecaminhada2 ">"Não olhamos pra quem foi, olhamos para o que quer ser" -El Pastor</p>
          </div>
           
        </div>
      </div>
       <div v-if="largura <= 768" class="d-flex w-100 flex-column justify-content-center align-items-center dark secajuste">
        
        <div id="fundador" class="d-flex redu align-items-center justify-content-center">
          <div class="d-flex w-100 flex-column  align-items-center justify-content-center">
             <h2 class="fontesub mt-5"> Nosso Fundador</h2>
                <p class="fontecaminhada2 ">Elias “El Pastor” Orozco cresceu na Nicarágua dominada pelo regime Somoza, cercado por fome, seca e <a @click="download(3)" class="fontecaminhada3 text-light link">tropas</a> armadas que marcavam seu cotidiano. Aos dezessete anos, ferido por estilhaços durante um levante, ele passou horas caído entre mortos e acredita ter recebido ali a visita da Muerte — não como terror, mas como consolo. Ela lhe disse que o fim não deve ser temido e o poupou, dando-lhe a missão de ser seu profeta e espalhar a ideia de que a morte iguala e liberta. Desde que se mudou para o México, em 1998, Elias dedica sua vida a pregar essa doutrina, reunindo seguidores que buscam perdão, bondade e a serenidade diante do inevitável.</p>
             <p class="fontecaminhada2 mt-2 ">"Não olhamos pra quem foi, olhamos para o que quer ser" -El Pastor</p>
          </div>

           
        </div>
        <img class="fundador borda" src="@/assets/ernesto.png"></img>
      </div>
    
     <div id="quem" v-if="largura > 768" class="d-flex  fundo2 justify-content-end align-items-center ">
        <img class="ornamento" src="@/assets/logo2.png"></img>
            <div class="d-flex conteudo w-50 push margen flex-column">
                <h2 class="fontesub"> Quem Somos</h2>
                <p class="fontecaminhada3 ">Uma <a @click="download(12)" class="fontecaminhada3 text-dark link">comunidade</a> fundada no amor, igualdade, perdão e compreensão. Localizada no interior de El Silencio, o isolamento do mundo moderno é essencial para se tornar mais próximo a Deus, e a Casa da Eterna Paz se esforça para se manter auto-sustentável. Estamos sempre abertos a visitas e novos membros que mostrem interesse genuino.</p>
                <div class="d-flex w-100 justify-content-end">
                    <button class="butao3 conteudo">Entre em contato</button>
                </div>
               
            </div>
            
           
        </div>
       <div  id="quem" v-if="largura <= 768" class="d-flex  fundo2 justify-content-end align-items-center ">
        <img class="ornamento" src="@/assets/logo2.png"></img>
            <div class="d-flex conteudo align-items-center redu push margen flex-column">
                <h2 class="fontesub"> Quem Somos</h2>
                <p class="fontecaminhada3 ">Uma <a @click="download(12)" class="fontecaminhada3 text-dark link">comunidade</a> fundada no amor, igualdade, perdão e compreensão. Localizada no interior de El Silencio, o isolamento do mundo moderno é essencial para se tornar mais próximo a Deus, e a Casa da Eterna Paz se esforça para se manter auto-sustentável. Estamos sempre abertos a visitas e novos membros que mostrem interesse genuino.</p>
                <div class="d-flex w-100 justify-content-end">
                    <button @click="contato()" class="butao3 conteudo">Entre em contato</button>
                </div>
               
            </div>
            
           
        </div>
     <div v-if="largura > 768" class="d-flex w-100 fundo3 justify-content-between ">
        <img class="ornamento" src="@/assets/uniao2.jpg"></img>
          <div class="d-flex justify-content-center align-items-center larg4 flex-column conteudo ">
            
            <h1 class="top ">Nossa Comunidade</h1>
            <div class="d-flex w-100 justify-content-around">
              <div class="d-flex flex-column align-items-center ig justify-content-center">
                  <h2>Bem vindo a El Silencio!</h2>
                  <p class="fontecaminhada3 milk ">Escondido entre as serras do norte do México, El Silencio é um pequeno vilarejo onde o tempo parece descansar.
Aqui, a poeira e o sol moldam o ritmo dos dias, e as noites são cobertas por um silêncio sagrado — o mesmo silêncio que protege e acolhe todos que buscam paz.

Fundado por famílias humildes há muitas gerações, o vilarejo permaneceu fiel à sua simplicidade.
As casas de adobe, o som distante dos sinos, <a  @click="download(7)" class="fontecaminhada3 link text-light">as crianças brincando</a> e o vento que passa entre os morros fazem de El Silencio um refúgio espiritual, longe do ruído e da pressa do mundo moderno.

Desde a chegada de El Pastor, nosso guia e mensageiro da Santa Madre Muerte, El Silencio floresceu em fé e propósito.
Peregrinos de muitas terras vêm até aqui em busca de reconciliação, consolo e renascimento.
Dizem que quem dorme sob o céu de El Silencio desperta com a alma mais leve — porque aqui, a Morte não é o fim, é o descanso.</p>
              </div>
          

                <div class="d-flex w-50 top flex-column justify-content-center align-items-center">
                  <img class="vilage" src="@/assets/village2.jpg">
                  <img class="vilage" src="@/assets/map2.png">
                </div>
            </div>
              
          </div>
          
        
    </div>
    <div v-if="largura <= 768" class="d-flex w-100 fundo3 flex-column  justify-content-between ">
        <img class="ornamento" src="@/assets/uniao2.jpg"></img>
          <div class="d-flex justify-content-center align-items-center w-100 flex-column conteudo ">
                <div class="d-flex flex-column redu justify-content-center align-items-center">
                      <h1 class="top fontezinha">Nossa Comunidade</h1>
                       <h2 class="mt-2 gara">Bem vindo a El Silencio!</h2>
                 <p class="fontecaminhada3 milk mt-2">
Escondido nas serras do norte do México, El Silencio é um vilarejo simples e sereno, onde a poeira, o sol e o silêncio moldam o ritmo da vida. Suas casas de adobe, o som distante dos sinos, <a @click="download(7)" class="fontecaminhada3 link text-light">as crianças brincando</a> e o vento entre os morros fazem do lugar um refúgio espiritual, longe da pressa do mundo moderno.

Desde a chegada de El Pastor, mensageiro da Santa Madre Muerte, o vilarejo floresceu em fé e propósito. Peregrinos de várias terras buscam ali consolo e renovação, pois dizem que quem dorme sob o céu de El Silencio desperta com a alma mais leve — onde a Morte não é o fim, mas descanso.
</p>

                  
                </div>

                <div class="d-flex w-100 flex-column justify-content-center align-items-center">
                  <img class="vilage" src="@/assets/village2.jpg">
                  <img class="vilage" src="@/assets/map2.png">
                </div>
           
              
          </div>
          
        
    </div>
    <div v-if="largura > 768 " class="d-flex  fundo2 justify-content-around align-items-center ">
        <img class="ornamento" src="@/assets/logo2.png"></img>
            <img class="muerte" src="@/assets/lamu2.png"></img>
            <div class="d-flex conteudo w-50 push2 margen flex-column">
                <h2 class="fontesub"> Santa Muerte</h2>
                <p class="fontecaminhada3 ">Santa Muerte é a guardiã silenciosa que acolhe todos sem distinção, a Mãe Imparcial que não julga, não abandona e não exige perfeição para oferecer seu abrigo. Enquanto outras divindades falam ao distante, ela caminha ao lado dos vivos e dos mortos, estendendo seu manto sobre aqueles que buscam paz em meio ao caos. Para seus devotos, é símbolo de igualdade, compaixão e justiça absoluta — a presença que traz conforto no último suspiro e força nos dias mais duros. Em El Silencio, ela não é temida: é honrada como aquela que vela pelos esquecidos, protege os humildes e guia todas as almas rumo ao descanso que a vida tantas vezes nega. <a class="text-light" href="https://casend.onrender.com/remi"> ???  </a></p>
               
               
            </div>
            
           
      </div>
    <div v-if="largura <= 768 " class="d-flex  fundo2 redu justify-content-around flex-column align-items-center ">
        <img class="ornamento" src="@/assets/logo2.png"></img>
            
            <div class="d-flex conteudo  push2 margen align-items-center flex-column">
                <h1 class="fontezinha"> Santa Muerte</h1>
                <p class="fontecaminhada3 ">Santa Muerte é a guardiã silenciosa que acolhe todos sem distinção, a Mãe Imparcial que não julga, não abandona e não exige perfeição para oferecer seu abrigo. Enquanto outras divindades falam ao distante, ela caminha ao lado dos vivos e dos mortos, estendendo seu manto sobre aqueles que buscam paz em meio ao caos. Para seus devotos, é símbolo de igualdade, compaixão e justiça absoluta — a presença que traz conforto no último suspiro e força nos dias mais duros. Em El Silencio, ela não é temida: é honrada como aquela que vela pelos esquecidos, protege os humildes e guia todas as almas rumo ao descanso que a vida tantas vezes nega.   <a href="https://casend.onrender.com/remi"> ???  </a></p>
               
               
            </div>
            <img class="muerte" src="@/assets/lamu2.png"></img>
            
          
      </div>
</div>
</template>

<script>
    export default {
    
        name: "sec",
        data(){
            return {
            showSecaJuste: true,
            largura: window.innerWidth
        }
        },
        methods: {
                contato(){
                this.$router.push('contato');
            },
               async download(numero) {
               try {
                        const resposta = await fetch("https://casend.onrender.com/api/download", {    
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                                body: JSON.stringify({
                                numero: numero,
                                
                            })
                        });
                        if (!resposta.ok) {
                            throw new Error("Erro ao baixar arquivo");
                        }
                        const blob = await resposta.blob();
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        if(numero == 1){
                          a.download = "1.jpg";
                        }
                        else if(numero == 3){
                          a.download = "3.webp";
                        }
                        else if(numero == 12){
                          a.download = "1.jfif";
                        }
                        else if(numero == 7){
                          a.download = "7.jpg";
                        }
                        a.click();
                        window.URL.revokeObjectURL(url);
               } catch (err) {
                    console.log("error:", err);
               }
              
            },    
            atualizar(){
              this.largura = window.innerWidth;
            },
            
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