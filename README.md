# eventix

Roadmap inicial do trabalho: [docs/ROADMAP_IMPLEMENTACAO.md](docs/ROADMAP_IMPLEMENTACAO.md)

Documentos de planejamento:

- [Blocos de implementacao](docs/BLOCOS_IMPLEMENTACAO.md)
- [Decisoes de design](docs/DECISOES_DESIGN.md)
- [Evidencias das heuristicas](docs/EVIDENCIAS_HEURISTICAS.md)
- [Roteiro do video](docs/ROTEIRO_VIDEO.md)

## Sobre o projeto

Eventix e uma plataforma web de venda de ingressos para eventos, desenvolvida como trabalho de IHC com foco em fluxo de compra, usabilidade e aplicacao das 10 heuristicas de Nielsen.

Fluxo implementado:

- login;
- catalogo de eventos com busca e filtros;
- detalhe do evento;
- selecao de categoria;
- selecao de assento;
- checkout;
- confirmacao da compra;
- perfil;
- ingresso digital com QR Code.

## Como executar

Instale as dependencias:

```bash
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Gere a build de producao:

```bash
npm run build
```

## Rotas principais

- `/eventos`
- `/eventos/:id`
- `/eventos/:id/assentos?categoria=...`
- `/checkout?evento=...&categoria=...&assento=...`
- `/confirmacao/:ticketId`
- `/perfil`
- `/ingressos/:ticketId`

## Entrega final

Arquivos de apoio ja preparados:

- [docs/EVIDENCIAS_HEURISTICAS.md](docs/EVIDENCIAS_HEURISTICAS.md)
- [docs/ROTEIRO_VIDEO.md](docs/ROTEIRO_VIDEO.md)

Pendencias manuais para fechar a entrega:

- capturar as telas finais;
- gravar o video;
- montar o relatorio em PDF;
- inserir o link do video no relatorio.
