import Image from 'next/image';
import Link from 'next/link';
import { PatientForm } from '@/components/forms/PatientForm';
import { PasskeyModal } from '@/components/PasskeyModal';
import BottomNavBar from '@/components/BottomNavBar';

const Home = ({ searchParams }) => {
  const isAdmin = searchParams?.admin === 'true';

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">
        <div className="flex h-screen max-h-screen">
          {isAdmin && <PasskeyModal />}

          <section className="remove-scrollbar container my-auto">
            <div className="sub-container max-w-[496px]">
              <Image
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                alt="patient"
                className="mb-12 h-10 w-fit"
              />

              <PatientForm />

              <div className="text-14-regular mt-20 flex justify-between">
                <p className="justify-items-end p-2 text-white xl:text-left">
                  © 2024 Medical E-Card
                </p>
                <Link href="/?admin=true" className="btn-info">
                  Admin
                </Link>
              </div>
            </div>
          </section>

          <Image
            src="/assets/images/patient-4.jpg"
            height={1000}
            width={1000}
            alt="patient"
            className="side-img max-w-[50%]"
          />
        </div>
      </main>
      <BottomNavBar />
    </div>
  );
};

export default Home;
