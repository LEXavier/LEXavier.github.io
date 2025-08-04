import { ImageWithFallback } from './figma/ImageWithFallback';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  tag: string;
  tagColor?: string;
}

function Tag({ tag, color = "#e3e3e3" }: { tag: string; color?: string }) {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 h-5 items-center justify-center left-3 px-2 py-0 rounded-[500px] top-3"
      data-name="tag"
      style={{ backgroundColor: color }}
    >
      <div className="font-['Nunito:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#121212] text-[12px] text-center text-nowrap">
        <p className="block leading-none whitespace-pre">{tag}</p>
      </div>
    </div>
  );
}

function RowPaper({ title, excerpt }: { title: string; excerpt: string }) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-center justify-center leading-[0] p-0 relative shrink-0 text-left w-full"
      data-name="row-paper"
    >
      <div className="flex flex-col font-['Space_Grotesk:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#121212] text-[20px] tracking-[-0.6px] w-full">
        <p className="block leading-[1.16]">{title}</p>
      </div>
      <div className="font-['Nunito:Regular',_sans-serif] font-normal relative shrink-0 text-[#383838] text-[16px] w-full">
        <p className="block leading-[1.24]">{excerpt}</p>
      </div>
    </div>
  );
}

function ContentSection({ content }: { content: string }) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="content-section"
    >
      <div className="font-['Nunito:Regular',_sans-serif] font-normal leading-[1.24] relative shrink-0 text-[#383838] text-[16px] text-left w-full">
        <p className="block">{content}</p>
      </div>
    </div>
  );
}

export function ArticleCard({ title, excerpt, content, imageUrl, tag, tagColor }: ArticleCardProps) {
  return (
    <div
      className="bg-[#fdfdfd] relative rounded-xl shadow-[0px_8px_16px_0px_rgba(196,196,196,0.16)] shrink-0 w-full"
      data-name="paper"
    >
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-center justify-start pb-6 pt-0 px-6 relative w-full">
          {imageUrl && (
            <ImageWithFallback
              src={imageUrl}
              alt={title}
              className="bg-center bg-cover bg-no-repeat h-[229px] shrink-0 w-[328px] object-cover"
            />
          )}
          <RowPaper title={title} excerpt={excerpt} />
          <ContentSection content={content} />
          <Tag tag={tag} color={tagColor} />
        </div>
      </div>
    </div>
  );
}