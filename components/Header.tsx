import imgExaSegurancaNegativoHorizontal11 from "figma:asset/4dd426dc7ec2034ba2c7096adb71a60ecedc0664.png";

function Frame204974447() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-center px-1 py-2 relative shrink-0">
      <div
        className="bg-[0.2%_0%] bg-no-repeat bg-size-[540.7%_100%] shrink-0 size-6"
        data-name="EXA Segurança - Negativo Horizontal (1) 1"
        style={{
          backgroundImage: `url('${imgExaSegurancaNegativoHorizontal11}')`,
        }}
      />
    </div>
  );
}

function ContainerText() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="container-text"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pb-0 pt-1 px-2 relative w-full">
          <div className="font-['Space_Grotesk:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#fdfdfd] text-[20px] text-left tracking-[-0.6px] w-full">
            <p className="block leading-[1.16]">EXA Segurança</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Topbar() {
  return (
    <div
      className="basis-0 bg-[#004bc1] grow min-h-px min-w-px relative shadow-[0px_8px_16px_0px_rgba(196,196,196,0.16)] shrink-0"
      data-name="topbar"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start py-[8px] pr-[8px] pl-[16px] relative w-full">
          <Frame204974447 />
          <ContainerText />
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div
      className="bg-[#004bc1] box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="header"
    >
      <Topbar />
    </div>
  );
}