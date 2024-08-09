import React from 'react';
import { MainHero } from '~/components/blocks/MainHero';

interface BlockRendererProps {
  block: any;
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  switch (block._type) {
    case 'block':
      return (
        <div key={block._key}>
          {block.children.map((child: any) => (
            <p key={child._key}>{child.text}</p>
          ))}
        </div>
      );
    case 'image':
      return <img key={block._key} src={block.asset.url} alt="Image" />;
    case 'mainHero':
      return (
        <MainHero
          key={block._key}
          title={block.title}
          subtitle={block.subtitle}
          backgroundImage={block.backgroundImage}
          ctaText={block.ctaText}
          ctaLink={block.ctaLink}
        />
      );
    default:
      return null;
  }
};

export default BlockRenderer;
