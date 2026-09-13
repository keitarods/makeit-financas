# Vídeos de fundo do orçamento

A página `/orcamento` usa estes arquivos, em sequência:

- `orcamento-family-hero-1.mp4`
- `orcamento-family-hero-2.mp4`
- `orcamento-family-hero-3.mp4`
- `orcamento-family-hero-4.mp4`

O fundo tem desfoque e uma camada clara para manter o texto legível. A imagem
`public/images/orcamento-family-hero.png` aparece antes da reprodução e permanece
como alternativa quando o vídeo falha ou o usuário prefere movimento reduzido.

O vídeo começa após o carregamento inicial da página, com um atraso de 800 ms.
Somente o arquivo atual é associado ao player; os seguintes não são pré-carregados.
A reprodução é silenciosa, possui botão de pausa e pausa automaticamente quando
o topo sai da tela ou a aba do navegador fica oculta.

A economia de dados e conexões 2G, quando informadas pelo navegador, desativam o
vídeo. No celular, a reprodução usa `playsInline`. Não há versões WebM configuradas.

O vídeo é decorativo: título, descrição, links e demonstração continuam em HTML.
Após publicar, acompanhe as métricas reais no Vercel Speed Insights/Search Console;
estes cuidados reduzem o custo da mídia, mas não garantem pontuação ou posição na busca.
