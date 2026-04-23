# Roadmap de implementacao - Eventix

## 1. Contexto do trabalho

O enunciado pede o front-end de uma plataforma web de venda de ingressos para eventos, com foco em Engenharia de Usabilidade e aplicacao das 10 heuristicas de Nielsen. Nao ha necessidade de banco de dados: os dados podem ser simulados em vetores simples. A entrega final deve conter:

- Relatorio em PDF com identificacao dos estudantes, objetivos do sistema e evidencias das heuristicas.
- Link para video do sistema funcionando.
- Codigo-fonte do sistema.

Data de entrega informada no enunciado: 04/05/2026.

## 2. Escopo funcional minimo

O sistema deve permitir:

- Login simulado na plataforma.
- Listagem e escolha de eventos.
- Escolha de categoria de ingresso, como normal, premium ou VIP.
- Escolha de lugar, diferenciando assentos livres, selecionados e ocupados.
- Pagamento e confirmacao simulados.
- Perfil do usuario com eventos e ingressos adquiridos.
- Ordenacao cronologica dos ingressos.
- Separacao entre eventos futuros e eventos que ja passaram.
- Ingresso digital com QR Code.

## 3. Stack sugerida

Stack recomendada para um front-end academico rapido, moderno e facil de demonstrar:

- React + TypeScript para componentes, estado de UI e tipagem.
- Vite para criacao e execucao do projeto.
- React Router para navegacao entre telas.
- Tailwind CSS para velocidade de layout e consistencia visual.
- Biblioteca de QR Code para React, por exemplo `qrcode.react` ou equivalente, validada no momento da instalacao.
- Dados simulados em arquivos TypeScript, com opcional de `localStorage` para preservar compras durante a demonstracao.

Justificativa:

- A documentacao atual do React recomenda iniciar novos apps com um framework ou uma configuracao moderna; para este escopo sem back-end, Vite + React e uma base enxuta e adequada.
- A documentacao do Vite destaca o dev server rapido, HMR e templates para React + TypeScript.
- A documentacao atual do Tailwind recomenda integracao com Vite via plugin oficial `@tailwindcss/vite`.

Referencias consultadas:

- React: https://react.dev/learn/start-a-new-react-project
- Vite: https://vite.dev/guide/
- Tailwind CSS com Vite: https://tailwindcss.com/docs/installation/using-vite
- Heuristicas de Nielsen: https://www.nngroup.com/articles/ten-usability-heuristics/

## 4. Arquitetura de telas

Fluxo principal:

1. Login
2. Catalogo de eventos
3. Detalhe do evento
4. Escolha de categoria
5. Mapa de assentos
6. Checkout e pagamento simulado
7. Confirmacao da compra
8. Perfil do usuario
9. Detalhe do ingresso digital com QR Code

Rotas sugeridas:

- `/login`
- `/eventos`
- `/eventos/:id`
- `/eventos/:id/assentos`
- `/checkout`
- `/confirmacao/:ticketId`
- `/perfil`
- `/ingressos/:ticketId`

## 5. Modelo de dados simulado

Tipos iniciais sugeridos:

```ts
type User = {
  id: string;
  name: string;
  email: string;
};

type TicketCategory = {
  id: string;
  name: string;
  description: string;
  price: number;
  benefits: string[];
};

type Seat = {
  id: string;
  row: string;
  number: number;
  status: "available" | "occupied" | "selected";
};

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  city: string;
  imageUrl: string;
  categories: TicketCategory[];
  seats: Seat[];
};

type PurchasedTicket = {
  id: string;
  eventId: string;
  categoryId: string;
  seatId: string;
  userId: string;
  purchasedAt: string;
  qrPayload: string;
};
```

## 6. Roadmap por fases

### Fase 0 - Preparacao do trabalho

Objetivo: fechar entendimento e reduzir retrabalho.

Entregaveis:

- Nome do sistema: Eventix.
- Lista de integrantes para o relatorio.
- Definicao de 5 a 8 eventos simulados, com datas futuras e passadas.
- Matriz inicial das heuristicas de Nielsen aplicada ao sistema.

Criterios de pronto:

- Requisitos do PDF mapeados para telas.
- Fluxo principal de compra definido.
- Pasta `docs/` com roadmap e, depois, roteiro do relatorio.

### Fase 1 - Setup tecnico

Objetivo: criar a base do projeto.

Tarefas:

- Criar projeto React + TypeScript com Vite.
- Configurar Tailwind CSS.
- Configurar React Router.
- Definir estrutura de pastas:
  - `src/app`
  - `src/components`
  - `src/features/events`
  - `src/features/checkout`
  - `src/features/profile`
  - `src/data`
  - `src/types`
