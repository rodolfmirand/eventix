# Evidencias das Heuristicas

Este documento organiza as capturas de tela e os pontos de analise para o relatorio final do Eventix.

## Como usar

Para cada heuristica:

1. Abrir a rota indicada.
2. Capturar a tela sugerida.
3. Registrar no relatorio o comportamento observado.
4. Relacionar a tela com a heuristica correspondente.

Sugestao de padrao para os arquivos de imagem:

- `01-status-login.png`
- `02-mundo-real-checkout.png`
- `03-controle-assentos.png`

## Mapa de evidencias

| Heuristica | Rota sugerida | O que capturar | O que explicar no relatorio |
| --- | --- | --- | --- |
| Visibilidade do status do sistema | `/login`, `/checkout`, `/confirmacao/:ticketId` | Botao com loading, resumo da compra, confirmacao final | O sistema informa andamento, resultado da acao e contexto atual da compra. |
| Correspondencia com o mundo real | `/eventos/:id`, `/checkout`, `/ingressos/:ticketId` | Termos como evento, categoria, assento, pagamento e ingresso | A interface usa linguagem proxima do dominio de venda de ingressos. |
| Controle e liberdade do usuario | `/eventos`, `/eventos/:id/assentos`, `/perfil` | Botao de voltar, troca de assento, navegacao entre etapas e sair | O usuario consegue voltar, rever escolhas e navegar sem ficar preso no fluxo. |
| Consistencia e padroes | `/eventos`, `/eventos/:id`, `/checkout`, `/perfil` | Botoes, cards, badges, formularios e termos repetidos de forma consistente | O sistema usa os mesmos padroes visuais e verbais ao longo das telas. |
| Prevencao de erros | `/eventos/:id/assentos`, `/checkout`, `/login` | Assentos ocupados desabilitados, validacao de campos e bloqueio de envio invalido | O sistema evita erros antes que a acao seja concluida. |
| Reconhecimento em vez de memorizacao | `/eventos/:id`, `/eventos/:id/assentos`, `/checkout` | Resumo lateral, categorias visiveis, legenda de assentos | O usuario nao precisa memorizar informacoes de telas anteriores. |
| Flexibilidade e eficiencia | `/eventos`, `/perfil` | Busca, filtros por cidade e periodo, acesso rapido aos ingressos | O sistema permite chegar ao objetivo com poucos passos. |
| Design estetico e minimalista | `/eventos`, `/eventos/:id`, `/login` | Hierarquia visual, foco em informacao essencial, ausencia de ruido | A interface prioriza a tarefa principal de compra. |
| Reconhecer, diagnosticar e recuperar erros | `/login`, `/checkout` | Mensagens de erro proximas aos campos e orientacoes claras | Os erros sao explicados em linguagem acionavel. |
| Ajuda e documentacao | `/eventos/:id/assentos`, `/checkout`, `/ingressos/:ticketId` | Legenda de assentos, textos auxiliares curtos e contexto do ingresso | A interface oferece apoio pontual sem depender de manual externo. |

## Lista objetiva de capturas

Capturas minimas recomendadas:

1. Login com campos vazios e mensagem de validacao.
2. Catalogo com busca e filtros.
3. Detalhe do evento com categorias de ingresso.
4. Mapa de assentos com legenda e assento ocupado.
5. Mapa de assentos com um assento selecionado.
6. Checkout com resumo lateral.
7. Checkout com validacao de campos.
8. Confirmacao da compra.
9. Perfil com proximos ingressos.
10. Ingresso digital com QR Code.

## Estrutura sugerida para a secao de heuristicas no relatorio

Para cada heuristica, usar este formato:

### Nome da heuristica

- Tela analisada:
- Evidencia capturada:
- Decisao de interface:
- Justificativa:
- Resultado esperado para o usuario:

## Informacoes para o relatorio final

Separar no PDF final:

1. Identificacao da equipe.
2. Objetivo do sistema.
3. Descricao resumida do fluxo principal.
4. Tabela das 10 heuristicas com evidencia visual.
5. Comentario sobre escolhas de usabilidade.
6. Link do video.
7. Link do repositorio ou instrucao de execucao.

## Pendencias manuais

As etapas abaixo dependem de execucao humana fora do codigo:

- Capturar as telas finais.
- Inserir as imagens no relatorio.
- Gravar o video final.
- Publicar ou compartilhar o link do video.
