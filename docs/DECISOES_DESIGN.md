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

- Moderna, clara e objetiva.
- Aparencia de produto real de ticketing.
- Interface focada em decisao e compra, sem cara de landing page.
- Visual leve, frio e minimalista, com superfices claras, contraste suave e destaque discreto para eventos, datas, assentos e status.
- Composicao mais autoral e editorial, evitando a sensacao de template generico.

Evitar:

- Excesso de textos explicativos dentro da interface.
- Efeitos visuais que atrapalhem leitura.
- Paleta dominada por uma unica cor.
- Elementos decorativos sem funcao.
- Cantos muito arredondados em cards, botoes e campos.
- Barras de busca grandes demais ou paineis de filtro com cara de dashboard padrao.

## 4. Paleta de cores inicial

| Papel | Token | Cor | Uso |
| --- | --- | --- | --- |
| Fundo principal | `--color-bg` | `#F5F8FC` | Fundo geral da aplicacao |
| Superficie | `--color-surface` | `#FFFFFF` | Cards, paineis e formularios |
| Superficie elevada | `--color-surface-raised` | `#EEF4FA` | Elementos destacados e resumos |
| Texto principal | `--color-text` | `#233243` | Titulos e textos importantes |
| Texto secundario | `--color-muted` | `#718092` | Descricoes, metadados e ajuda |
| Primaria | `--color-primary` | `#6F8EAD` | Azul frio suave para acoes principais e identidade |
| Primaria clara | `--color-primary-soft` | `#9DB8D1` | Hover, foco e selecao ativa |
| Acento | `--color-accent` | `#C7D8E7` | Destaques sutis e apoio visual |
| Sucesso | `--color-success` | `#72B89D` | Confirmacao de compra e disponibilidade |
| Erro | `--color-danger` | `#CF8B92` | Erros, campos invalidos e assentos indisponiveis |
| Borda | `--color-border` | `#D8E3ED` | Divisorias e bordas discretas |

Observacoes:

- A cor primaria deve ser um azul frio e suave, sem pesar a interface.
- Acoes clicaveis importantes usam azul dessaturado com contraste suficiente, sem perder a leveza do tema.
- A cor de acento deve ser usada com moderacao, principalmente para apoiar hierarquia visual.
- Erro e sucesso devem ter texto ou icone alem da cor, para nao depender apenas de percepcao cromatica.

## 5. Tipografia

Decisao inicial:

