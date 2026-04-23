# Decisoes de design - Eventix

Este documento registra as decisoes visuais e de experiencia da plataforma. Ele deve ser atualizado sempre que uma escolha relevante de UI for tomada ou alterada.

## 1. Principios de experiencia

- Clareza antes de decoracao: cada tela deve deixar evidente o proximo passo do usuario.
- Compra guiada: o fluxo deve sempre mostrar onde o usuario esta e o que ainda falta.
- Linguagem familiar: usar termos reais de compra de ingressos, como evento, ingresso, assento, setor, categoria e pagamento.
- Erros recuperaveis: mensagens devem explicar o problema e o que fazer para corrigir.
- Consistencia: componentes, cores e nomes de acoes devem manter o mesmo significado em todas as telas.

## 2. Publico-alvo assumido

Usuarios que querem comprar ingressos online para shows, palestras, festivais, teatro ou eventos academicos. O sistema deve parecer simples para usuarios ocasionais, mas rapido para quem ja sabe qual evento quer comprar.

## 3. Personalidade visual

Direcao escolhida:

- Moderna, escura e objetiva.
- Aparencia de produto real de ticketing.
- Interface focada em decisao e compra, sem cara de landing page.
- Visual com base em azul marinho, alto contraste e destaque claro para eventos, datas, assentos e status.

Evitar:

- Excesso de textos explicativos dentro da interface.
- Efeitos visuais que atrapalhem leitura.
- Paleta dominada por uma unica cor.
- Elementos decorativos sem funcao.
- Cantos muito arredondados em cards, botoes e campos.

## 4. Paleta de cores inicial

| Papel | Token | Cor | Uso |
| --- | --- | --- | --- |
| Fundo principal | `--color-bg` | `#07111F` | Fundo geral da aplicacao |
| Superficie | `--color-surface` | `#0D1B2E` | Cards, paineis e formularios |
| Superficie elevada | `--color-surface-raised` | `#132842` | Elementos destacados e resumos |
| Texto principal | `--color-text` | `#F4F7FB` | Titulos e textos importantes |
| Texto secundario | `--color-muted` | `#A9B6C8` | Descricoes, metadados e ajuda |
| Primaria | `--color-primary` | `#0B1F3A` | Azul marinho para acoes principais e identidade |
| Primaria clara | `--color-primary-soft` | `#1E4E8C` | Hover, foco e selecao ativa |
| Acento | `--color-accent` | `#D6A33A` | Precos, alertas leves e detalhes de destaque |
| Sucesso | `--color-success` | `#35B979` | Confirmacao de compra e disponibilidade |
| Erro | `--color-danger` | `#E05A4F` | Erros, campos invalidos e assentos indisponiveis |
| Borda | `--color-border` | `#25405F` | Divisorias e bordas discretas |

Observacoes:

- A cor primaria deve ser azul marinho e representar a identidade da plataforma.
- Acoes clicaveis importantes podem usar azul marinho com borda/realce em `--color-primary-soft` para manter contraste no tema escuro.
- A cor de acento deve ser usada com moderacao, principalmente para preco ou chamada visual.
- Erro e sucesso devem ter texto ou icone alem da cor, para nao depender apenas de percepcao cromatica.

## 5. Tipografia

Decisao inicial:

