import { Intro } from 'components/Intro';
import FeederFish from 'projects/feederFish';

export default function Index() {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-12 lg:gap-6">
      <div className="flex items-center min-h-screen px-4 py-10 sm:px-16 lg:col-span-5">
        <Intro />
      </div>
      <div className="lg:col-span-7 lg:overflow-y-auto lg:flex lg:flex-col lg:h-screen">
        <FeederFish />
      </div>
    </main>
  );
}
