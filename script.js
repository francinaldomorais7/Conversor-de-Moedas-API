let form = document.querySelector("#converterForme") //FORMULARIO
let input = document.querySelector("#amount") //input
let fromCurrency = document.querySelector("#fromCurrency") //select from
let convertedAmount = document.querySelector("#convertedAmount") // valor convertido
let toCurrency = document.querySelector("#toCurrency") //select to
let btnConverted = document.querySelector("#converterBtn") //botao submit
let loading = document.querySelector(".loading") // spiner de carregamento
let result = document.querySelector(".result") //resultado
let erros = document.querySelector(".erro") //mensagem de erro

const url_API = "https://api.exchangerate-api.com/v4/latest/"


result.style.display = "none";
erros.style.display = "none";

async function convertMoney() {
    loading.style.display = "block";
    btnConverted.style.display = "none";

    try {
        const response_API = await fetch(url_API + fromCurrency.value)
        const data = await response_API.json()

        const rate = data.rates[toCurrency.value]
        const convetedValue = (input.value * rate).toFixed(2)

        loading.style.display = "none";
        btnConverted.style.display = "block";

        convertedAmount.value = convetedValue
        result.innerHTML = `
            <div style = "font-size: 1.8rem;">
                ${input.value} ${fromCurrency.value} = ${convertedAmount.value} ${toCurrency.value}
            </div>
            <div style = "font-size: 0.9rem; margin-top: 15px">Taxa 1 ${fromCurrency.value} = ${rate} ${toCurrency.value}</div>
            `
        result.style.display = "block";
    }
    catch (error) {
        erros.style.display = "block";
        btnConverted.style.display = "block";
        erros.innerHTML =
        `
        <div>
            Não conseguimos buscar o resultado agora.<br>Nossos servidores estão demorando para responder.<br>Tente atualizar a página.
        </div>
        `
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault()
    convertMoney()
})