- Fonte preferencial: `Manrope`, com fallback `Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Tamanho base: `16px`.
- Altura de linha padrao: `1.5`.

Escala sugerida:

| Uso | Tamanho | Peso |
| --- | --- | --- |
| Titulo de pagina | `32px` | `600` |
| Titulo de secao | `24px` | `600` |
| Titulo de card | `18px` | `600` |
| Texto comum | `16px` | `400` |
| Texto auxiliar | `14px` | `400` |
| Rotulos e badges | `12px` a `13px` | `600` |

Regras:

- Nao usar texto muito grande dentro de cards compactos.
- Nao reduzir textos importantes abaixo de `14px`.
- Evitar caixa alta em frases longas.
- Preferir pesos intermediarios e leves antes de pesos pesados.

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
- Exibir preco, categoria ou setor associado ao assento antes do usuario avancar.
- Manter resumo do assento selecionado proximo ao mapa.

### Busca e filtros

Campos e filtros prioritarios:

- Busca por nome do evento.
- Filtro por cidade/local.
- Filtro por data ou periodo.
- Filtro por faixa de preco, se houver tempo.

Regras:

- Filtros devem atualizar a lista sem apagar o contexto da busca.
- Quando nao houver resultado, mostrar estado vazio com acao para limpar filtros.
- O catalogo deve continuar util mesmo sem filtros avancados.

### Resumo da compra

Deve aparecer nas etapas de assento e checkout:

- Nome do evento.
- Data e local.
- Categoria do ingresso.
- Assento selecionado.
- Preco do ingresso.
- Total simulado.

Regras:

- O total deve ficar visivel antes da finalizacao.
- O usuario deve conseguir voltar para alterar categoria ou assento.
- O sistema deve evitar surpresas no checkout, mesmo com pagamento simulado.

### Ingresso digital

Deve conter:

- Nome do evento.
- Data e local.
- Nome do titular.
- Categoria.
- Assento.
- Identificador do ingresso.
- QR Code.

Regras:

- O QR Code deve ser o elemento central da tela do ingresso.
- Incluir orientacao curta para apresentar o ingresso no acesso ao evento.
- Nao usar termos tecnicos como payload na interface final.

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

## 12. Pesquisa de mercado e padroes abstraidos

Pesquisa realizada em 2026-04-23 para orientar o design do Eventix. As referencias foram usadas para abstrair padroes de UI/UX, nao para copiar layout visual.

### Plataformas consultadas

| Plataforma | Fonte consultada | Padroes observados |
| --- | --- | --- |
| Eventbrite | https://www.eventbrite.com/help/en-us/articles/644100/how-to-create-custom-ticket-types/ | Tipos de ingresso com nome, descricao, preco, quantidade, visibilidade, limite por pedido e configuracoes de checkout. |
| Eventbrite | https://www.eventbrite.com/help/en-us/articles/683914/how-to-set-up-a-reserved-seating-event/ | Assentos reservados com mapa do local, secoes, tiers, cores por categoria e precos por area. |
| Eventbrite | https://www.eventbrite.com/help/en-us/articles/810506/help-an-attendee-access-their-tickets/ | Ingressos acessados pela conta do usuario em uma area dedicada de tickets. |
| Ticketmaster | https://help.ticketmaster.com/hc/en-us/articles/9786899270545-Interactive-Seat-Map | Mapa interativo com selecao de setor/assento, zoom, filtros por preco, cores para disponibilidade e check para assento selecionado. |
| Ticketmaster | https://www.ticketmaster.com/mobile-tickets | Ingressos digitais no app/conta, scan no local, transferencia e preparacao antes do evento. |
| Ticketmaster | https://help.ticketmaster.com/hc/en-us/articles/22926422411537-How-do-I-use-the-Ticketmaster-App | Navegacao por busca, local/data, area de eventos do usuario e gerenciamento de tickets. |
| Sympla | https://www.sympla.com.br/ | Catalogo com colecoes, eventos em destaque e descoberta por categorias. |
| Sympla | https://appsympla.zendesk.com/hc/pt-br/articles/360000881163-Como-fa%C3%A7o-para-ter-acesso-aos-meus-ingressos | Acesso aos ingressos pelo app, aba de ingressos e QR Code por evento. |
| Eventim | https://help.eventim.com.br/hc/pt-br/articles/27268197127191--N%C3%A3o-recebi-meu-ingresso | Acesso ao ingresso depende da forma de entrega, com informacao disponivel no email de confirmacao e historico de compras. |
| Eventim | https://help.eventim.com.br/hc/pt-br/articles/20955026425751--Informa%25C3%25A7%25C3%25B5es-sobre-o-Eventim-Pass-Ingresso-no-aplicativo | Ingresso digital no aplicativo, area "Meus Eventos", seguranca do QR Code e transferencia. |
| StubHub | https://newsroom.stubhub.com/2026/03/30/understanding-ticketing-how-platforms-like-stubhub-work/ | Fluxo de busca, filtros por preco/secao/fileira/quantidade, preco total antes de finalizar e entrega digital. |

### Padroes de descoberta de eventos

Padroes recorrentes:

- Campo de busca sempre proximo ao catalogo.
- Filtros por local, data e preco.
- Cards com titulo, data, local e preco inicial.
- Destaque para eventos populares, colecoes ou categorias.
- Caminho curto entre encontrar evento e ver detalhes.

Decisao para o Eventix:

- A pagina `/eventos` deve priorizar busca, filtros simples e cards escaneaveis.
- Cada card deve mostrar data, local, preco inicial e acao "Ver detalhes".
- O estado vazio deve oferecer uma forma clara de limpar filtros.

### Padroes de detalhe e escolha de ingresso

Padroes recorrentes:

- Detalhe do evento concentra data, local, descricao e chamada para compra.
- Tipos de ingresso possuem nome, preco, descricao, disponibilidade e limite.
- Plataformas distinguem ingresso geral, setores, tiers ou categorias.
- Informacoes de taxa/preco devem aparecer antes do fim do checkout.

Decisao para o Eventix:

- A tela de detalhe deve mostrar categorias como comparacao direta.
- Cada categoria deve informar preco, beneficios e disponibilidade simulada.
- A categoria escolhida deve permanecer visivel nas proximas etapas.

### Padroes de mapa de assentos

Padroes recorrentes:

- Mapa visual do local com secoes, assentos ou tiers.
- Cores diferentes para disponivel, indisponivel e selecionado.
- Legenda sempre presente.
- Filtros por preco ou acessibilidade em sistemas mais completos.
- Resumo do assento antes de avancar.

Decisao para o Eventix:

- O mapa deve usar grid simples, mas com estados claros: livre, ocupado e selecionado.
- Assento ocupado nao pode ser clicavel.
- O assento selecionado deve aparecer no resumo da compra.
- Usar cor, texto acessivel e estado `disabled` para nao depender apenas de cor.

### Padroes de checkout

Padroes recorrentes:

- Checkout focado, com poucas distracoes.
- Resumo do pedido visivel.
- Coleta de dados do participante ou comprador.
- Pagamento com feedback claro de validacao.
- Confirmacao final com acesso ao ingresso.

Decisao para o Eventix:

- O checkout deve ter formulario simulado e resumo fixo da compra.
- O botao final deve deixar claro que a compra sera finalizada.
- Erros devem aparecer perto dos campos e explicar a correcao.
- A confirmacao deve oferecer acoes para abrir ingresso digital ou ir ao perfil.

### Padroes de perfil e ingresso digital

Padroes recorrentes:

- Area do usuario com ingressos ou meus eventos.
- Ingressos digitais acessiveis pela conta e/ou email.
- QR Code como principal elemento de acesso.
- Recomendacao de preparar o ingresso antes de chegar ao evento.
- Em plataformas reais, screenshots do QR Code podem ser desencorajados por seguranca.

Decisao para o Eventix:

- O perfil deve separar proximos eventos e eventos passados.
- A tela do ingresso deve centralizar o QR Code e mostrar dados essenciais.
- Incluir texto curto: "Apresente este QR Code na entrada do evento".
- Como o projeto e simulado, nao implementar transferencia, wallet, resale ou protecao contra screenshot.

### Padroes fora do escopo atual

Nao implementar nesta primeira versao:

- Revenda ou transferencia de ingressos.
- Carteira digital do celular.
- Fila de compra ou espera.
- Presale/codigos promocionais.
- Recomendacao personalizada.
- Mapa realista de venue com zoom.
- Pagamento real.

Esses pontos podem ser citados no relatorio como limites conscientes do prototipo.

## 13. Registro de decisoes

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

### DD-002 - Usar paleta clara com tons frios e estados semanticos

Data: 2026-04-23
Status: aceita

Contexto:

A plataforma precisa parecer mais limpa, leve e contemporanea, com predominio de cores frias e claras.

Decisao:

Usar base clara, superficies brancas, azuis frios suaves como cor primaria e uma paleta dessaturada para bordas, destaques e estados.

Consequencias:

Acoes principais ficam mais leves visualmente e o produto ganha uma leitura mais limpa. Estados de erro e sucesso continuam semanticos, mas integrados a uma interface menos pesada.

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

### DD-005 - Basear o fluxo em padroes de ticketing pesquisados

Data: 2026-04-23
Status: aceita

Contexto:

A pesquisa em plataformas como Eventbrite, Ticketmaster, Sympla, Eventim e StubHub mostrou padroes consistentes para descoberta de eventos, escolha de ingresso, mapa de assentos, checkout e ingresso digital.

Decisao:

Adotar um fluxo linear: catalogo, detalhe do evento, categoria, assento, checkout, confirmacao, perfil e ingresso digital.

Consequencias:

O sistema fica mais facil de demonstrar e se aproxima de plataformas reais, mantendo o escopo academico sem back-end e sem pagamento real.

### DD-006 - Manter resumo da compra durante assento e checkout

Data: 2026-04-23
Status: aceita

Contexto:

Plataformas de ticketing reduzem incerteza mostrando ao usuario o que esta sendo comprado antes de finalizar.

Decisao:

Exibir resumo com evento, data, local, categoria, assento e total simulado nas etapas de selecao de assento e checkout.

Consequencias:

O usuario nao precisa memorizar escolhas anteriores, o que reforca a heuristica de reconhecimento em vez de memorizacao.

### DD-007 - Tratar QR Code como centro do ingresso digital

Data: 2026-04-23
Status: aceita

Contexto:

As referencias pesquisadas usam ingresso digital como principal forma de acesso ao evento, geralmente com QR Code ou codigo escaneavel.

Decisao:

A tela de ingresso digital deve centralizar o QR Code e complementar com dados essenciais do ingresso.

Consequencias:

A tela fica objetiva para demonstracao, facil de capturar no relatorio e alinhada ao requisito minimo do trabalho.

### DD-008 - Adotar tema claro, frio e tipografia mais elegante

Data: 2026-04-23
Status: aceita

Contexto:

O usuario solicitou uma interface mais limpa, minimalista e moderna, com cores claras, frias e tipografia mais fina.

Decisao:

Adotar tema claro com fundos frios, superficies brancas, contraste suave e a fonte `Manrope` como base visual principal.

Consequencias:

O sistema ganha uma leitura mais leve e sofisticada. O uso de sombras, cores fortes e gradientes passa a ser mais contido, e a hierarquia visual depende mais de espacamento, tipografia e contraste sutil.

### DD-009 - Dar ao catalogo uma composicao mais autoral

Data: 2026-04-23
Status: aceita

Contexto:

Mesmo com a troca para um tema claro, a interface ainda podia parecer generica demais, especialmente no catalogo e na area de busca.

Decisao:

Adotar uma toolbar de descoberta mais compacta e uma composicao mais editorial para os cards de evento, com destaque principal e hierarquia menos padronizada.

Consequencias:

O produto ganha personalidade visual sem perder clareza funcional. Busca e filtros ficam mais leves e os eventos passam a ter uma apresentacao menos previsivel.
