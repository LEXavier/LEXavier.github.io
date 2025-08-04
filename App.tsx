import { Header } from "./components/Header";
import imgImage2 from "figma:asset/a1f22be73c503ada2b0190b5098d8f66b15b063a.png";

export default function App() {
  return (
    <div
      className="bg-[#f1f4f8] box-border content-stretch flex flex-col items-start justify-center p-0 relative min-h-screen w-full"
      data-name="news_feed"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shadow-[0px_8px_16px_0px_rgba(196,196,196,0.16)] shrink-0 w-full">
        <Header />
      </div>
      
      <div className="relative shrink-0 w-full" data-name="main-content">
        <div className="flex flex-col items-center relative size-full">
          <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start px-4 py-6 relative w-full max-w-md mx-auto">
            
            {/* Artigo único com imagem de ponta a ponta */}
            <div
              className="bg-[#fdfdfd] relative rounded-xl shadow-[0px_8px_16px_0px_rgba(196,196,196,0.16)] shrink-0 w-full overflow-hidden"
              data-name="featured-article"
            >
              <div className="flex flex-col items-center relative size-full">
                {/* Imagem ocupando toda a largura com cantos arredondados apenas no topo */}
                <div
                  className="bg-center bg-cover bg-no-repeat h-[229px] shrink-0 w-full rounded-t-xl"
                  data-name="image 2"
                  style={{ backgroundImage: `url('${imgImage2}')` }}
                />
                
                {/* Conteúdo com padding */}
                <div className="box-border content-stretch flex flex-col gap-8 items-center justify-start pb-6 pt-6 px-6 relative w-full">
                  <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center leading-[0] p-0 relative shrink-0 text-left w-full">
                    <div className="flex flex-col font-['Space_Grotesk:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#121212] text-[20px] tracking-[-0.6px] w-full">
                      <p className="block leading-[1.16]">
                        Stalkerware ainda é um problema em 2020
                      </p>
                    </div>
                    <div className="font-['Nunito:Regular',_sans-serif] font-normal relative shrink-0 text-[#383838] text-[16px] w-full">
                      <p className="block leading-[1.24]">
                        Atividade de aplicativos de stalkerware diminuiu durante a pandemia, mas está aumentando novamente.
                      </p>
                    </div>
                  </div>
                  
                  <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center p-0 relative shrink-0 w-full">
                    <div className="font-['Nunito:Regular',_sans-serif] font-normal leading-[1.24] relative shrink-0 text-[#383838] text-[16px] text-left w-full">
                      <p className="block mb-2">
                        Aplicativos stalkerware normalmente são invisíveis na lista de
                        programas instalados e não exibem nenhuma notificação de atividade.
                      </p>
                      <p className="mb-2">
                        <span>Conhecendo cada movimento da vítima, um invasor pode controlar, ameaçar e pressionar psicologicamente. De acordo com um </span>
                        <a
                          className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] cursor-pointer font-['Nunito:Regular',_sans-serif] font-normal"
                          href="https://eige.europa.eu/news/cyber-violence-growing-threat-especially-women-and-girls"
                        >
                          <span className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] leading-[1.24]">
                            relatório
                          </span>
                        </a>
                        <span> de 2017 do Instituto Europeu para a Igualdade de Gênero (EIGE, sigla em inglês), sete em cada dez mulheres afetadas por perseguição online sofreram violência física, sexual ou ambas nas mãos dos cibercriminosos.</span>
                      </p>
                      <p className="block">
                        Quanto aos aplicativos de stalkerware, o espécime mais comum em 2020
                        foi aquele que nossas soluções chamam de Monitor.AndroidOS.Nidb.a.
                        Seus desenvolvedores permitem que o aplicativo seja revendido com
                        outros nomes, por isso é destaque no mercado. Os aplicativos iSpyoo,
                        TheTruthSpy e Copy9, por exemplo, são todos Nidb. Curiosamente, até
                        apenas um ano atrás, essa família de stalkerware era apenas a terceira
                        mais relevante.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Tag posicionada sobre a imagem */}
                <div
                  className="absolute bg-[#e3e3e3] box-border content-stretch flex flex-row gap-1 h-5 items-center justify-center left-3 px-2 py-0 rounded-[500px] top-3"
                  data-name="tag"
                >
                  <div className="font-['Nunito:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#121212] text-[12px] text-center text-nowrap">
                    <p className="block leading-none whitespace-pre">Golpes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}