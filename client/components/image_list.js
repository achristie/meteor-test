import React from 'react';
import ImageDetail from './image_detail';

const ImageList = (props) => {
  const validImages = props.images.filter(i => !i.is_album)
  const RenderedImages = validImages.map((i) => {
    return <ImageDetail key={i.title} image={i} />
  });

  return (
    <ul className='media-list list-group'>
      {RenderedImages}
    </ul>
  );
};

export default ImageList;
