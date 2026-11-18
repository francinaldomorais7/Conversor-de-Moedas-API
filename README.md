# 💱 Conversor de Moedas

![HTML5](https://shields.io)
![CSS3](https://shields.io)
![JavaScript](https://shields.io)
![API](https://shields.io)

Um aplicativo web moderno e responsivo para conversão de moedas em tempo real, utilizando taxas de câmbio atualizadas via API externa.

---

## ✨ Funcionalidades

- 🌍 **Suporte a +30 Moedas:** Conversão entre Dólar (USD), Real (BRL), Euro (EUR), Libra (GBP), Iene (JPY), Bitcoin (BTC) e diversas outras moedas internacionais.
- ⚡ **Cotação em Tempo Real:** Integração direta com a *ExchangeRate-API* para buscar as taxas mais recentes.
- 📊 **Exibição Detalhada:** Mostra tanto o valor final convertido quanto a taxa unitária aplicada na operação.
- ⏳ **Feedback Visual:** Indicador de carregamento (*spinner*) enquanto a requisição está em andamento.
- ⚠️ **Tratamento de Erros:** Mensagem amigável na interface caso a API demore a responder ou ocorra falha na conexão.
- 🎨 **Interface Moderna:** Layout limpo com gradientes, animações suaves ao focar nos campos e botões interativos.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica do formulário e seleção de moedas.
- **CSS3:** Estilização responsiva com Flexbox, gradientes lineares, sombras e animações (`@keyframes`).
- **JavaScript (ES6+):** Manipulação do DOM, requisições assíncronas (`async/await` + `fetch`) e tratamento de exceções (`try/catch`).
- **API Externa:** [ExchangeRate-API](https://exchangerate-api.com) para obtenção das taxas de câmbio.

---

## 📂 Estrutura do Projeto

```text
📁 conversor-de-moedas/
 ├── 📄 index.html    # Estrutura da página e lista de moedas
 ├── 🎨 style.css     # Estilos, gradientes e animações
 ├── ⚙️ script.js     # Lógica de consumo da API e conversão
 └── 📝 README.md     # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto

1. **Clone ou baixe este repositório:**
   ```bash
   git clone https://github.com
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd conversor-de-moedas
   ```
3. **Abra o arquivo principal:**
   Dê um duplo clique no arquivo `index.html` para abri-lo diretamente no seu navegador de preferência (ou utilize a extensão *Live Server* no VS Code).

---

## 💡 Como Funciona a Conversão

1. O usuário digita o **valor** desejado e escolhe a **moeda de origem** e a **moeda de destino**.
2. Ao clicar em **💰 Converter Moeda**, o JavaScript oculta o botão e exibe o indicador de carregamento.
3. Uma requisição `GET` é feita para `https://exchangerate-api.com{MOEDA_ORIGEM}`.
4. O valor é multiplicado pela taxa correspondente e exibido na tela com duas casas decimais.

---

<p align="center">
  Desenvolvido com 💻 e ☕
</p>
