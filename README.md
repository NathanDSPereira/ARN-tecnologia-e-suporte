# ARN Tecnologia & Suporte — página inicial

Site estático (HTML + CSS + JavaScript simples). Não precisa instalar nada: abra o `index.html` no navegador.

## Estrutura

```
index.html        Conteúdo e textos da página
css/styles.css    Visual (cores, tamanhos, responsivo)
js/main.js        Dados da empresa e links do WhatsApp
```

## Como editar

- **Dados da empresa** (WhatsApp, telefone, e-mail, horário, cidades, CNPJ): `js/main.js`, bloco `CONFIG` no topo.
- **Textos**: `index.html`. Cada seção tem um comentário `<!-- ===== NOME ===== -->`.
- **Mensagem que abre no WhatsApp**: atributo `data-msg` do botão ou da opção em `index.html`.
- **Cores**: `css/styles.css`, variáveis em `:root` (`--orange`, `--black`, etc.).
  - Texto sobre laranja deve ser preto, e laranja como cor de texto sobre fundo claro deve usar `--orange-text`, para manter a leitura.

## Publicação

Envie a pasta inteira para qualquer hospedagem de site estático (Netlify, Vercel, GitHub Pages ou a hospedagem do seu domínio).
