import { HashLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div className="w-full h-screen z-50 absolute flex justify-center items-center bg-white">
      <HashLoader color="#0A2647" />
    </div>
  );
}
