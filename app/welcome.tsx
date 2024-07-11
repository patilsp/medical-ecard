import Image from 'next/image';
import Link from 'next/link';

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Top Image */}
      <div className="relative w-full max-w-4xl">
        <Image
          src="/assets/images/welcome-image.jpg" // Replace with your image path
          alt="Welcome"
          layout="fill"
          objectFit="cover"
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center mt-10 p-4 bg-white shadow-lg rounded-lg max-w-lg w-full mx-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Medical Ecard Welcome</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Welcome to Medical Ecard, where managing your health records is just a click away. 
          Our platform offers an easy and secure way to access and manage your medical information.
        </p>
        <Link href="/home" passHref>
          <button className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-indigo-600 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
