# Redesenho local e SEO

## Referência do aplicativo

A demonstração foi baseada na interface do aplicativo de orçamento doméstico, incluindo o módulo de reserva de emergência. Nenhum arquivo do aplicativo foi alterado.

A demonstração é uma reprodução simplificada em componentes, com dados fictícios. Mostra Dashboard, Rendas, Despesas, Contas a pagar, Tipos de despesa, Gastos ideais, Reserva de emergência e Estatísticas. Não consulta contas reais nem simula salvamento. Preços e duração de teste não foram fixados no site; as condições são apresentadas pelo aplicativo.

## Conversão e descoberta

- `/orcamento` é a landing page pública voltada a orçamento doméstico e controle financeiro. Login e cadastro continuam no aplicativo existente.
- As quatro calculadoras mantêm a lógica financeira e ganham apresentação comum, explicação das premissas e links contextuais para o orçamento.
- As rotas publicadas têm títulos, descrições, canonical e cartões sociais próprios. A imagem social é gerada localmente em `/opengraph-image`.
- `/sitemap.xml` lista as páginas publicadas, sem datas de atualização artificiais. `/robots.txt` aponta para o sitemap.
- `/analises` tem `noindex, follow` enquanto não houver publicações; ao publicar conteúdo, remover o `noindex` e adicionar a rota ao sitemap.
- A landing page usa dados estruturados de WebPage/WebApplication; não foram inventados preços, avaliações ou depoimentos. Essa marcação sem avaliações/ofertas não implica elegibilidade para resultados enriquecidos de aplicativos do Google.
- Os links para o aplicativo registram `budget_app_open` no Vercel Analytics, com a posição do CTA. O evento mede saída para o aplicativo, não cadastro concluído. A confirmação de cadastro depende de instrumentação no projeto do aplicativo.

## Após publicar, quando aprovado

Enviar o sitemap no Search Console e verificar as URLs de orçamento e calculadoras. Acompanhar impressões, consultas, cliques orgânicos e saídas para o aplicativo. Não há garantia de posição ou aumento de usuários; comparar os indicadores antes e depois da publicação.

Referências técnicas consultadas: documentação instalada do Next.js 16.2.3; [Google Search Central: fundamentos de SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide); [marcação de aplicativos](https://developers.google.com/search/docs/appearance/structured-data/software-app).

Nenhum commit, push ou deploy foi executado nesta tarefa.
