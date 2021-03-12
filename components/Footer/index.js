import { SocialLink } from 'components/SocialLink';

export function Footer() {
  return (
    <footer className="px-4 py-5 text-gray-400 bg-gray-900 sm:px-16 lg:px-4">
      <section className="xl:pl-8">
        <h3 className="text-gray-200">
          Satisfied by my work? Let's work together.
        </h3>
        <div className="mt-3">
          <SocialLink classes="text-gray-300 hover:text-white" />
        </div>
      </section>
      <hr className="border-gray-700 my-4 xl:mx-8" />
      <div className="text-sm sm:flex sm:items-center sm:justify-between">
        <div className="xl:pl-8">
          &#169; 2021 Abeid Ahmed. All Rights Reserved.
        </div>
        <div className="mt-3 sm:mt-0 xl:pr-8">
          Icons by{' '}
          <a
            href="https://boxicons.com/"
            target="_blank"
            rel="external noopener noreferrer nofollow"
            className="hover:underline"
          >
            Boxicons
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