- Fonte preferencial: `Inter`, com fallback `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Tamanho base: `16px`.
- Altura de linha padrao: `1.5`.

Escala sugerida:

| Uso | Tamanho | Peso |
| --- | --- | --- |
| Titulo de pagina | `32px` | `700` |
| Titulo de secao | `24px` | `700` |
| Titulo de card | `18px` | `600` |
| Texto comum | `16px` | `400` |
| Texto auxiliar | `14px` | `400` |
| Rotulos e badges | `12px` a `13px` | `600` |

Regras:

- Nao usar texto muito grande dentro de cards compactos.
- Nao reduzir textos importantes abaixo de `14px`.
- Evitar caixa alta em frases longas.

## 6. Espacamento e layout

Sistema base:

- Unidade de espacamento: `4px`.
- Espacamentos frequentes: `8px`, `12px`, `16px`, `24px`, `32px`, `48px`.
- Largura maxima do conteudo: entre `1120px` e `1200px`.
- Bordas arredondadas: preferencialmente `4px`, com limite maximo de `6px`.
- Botoes, campos e cards devem ter cantos discretos; evitar aparencia pill ou muito arredondada.
- Cards nao devem ser usados como secoes inteiras; usar cards para itens repetidos, formularios ou paineis especificos.

Layout responsivo:

- Mobile: fluxo em coluna unica.
- Desktop: catalogo em grid e checkout com resumo lateral.
- Mapa de assentos deve manter dimensoes estaveis para evitar saltos de layout.

## 7. Componentes e estados

### Botoes

Variantes:

- Primario: acao principal da tela.
- Secundario: acao alternativa.
- Fantasma: navegacao ou acao discreta.
- Perigo: limpar dados ou cancelar acao relevante, se existir.

Estados obrigatorios:

- Normal.
- Hover.
- Foco visivel.
- Desabilitado.
- Carregando, quando houver espera simulada.

### Campos de formulario

Regras:

- Todo campo deve ter label visivel.
- Erro deve aparecer proximo ao campo.
- Texto de ajuda deve ser curto e contextual.
- Placeholder nao substitui label.

### Cards de evento

Devem conter:

- Imagem.
- Titulo.
- Data e horario.
- Local/cidade.
- Preco inicial.
- Acao para ver detalhes.

### Assentos

Estados:

- Livre: neutro, clicavel.
- Ocupado: visualmente bloqueado, nao clicavel.
- Selecionado: destaque primario.

Regras:

- Sempre exibir legenda.
- Nao depender apenas de cor; usar texto, simbolo ou atributo acessivel.

### Alertas

Tipos:

- Sucesso.
- Erro.
- Informacao.
- Aviso.

Regras:

- Mensagem deve indicar o que aconteceu.
- Em erros, indicar como corrigir.

## 8. Iconografia

Decisao inicial:

- Usar icones apenas quando ajudarem reconhecimento rapido.
- Preferir uma biblioteca unica de icones se o projeto adotar uma, como `lucide-react`.
- Icones devem manter tamanho consistente, preferencialmente `18px` a `20px`.

Usos provaveis:

- Calendario para data.
- Mapa/pin para local.
- Ticket para ingresso.
- Usuario para perfil.
- Cartao para pagamento.
- Check para confirmacao.
- Alerta para erro.

## 9. Linguagem de interface

Termos aprovados:

- Entrar
- Sair
- Eventos
- Ver detalhes
- Categoria do ingresso
- Escolher assento
- Assento ocupado
- Assento selecionado
- Resumo da compra
- Finalizar compra
- Ingresso digital
- Proximos eventos
- Eventos passados

Evitar:

- Jargoes tecnicos, como payload, ID interno ou transacao mockada, na interface do usuario.
- Mensagens genericas como "Erro" sem explicacao.
- Misturar "ticket" e "ingresso" na interface final. Usar "ingresso".

## 10. Acessibilidade

Checklist minimo:

- [ ] Contraste adequado entre texto e fundo.
- [ ] Foco visivel em todos os elementos interativos.
- [ ] Labels visiveis em formularios.
- [ ] Botao desabilitado acompanhado de contexto quando necessario.
- [ ] Mensagens de erro associadas ao campo.
- [ ] Nao depender apenas de cor para status.
- [ ] Navegacao por teclado no fluxo principal.
- [ ] Textos nao sobrepoem componentes em mobile.

## 11. Aplicacao das heuristicas de Nielsen no design

| Heuristica | Decisao de design |
| --- | --- |
| Visibilidade do status do sistema | Mostrar loading, resumo da compra, selecao de assento e confirmacao final. |
| Correspondencia com o mundo real | Usar linguagem de eventos, ingressos, setores, assentos e pagamento. |
| Controle e liberdade do usuario | Incluir voltar, cancelar, trocar assento e sair. |
| Consistencia e padroes | Manter mesmos componentes, cores e nomes de acoes. |
| Prevencao de erros | Bloquear assento ocupado e desabilitar avanco sem dados obrigatorios. |
| Reconhecimento em vez de memorizacao | Manter resumo visivel e legenda no mapa de assentos. |
| Flexibilidade e eficiencia | Incluir filtros no catalogo e acoes diretas no perfil. |
| Design estetico e minimalista | Priorizar informacoes essenciais para a compra. |
| Reconhecer, diagnosticar e recuperar erros | Mensagens claras em login e pagamento. |
| Ajuda e documentacao | Dicas contextuais curtas em assentos, checkout e ingresso digital. |

## 12. Registro de decisoes

Use este formato para novas decisoes:

```md
### DD-000 - Titulo da decisao

Data: AAAA-MM-DD
Status: proposta | aceita | substituida

Contexto:

Decisao:

Consequencias:
```

### DD-001 - Usar interface objetiva orientada a compra

Data: 2026-04-23
Status: aceita

Contexto:

O trabalho exige demonstrar usabilidade em um sistema de compra de ingressos. Uma interface muito promocional ou decorativa dificultaria evidenciar as heuristicas e o fluxo principal.

Decisao:

Adotar uma interface objetiva, com foco em catalogo, escolha de categoria, assentos, checkout e perfil.

Consequencias:

O design deve priorizar hierarquia, estados de sistema, formularios claros e componentes consistentes.

### DD-002 - Usar paleta escura com azul marinho e estados semanticos

Data: 2026-04-23
Status: aceita

Contexto:

A plataforma precisa ter identidade propria e o usuario solicitou uma aparencia mais escura, com azul marinho como cor principal.

Decisao:

Usar azul marinho como cor primaria, base escura para fundos e superficies, acento dourado discreto e cores semanticas separadas para sucesso e erro.

Consequencias:

Acoes principais devem reforcar o azul marinho com contraste suficiente. Precos e destaques podem usar dourado com moderacao. Estados de erro e sucesso usam cores proprias e tambem texto ou icone.

### DD-003 - Usar cards apenas para itens e paineis especificos

Data: 2026-04-23
Status: aceita

Contexto:

O sistema tera catalogo, checkout e perfil. Se todas as secoes virarem cards, a interface perde hierarquia e fica visualmente pesada.

Decisao:

Usar cards para eventos, ingressos, formularios e resumos. Evitar paginas formadas por cards aninhados.

Consequencias:

As paginas devem usar layout com conteudo centralizado e secoes diretas, reservando cards para agrupamentos com funcao clara.

### DD-004 - Usar cantos discretos

Data: 2026-04-23
Status: aceita

Contexto:

O usuario solicitou que a plataforma nao use cantos muito arredondados.

Decisao:

Usar raio de borda preferencial de `4px`, com limite maximo de `6px` para cards, botoes, campos e paineis.

Consequencias:

A interface deve parecer mais firme e objetiva. Componentes em formato pill ou com arredondamento alto devem ser evitados, exceto se houver necessidade funcional muito clara.
