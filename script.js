import { aleatorio, nome } from "./aleatorio.js";
import { perguntas } from "./perguntas.js";

const caixaPerguntas =
    document.querySelector(".caixa-perguntas");

const caixaAlternativas =
    document.querySelector(".caixa-alternativas");

const caixaResultado =
    document.querySelector(".caixa-resultado");

const textoResultado =
    document.querySelector(".texto-resultado");

const botaoJogarNovamente =
    document.querySelector(".novamente-btn");

const botaoIniciar =
    document.querySelector(".iniciar-btn");

const telaInicial =
    document.querySelector(".tela-inicial");


let atual = 0;

let perguntaAtual;

let historiaFinal = "";


/* BOTÃO INICIAR */

botaoIniciar.addEventListener(
    "click",
    iniciaJogo
);


/* INICIAR JOGO */

function iniciaJogo() {

    atual = 0;

    historiaFinal = "";

    telaInicial.style.display = "none";

    caixaPerguntas.classList.add("mostrar");

    caixaAlternativas.classList.add("mostrar");

    caixaResultado.classList.remove("mostrar");

    mostraPergunta();
}


/* MOSTRAR PERGUNTA */

function mostraPergunta() {

    if (atual >= perguntas.length) {

        mostraResultado();

        return;
    }

    perguntaAtual =
        perguntas[atual];

    caixaPerguntas.textContent =
        perguntaAtual.enunciado;

    caixaAlternativas.innerHTML = "";

    mostraAlternativas();
}


/* MOSTRAR ALTERNATIVAS */

function mostraAlternativas() {

    for (
        const alternativa
        of perguntaAtual.alternativas
    ) {

        const botaoAlternativas =
            document.createElement("button");

        botaoAlternativas.type =
            "button";

        botaoAlternativas.textContent =
            alternativa.texto;

        botaoAlternativas.addEventListener(
            "click",
            () =>
                respostaSelecionada(
                    alternativa
                )
        );

        caixaAlternativas.appendChild(
            botaoAlternativas
        );
    }
}


/* RESPOSTA SELECIONADA */

function respostaSelecionada(
    opcaoSelecionada
) {

    if (
        Array.isArray(
            opcaoSelecionada.afirmacao
        ) &&
        opcaoSelecionada.afirmacao.length > 0
    ) {

        const afirmacao =
            aleatorio(
                opcaoSelecionada.afirmacao
            );

        historiaFinal +=
            afirmacao + " ";
    }


    if (
        opcaoSelecionada.proxima
        !== undefined
    ) {

        atual =
            opcaoSelecionada.proxima;

        mostraPergunta();

    } else {

        mostraResultado();
    }
}


/* MOSTRAR RESULTADO */

function mostraResultado() {

    caixaPerguntas.textContent =
        `Perfil: ${nome}`;

    textoResultado.textContent =
        historiaFinal.trim();

    caixaAlternativas.innerHTML = "";

    caixaPerguntas.classList.remove(
        "mostrar"
    );

    caixaAlternativas.classList.remove(
        "mostrar"
    );

    caixaResultado.classList.add(
        "mostrar"
    );
}


/* JOGAR NOVAMENTE */

botaoJogarNovamente.addEventListener(
    "click",
    jogaNovamente
);


function jogaNovamente() {

    atual = 0;

    historiaFinal = "";

    caixaResultado.classList.remove(
        "mostrar"
    );

    caixaPerguntas.classList.add(
        "mostrar"
    );

    caixaAlternativas.classList.add(
        "mostrar"
    );

    mostraPergunta();
}