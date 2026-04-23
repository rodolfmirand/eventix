# Blocos de implementacao - Eventix

Este documento transforma o roadmap em blocos executaveis. A ideia e implementar um bloco por vez, sempre deixando o projeto em estado demonstravel ao final de cada bloco.

Status sugeridos:

- `[ ]` Pendente
- `[~]` Em andamento
- `[x]` Concluido

## Bloco 0 - Preparacao do repositorio

Objetivo: deixar o projeto pronto para receber a aplicacao.

Tarefas:

- [x] Confirmar nome do sistema: Eventix.
- [ ] Definir integrantes para uso futuro no relatorio.
- [x] Criar projeto React + TypeScript com Vite.
- [x] Configurar Tailwind CSS.
- [x] Configurar React Router.
- [x] Criar scripts principais: `dev`, `build`, `preview`.
- [x] Atualizar README com comandos de execucao.

Arquivos esperados:

- `package.json`
- `index.html`
- `src/main.tsx`
- `src/App.tsx`
- `src/styles.css`
- `vite.config.ts`
- `README.md`

Criterios de aceite:

- `npm run dev` abre a aplicacao localmente.
- `npm run build` finaliza sem erro.
- A tela inicial renderiza sem conteudo quebrado.

## Bloco 1 - Fundacao visual e navegacao

Objetivo: criar a base visual e a estrutura de paginas.

Tarefas:

- [x] Criar layout principal com header, navegacao e area de conteudo.
- [x] Criar rotas vazias para login, eventos, detalhe, assentos, checkout, confirmacao, perfil e ingresso.
- [x] Criar componentes base de UI:
  - [x] `Button`
  - [x] `Input`
  - [x] `Card`
  - [x] `Badge`
  - [x] `Alert`
  - [x] `PageHeader`
  - [x] `EmptyState`
- [x] Aplicar tokens iniciais de cor, tipografia e espacamento definidos em `docs/DECISOES_DESIGN.md`.
- [x] Garantir foco visivel em links, botoes e campos.

Arquivos esperados:

- `src/app/AppRouter.tsx`
- `src/app/AppLayout.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/Input.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/Badge.tsx`
- `src/components/ui/Alert.tsx`
- `src/components/layout/Header.tsx`
- `src/pages/LoginPage.tsx`
- `src/pages/EventsPage.tsx`
- `src/pages/EventDetailsPage.tsx`
- `src/pages/SeatSelectionPage.tsx`
- `src/pages/CheckoutPage.tsx`
- `src/pages/ConfirmationPage.tsx`
- `src/pages/ProfilePage.tsx`
- `src/pages/TicketPage.tsx`

Criterios de aceite:

- Todas as rotas principais existem.
- Layout e navegacao sao consistentes.
- Componentes base podem ser reutilizados nas proximas telas.

## Bloco 2 - Dados simulados e tipos

Objetivo: criar a fonte de dados local para toda a aplicacao.

Tarefas:

- [ ] Criar tipos TypeScript para usuario, evento, categoria, assento e ingresso comprado.
- [ ] Criar usuario simulado.
- [ ] Criar entre 5 e 8 eventos simulados.
- [ ] Garantir mistura de eventos futuros e passados.
- [ ] Criar categorias por evento, como Pista, Premium e VIP.
- [ ] Criar assentos com status livre e ocupado.
- [ ] Criar helpers para:
  - [ ] ordenar eventos por data;
  - [ ] separar eventos futuros e passados;
  - [ ] buscar evento por ID;
  - [ ] buscar categoria e assento por ID.

Arquivos esperados:

- `src/types/domain.ts`
- `src/data/users.ts`
- `src/data/events.ts`
- `src/data/tickets.ts`
- `src/utils/date.ts`
- `src/utils/eventLookups.ts`

Criterios de aceite:

- Catalogo consegue consumir eventos reais do vetor.
- Perfil consegue usar eventos passados e futuros.
- Dados tem conteudo suficiente para demonstracao e relatorio.

## Bloco 3 - Sessao e login simulado

Objetivo: cumprir o requisito de login e preparar rotas protegidas.

Tarefas:

