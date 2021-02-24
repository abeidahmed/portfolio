import Head from 'next/head';
import { Footer } from 'components/Footer';
import { Intro } from 'components/Intro';
import ComponentTemplate from 'projects/componentTemplate';
import EasyHues from 'projects/easyHues';
import FeederFish from 'projects/feederFish';
import StylishVscode from 'projects/stylishVscode';
import RailsHeroicon from 'projects/railsHeroicon';

export default function Index() {
  return (
    <>
      <Head>
        <title>Abeid Ahmed | Full-stack web-developer</title>
      </Head>
      <main className="min-h-screen lg:grid lg:grid-cols-12 lg:gap-6">
        <div className="flex items-center min-h-screen px-4 py-10 sm:px-16 lg:col-span-5">
          <Intro />
        </div>
        <div className="lg:flex lg:flex-col lg:h-screen lg:col-span-7 lg:overflow-y-auto">
          <FeederFish />
          <RailsHeroicon />
          <StylishVscode />
          <ComponentTemplate />
          <EasyHues />
          <Footer />
        </div>
      </main>
    </>
  );
}
