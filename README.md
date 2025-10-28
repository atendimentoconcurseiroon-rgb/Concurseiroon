# Lista VIP — Black Friday (Concurseiro ON)

Arquivos prontos para hospedar um site estático com formulário.

Arquivos:
- index.html
- style.css
- script.js
- favicon.svg

Como hospedar:
1. Coloque todos os arquivos na raiz do seu repositório/site.
2. Para GitHub Pages:
   - Crie um repositório e faça push dos arquivos na branch `main`.
   - Vá em Settings → Pages → Source → selecione `main` / root e salve.
   - Aguarde alguns minutos; seu site estará em `https://<seu-usuario>.github.io/<repo>/`.
3. Para Netlify/Vercel: arraste a pasta para deploy ou conecte o repositório. Ambos detectam sites estáticos automaticamente.

Integração do formulário:
- Atualmente o formulário só mostra uma mensagem de sucesso localmente e loga os dados no console.
- Para enviar os dados para sua lista (ex: Mailchimp, RD Station, Formspree ou sua API), adicione um fetch() no arquivo `script.js` substituindo onde os dados são logados.
- Se quiser, eu posso adicionar integração com Formspree ou outra ferramenta — me diga qual prefere.

Precisa que eu gere uma versão com:
- Envio por e-mail (Formspree)?
- Integração com Google Sheets?
- Preparar para Netlify Forms?
Diga qual e eu ajusto.