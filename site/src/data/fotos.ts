import type { ImageMetadata } from 'astro';

// Fotos reais entram soltando o arquivo em src/assets/fotos com o nome da chave:
//   hero.jpg, estruturas-metalicas.jpg, caldeiraria.jpg (qualquer extensão jpg/png/webp).
// Sem arquivo, a seção usa o gráfico da marca. Nenhuma foto é inventada.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/fotos/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

// Imagens geradas por IA para mostrar o layout ao cliente levam o sufixo ".provisoria"
// (ex.: hero.provisoria.jpg). Elas valem só na homologação: o build de produção falha
// se alguma ainda estiver em uso. Foto real (hero.jpg) tem prioridade.
const nomeBase = (caminho: string) => caminho.split('/').pop()!.replace(/\.[^.]+$/, '');

export function foto(chave: string): ImageMetadata | undefined {
  const entradas = Object.entries(arquivos);
  const real = entradas.find(([c]) => nomeBase(c) === chave);
  if (real) return real[1].default;
  const provisoria = entradas.find(([c]) => nomeBase(c) === `${chave}.provisoria`);
  if (provisoria && import.meta.env.SITE_ENV === 'production') {
    throw new Error(`Imagem provisória em uso em produção: ${chave}. Substitua por foto real.`);
  }
  return provisoria?.[1].default;
}
