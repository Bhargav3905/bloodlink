import Loader from './Loader';

const ButtonLoader = () => {
  return (
    <span className="mr-2 inline-flex items-center">
      <Loader size="sm" className="border-white border-t-transparent" />
    </span>
  );
};

export default ButtonLoader;