- Criar layout base com header, navegacao e area principal.

Criterios de pronto:

- `npm run dev` funcionando.
- `npm run build` funcionando.
- Navegacao entre rotas vazias funcionando.

### Fase 2 - UX, identidade visual e wireframes

Objetivo: garantir que o produto ja nasca facil de explicar no relatorio.

Tarefas:

- Definir paleta, tipografia, espacamentos e componentes base.
- Criar cards de evento, botoes, campos, alertas, badges e estados vazios.
- Desenhar wireframes simples das telas principais.
- Criar checklist de acessibilidade: contraste, foco visivel, labels e navegacao por teclado.

Criterios de pronto:

- Design consistente entre telas.
- Componentes reutilizaveis prontos para uso.
- Primeiras capturas ou wireframes disponiveis para apoiar o relatorio.

### Fase 3 - Dados simulados e estado da aplicacao

Objetivo: permitir o fluxo completo sem back-end.

Tarefas:

- Criar eventos simulados.
- Criar usuario simulado.
- Criar assentos com alguns lugares ocupados.
- Criar estado global simples para sessao, carrinho/checkout e ingressos comprados.
- Decidir se compras serao apenas em memoria ou tambem salvas em `localStorage`.

Criterios de pronto:

- Catalogo renderiza eventos reais do vetor.
- Eventos possuem categorias e assentos.
- Perfil consegue ler ingressos comprados do estado simulado.

### Fase 4 - Fluxo de autenticacao simulada

Objetivo: cumprir o requisito de login e iniciar o fluxo com feedback claro.

Tarefas:

- Tela de login com email e senha.
- Validacao de campos obrigatorios.
- Mensagens de erro compreensiveis.
- Estado de carregamento curto/simulado.
- Redirecionamento para catalogo apos login.
- Botao de sair.

Criterios de pronto:

- Usuario consegue entrar e sair.
- Rotas protegidas redirecionam para login quando necessario.
- Erros e estados de progresso sao visiveis.

### Fase 5 - Catalogo e detalhe de eventos

Objetivo: permitir escolher evento e categoria.

Tarefas:

- Listar eventos com imagem, data, local, preco inicial e status.
- Filtros simples por busca, cidade ou data.
- Tela de detalhe com descricao, local, data e categorias de ingresso.
- Comparacao clara entre categorias.
- Chamada para escolher assentos.

Criterios de pronto:

- Usuario consegue encontrar um evento.
- Usuario consegue escolher uma categoria.
- Categorias deixam claro preco e beneficios.

### Fase 6 - Mapa de assentos

Objetivo: implementar a parte mais importante da interacao.

Tarefas:

- Criar grid ou mapa de assentos.
- Exibir legenda: livre, ocupado, selecionado.
- Bloquear assentos ocupados.
- Permitir selecionar e trocar assento.
- Mostrar resumo lateral ou inferior com evento, categoria, assento e valor.
- Validar que usuario nao avance sem assento.

Criterios de pronto:

- Assentos ocupados nao sao clicaveis.
- Assento selecionado fica evidente.
- Usuario entende o que falta para continuar.

### Fase 7 - Checkout, pagamento simulado e confirmacao

Objetivo: concluir compra de forma demonstravel.

Tarefas:

- Tela de checkout com resumo da compra.
- Formulario de pagamento simulado.
- Validacoes basicas: nome, numero do cartao fake, validade e CVV.
- Confirmacao antes de finalizar.
- Criacao do ingresso comprado no estado da aplicacao.
- Tela de sucesso com proximos passos.

Criterios de pronto:

- Compra gera ingresso.
- Usuario recebe feedback de sucesso.
- Usuario consegue ir para o perfil ou abrir o ingresso digital.

### Fase 8 - Perfil e ingresso digital

Objetivo: cumprir requisitos de historico e QR Code.

Tarefas:

- Tela de perfil com dados do usuario.
- Lista de ingressos em ordem cronologica.
- Separacao entre proximos eventos e eventos passados.
- Card de ingresso com evento, data, categoria, assento e status.
- Pagina de ingresso digital com QR Code.
- Conteudo do QR Code com payload identificavel, como `ticketId`, `eventId` e `seatId`.

Criterios de pronto:

- Eventos futuros e passados aparecem separados.
- Ordenacao por data do evento esta correta.
- QR Code aparece e corresponde ao ingresso.

### Fase 9 - Aplicacao das heuristicas de Nielsen

Objetivo: transformar usabilidade em evidencia para o relatorio.