- [ ] Criar contexto ou store simples de autenticacao.
- [ ] Implementar login com email e senha simulados.
- [ ] Validar campos obrigatorios.
- [ ] Exibir mensagens de erro em linguagem clara.
- [ ] Exibir estado de carregamento simulado.
- [ ] Redirecionar para `/eventos` apos login.
- [ ] Implementar logout.
- [ ] Proteger rotas internas.

Arquivos esperados:

- `src/features/auth/AuthContext.tsx`
- `src/features/auth/ProtectedRoute.tsx`
- `src/pages/LoginPage.tsx`
- `src/components/layout/Header.tsx`

Criterios de aceite:

- Usuario entra com credenciais simuladas.
- Usuario nao acessa perfil, checkout ou ingresso sem login.
- Usuario consegue sair e voltar ao login.

Heuristicas evidenciadas:

- Visibilidade do status do sistema.
- Prevencao de erros.
- Reconhecer, diagnosticar e recuperar erros.

## Bloco 4 - Catalogo e detalhe de eventos

Objetivo: permitir que o usuario encontre e escolha um evento.

Tarefas:

- [ ] Implementar catalogo de eventos.
- [ ] Exibir card com imagem, titulo, data, local, cidade e preco inicial.
- [ ] Criar filtros de busca por texto.
- [ ] Criar filtro por cidade ou data, se houver tempo.
- [ ] Implementar tela de detalhe do evento.
- [ ] Exibir categorias com preco, descricao e beneficios.
- [ ] Permitir selecionar uma categoria.
- [ ] Direcionar para selecao de assentos.

Arquivos esperados:

- `src/features/events/EventCard.tsx`
- `src/features/events/EventFilters.tsx`
- `src/features/events/EventCategorySelector.tsx`
- `src/pages/EventsPage.tsx`
- `src/pages/EventDetailsPage.tsx`

Criterios de aceite:

- Usuario encontra eventos com facilidade.
- Usuario entende data, local e preco antes de comprar.
- Usuario escolhe uma categoria antes dos assentos.

Heuristicas evidenciadas:

- Correspondencia com o mundo real.
- Reconhecimento em vez de memorizacao.
- Design estetico e minimalista.
- Flexibilidade e eficiencia de uso.

## Bloco 5 - Selecao de assentos

Objetivo: implementar a interacao central do sistema.

Tarefas:

- [ ] Criar mapa de assentos em grid.
- [ ] Exibir legenda para livre, ocupado e selecionado.
- [ ] Bloquear clique em assentos ocupados.
- [ ] Permitir selecionar e trocar assento.
- [ ] Mostrar resumo do evento, categoria, assento e total.
- [ ] Desabilitar avanco sem assento selecionado.
- [ ] Permitir voltar ao detalhe para trocar categoria.

Arquivos esperados:

- `src/features/seats/SeatMap.tsx`
- `src/features/seats/SeatLegend.tsx`
- `src/features/checkout/PurchaseSummary.tsx`
- `src/pages/SeatSelectionPage.tsx`

Criterios de aceite:

- Assentos ocupados sao visualmente diferentes e nao clicaveis.
- Assento selecionado fica evidente.
- Usuario entende o que falta para avancar.

Heuristicas evidenciadas:

- Visibilidade do status do sistema.
- Controle e liberdade do usuario.
- Prevencao de erros.
- Reconhecimento em vez de memorizacao.

## Bloco 6 - Checkout e pagamento simulado

Objetivo: concluir a compra sem integrar servicos externos.

Tarefas:

- [ ] Criar tela de checkout com resumo fixo da compra.
- [ ] Criar formulario de pagamento simulado.
- [ ] Validar nome impresso, numero fake do cartao, validade e CVV.
- [ ] Exibir erros proximo aos campos.
- [ ] Exibir confirmacao antes de finalizar ou resumo claro antes do botao final.
- [ ] Criar ingresso comprado no estado da aplicacao.
- [ ] Redirecionar para confirmacao.

Arquivos esperados:

- `src/features/checkout/CheckoutForm.tsx`
- `src/features/checkout/PurchaseSummary.tsx`
- `src/features/tickets/TicketsContext.tsx`
- `src/pages/CheckoutPage.tsx`
- `src/pages/ConfirmationPage.tsx`

