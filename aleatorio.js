const nomes = [
    "Agricultor",
    "Produtor Rural",
    "Especialista em Tecnologia",
    "Engenheiro Agrônomo",
    "Gestor do Agronegócio",
    "Produtor do Futuro"
];

export function aleatorio(lista) {

    const posicao = Math.floor(
        Math.random() * lista.length
    );

    return lista[posicao];
}

export const nome = aleatorio(nomes);