Para cada heuristica, implementar e registrar pelo menos uma evidencia:

| Heuristica | Como aplicar no Eventix | Evidencia para o relatorio |
| --- | --- | --- |
| Visibilidade do status do sistema | loading, estados de sucesso, resumo da compra, assento selecionado | Login, checkout, mapa de assentos |
| Correspondencia com o mundo real | termos como ingresso, assento, setor, VIP, pagamento | Detalhe do evento e checkout |
| Controle e liberdade do usuario | voltar, cancelar, trocar assento, sair | Fluxo de compra |
| Consistencia e padroes | botoes, cores, rotas, layout e linguagem consistentes | Todas as telas |
| Prevencao de erros | bloquear assento ocupado, desabilitar avancar sem dados | Assentos e pagamento |
| Reconhecimento em vez de memorizacao | resumo sempre visivel, labels, legenda de assentos | Checkout e assentos |
| Flexibilidade e eficiencia | filtros, atalhos de navegacao, acoes diretas no perfil | Catalogo e perfil |
| Design estetico e minimalista | foco em informacao essencial, hierarquia visual clara | Catalogo e detalhes |
| Reconhecer, diagnosticar e recuperar erros | mensagens claras nos formularios | Login e pagamento |
| Ajuda e documentacao | dicas contextuais, legendas e textos auxiliares curtos | Assentos, pagamento e ingresso |

Criterios de pronto:

- Cada heuristica tem pelo menos uma tela associada.
- As evidencias estao anotadas para facilitar o relatorio.
- Screenshots finais planejados.

### Fase 10 - Testes, polimento e responsividade

Objetivo: reduzir risco antes de gravar video e entregar.

Tarefas:

- Testar fluxo completo: login, evento, categoria, assento, pagamento, perfil, QR Code.
- Testar estados de erro.
- Testar desktop e mobile.
- Verificar contraste, foco de teclado e textos quebrando corretamente.
- Rodar build final.

Criterios de pronto:

- Fluxo principal funciona sem erro.
- Interface fica legivel em mobile.
- Build de producao passa.

### Fase 11 - Relatorio e video

Objetivo: preparar os artefatos de entrega.

Tarefas:

- Criar roteiro do video com duracao curta, mostrando o fluxo completo.
- Gravar video do sistema funcionando.
- Criar relatorio final sem uso de IA generativa, conforme observacao do enunciado.
- Inserir no relatorio:
  - Identificacao dos estudantes.
  - Objetivos do sistema.
  - Capturas das telas.
  - Explicacao de cada heuristica.
  - Link do video.
  - Link ou instrucao de acesso ao codigo.

Criterios de pronto:

- Video publicado ou compartilhavel por link.
- PDF final revisado.
- Codigo-fonte organizado e executavel.

## 7. Cronograma sugerido ate 04/05/2026

Considerando inicio em 23/04/2026:

| Periodo | Foco |
| --- | --- |
| 23/04 | Setup, arquitetura, dados simulados e rotas |
| 24/04 | Design base, login, catalogo e detalhe de evento |
| 25/04 | Categorias, mapa de assentos e validacoes |
| 26/04 | Checkout, pagamento simulado e confirmacao |
| 27/04 | Perfil, historico, separacao de eventos e QR Code |
| 28/04 | Responsividade, acessibilidade e polimento de usabilidade |
| 29/04 | Revisao das heuristicas e capturas de tela |
| 30/04 | Testes finais do fluxo e build |
| 01/05 | Gravacao do video |
| 02/05 | Escrita do relatorio |
| 03/05 | Revisao geral e ajustes finais |
| 04/05 | Entrega |

## 8. Ordem recomendada para comecar

1. Criar o projeto React + TypeScript com Vite.
2. Configurar Tailwind, rotas e layout base.
3. Criar os dados simulados de eventos, categorias e assentos.
4. Implementar login e catalogo.
5. Implementar o fluxo de compra.
6. Implementar perfil e QR Code.
7. Revisar todas as telas pela matriz de heuristicas.
8. Preparar video e relatorio.

## 9. Definition of Done do trabalho

O trabalho pode ser considerado pronto quando:

- Todos os requisitos minimos do PDF foram demonstrados no sistema.
- A aplicacao roda localmente com comandos documentados.
- O fluxo principal nao depende de banco de dados.
- O usuario consegue comprar ingresso simulado e visualizar QR Code.
- O perfil separa eventos futuros e passados em ordem cronologica.
- O relatorio cobre as 10 heuristicas com imagens e explicacoes.
- O video mostra o sistema funcionando de ponta a ponta.
