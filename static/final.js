const getBac = (imgSource, altImg, forma, gram, fermentacao, catalase, glicose, motilidade, indol, h2s) => {
    const bacTemplate =
    `
            <b>Escherichia coli</b>
            <div class="bacImg">
                <img src="${imgSource}" alt="${altImg}">
            </div>
            <div class="bacInfo">
                <p>Forma: ${forma}</p>
                <p>Gram: ${gram}</p>
                <p>Fermentação de carboidratos: ${fermentacao}</p>
                <p>Catalase: ${catalase}</p>
                <p>Oxidação e fermentação da glicose: ${glicose}</p>
                <p>Motilidade: ${motilidade}</p>
                <p>Indol: ${indol}</p>
                <p>Produção de sulfeto de hidrogênio (H2S): ${h2s}</p>
            </div>

    `;
    return bacTemplate;
}

const bacteria = document.querySelector(".bacteria");

bacteria.innerHTML = getBac("escherichia_coli.jpg", "Imagem Escherichia coli", "Bacilo", "Negativo", "Produção de ácido e gás", "Positiva", "Oxida e fermenta", "Positiva", "Positivo", "Negativo")