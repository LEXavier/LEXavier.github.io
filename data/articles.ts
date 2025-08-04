export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  tag: string;
  tagColor?: string;
  publishedAt: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Stalkerware ainda é um problema em 2020",
    excerpt: "Atividade de aplicativos de stalkerware diminuiu durante a pandemia, mas está aumentando novamente.",
    content: "Aplicativos stalkerware normalmente são invisíveis na lista de programas instalados e não exibem nenhuma notificação de atividade. Conhecendo cada movimento da vítima, um invasor pode controlar, ameaçar e pressionar psicologicamente. De acordo com um relatório de 2017 do Instituto Europeu para a Igualdade de Gênero (EIGE, sigla em inglês), sete em cada dez mulheres afetadas por perseguição online sofreram violência física, sexual ou ambas nas mãos dos cibercriminosos.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&crop=entropy",
    tag: "Golpes",
    tagColor: "#e3e3e3",
    publishedAt: "2024-12-15"
  }
];