Criterios de aceite:

- Compra nao finaliza com formulario invalido.
- Compra valida gera ingresso.
- Tela de sucesso informa o que aconteceu e oferece proximas acoes.

Heuristicas evidenciadas:

- Visibilidade do status do sistema.
- Prevencao de erros.
- Reconhecer, diagnosticar e recuperar erros.
- Ajuda e documentacao.

## Bloco 7 - Perfil e ingresso digital

Objetivo: cumprir os requisitos de historico, ordenacao e QR Code.

Tarefas:

- [ ] Criar perfil com dados do usuario.
- [ ] Listar ingressos comprados.
- [ ] Ordenar ingressos pela data do evento.
- [ ] Separar proximos eventos e eventos passados.
- [ ] Criar card de ingresso.
- [ ] Criar tela de ingresso digital.
- [ ] Renderizar QR Code com payload do ingresso.
- [ ] Incluir informacoes do evento, categoria, assento e titular.

Arquivos esperados:

- `src/features/profile/ProfileSummary.tsx`
- `src/features/tickets/TicketCard.tsx`
- `src/features/tickets/DigitalTicket.tsx`
- `src/pages/ProfilePage.tsx`
- `src/pages/TicketPage.tsx`

Criterios de aceite:

- Perfil mostra ingressos em ordem cronologica.
- Eventos passados ficam separados dos proximos eventos.
- QR Code aparece e usa dados do ingresso.

Heuristicas evidenciadas:

- Correspondencia com o mundo real.
- Consistencia e padroes.
- Reconhecimento em vez de memorizacao.

## Bloco 8 - Persistencia local opcional

Objetivo: melhorar a demonstracao mantendo compras apos recarregar a pagina.

Tarefas:

- [ ] Salvar sessao simulada em `localStorage`, se fizer sentido.
- [ ] Salvar ingressos comprados em `localStorage`.
- [ ] Criar opcao discreta para limpar dados simulados, se necessario para testes.
- [ ] Garantir que dados invalidos do storage nao quebrem a aplicacao.

Arquivos esperados:

- `src/utils/storage.ts`
- `src/features/auth/AuthContext.tsx`
- `src/features/tickets/TicketsContext.tsx`

Criterios de aceite:

- Recarregar a pagina nao perde compras.
- Storage corrompido ou vazio nao quebra a interface.

## Bloco 9 - Responsividade, acessibilidade e polimento

Objetivo: preparar o sistema para video, relatorio e avaliacao de usabilidade.

Tarefas:

- [ ] Revisar desktop e mobile.
- [ ] Garantir que texto nao sobrepoe componentes.
- [ ] Verificar contraste de cores.
- [ ] Verificar navegacao por teclado no fluxo principal.
- [ ] Conferir labels de campos e nomes acessiveis de botoes.
- [ ] Adicionar estados vazios, loading e erro onde faltarem.
- [ ] Revisar consistencia de termos: evento, ingresso, assento, categoria, pagamento.

Arquivos esperados:

- Ajustes distribuidos nos componentes ja criados.
- Atualizacao de `docs/DECISOES_DESIGN.md`, se houver mudanca visual.

Criterios de aceite:

- Fluxo principal funciona em largura mobile e desktop.
- Elementos interativos tem foco visivel.
- Mensagens de erro sao claras e acionaveis.

## Bloco 10 - Evidencias para relatorio e video

Objetivo: organizar a entrega final.

Tarefas:

- [ ] Criar lista de screenshots necessarias para cada heuristica.
- [ ] Capturar telas finais.
- [ ] Criar roteiro curto do video.
- [ ] Gravar fluxo: login, catalogo, detalhe, categoria, assento, checkout, confirmacao, perfil e QR Code.
- [ ] Conferir que o README explica como executar o projeto.
- [ ] Separar informacoes para o relatorio final.

Arquivos esperados:

- `docs/EVIDENCIAS_HEURISTICAS.md`
- `docs/ROTEIRO_VIDEO.md`
- `README.md`

Criterios de aceite:

- Cada heuristica tem pelo menos uma evidencia.
- Video demonstra todos os requisitos minimos.
- Entrega tem codigo, relatorio PDF e link do video.
