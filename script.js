// Adicionar mensagem ao DOM
let ball = {
    messages: [
        "Na minha opinião, sim.",
        "Me pergunte depois.",
        "Melhor não te falar agora.",
        "Não consigo prever agora.",
        "Concentra e pergunta depois.",
        "Não conte com isso.",
        "Isso é certo.",
        "É certeza que sim.",
        "Provavelmente.",
        "Minha resposta é não",
        "Minhas fontes dizem não.",
        "Expectativa não parece muito boa.",
        "Boa expectativa.",
        "Resposta nebulosa, tente novamente.",
        "Sinais apontam que sim.",
        "Dúvido bastante",
        "Sem dúvida.",
        "Sim.",
        "Sim - definitivamente",
        "Pode contar com isso."
    ],
    getRandomMessage: function () {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min); // O número mínimo e máximo são inclusos.  
        }

        return ball.messages[getRandomIntInclusive(0, 19)]
    }
}

const ball_main = document.querySelector(".ball")
ball_main.addEventListener("click", addRandomMessage)

function addRandomMessage(){
const ball_content = document.querySelector(".ball__content")
const ball_triangle = document.querySelector(".ball__triangle")
ball_content.innerHTML = ball.getRandomMessage()
ball_content.classList.add("ball__content--activated")
ball_main.classList.add("ball--activated")
ball_triangle.classList.add("ball__triangle--activated")

}
