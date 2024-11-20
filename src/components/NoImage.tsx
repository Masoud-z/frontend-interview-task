interface NoImageProps {
  className?: string;
}

const NoImage: React.FC<NoImageProps> = ({ className }) => {
  return (
    <div
      className={`bg-gray-400 flex justify-center font-bold items-center ${className}`}
    >
      No Image
    </div>
  );
};

export default NoImage;
