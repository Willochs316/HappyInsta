const GalleryImageData = ({ className, src }) => {
  return (
    <div>
      <img className={className} src={src} alt="" />
    </div>
  );
};

export default GalleryImageData;
