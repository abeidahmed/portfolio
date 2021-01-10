import { Icon } from 'components/Icons';

const socialLinks = [
  {
    icon: 'mail',
    to: 'mailto:abeidahmed948@gmail.com',
  },
  {
    icon: 'linkedin',
    to: 'https://www.linkedin.com/in/abeid-ahmed-b21882172/',
  },
  {
    icon: 'twitter',
    to: 'https://twitter.com/iamhawaabi',
  },
  {
    icon: 'github',
    to: 'https://github.com/abeidahmed',
  },
];

export function Intro() {
  return (
    <div className="max-w-md lg:ml-auto">
      <h1 className="text-4xl font-medium text-gray-800">Abeid Ahmed</h1>
      <p className="mt-2">
        is building web-applications for more than 2 years with Ruby on Rails and React.
      </p>
      <div className="mt-5">
        <a href="#" className="hover:underline">
          See my resume
        </a>
      </div>
      <div className="mt-10">
        <h4 className="text-xl font-medium">Let's work together</h4>
        <ul className="flex items-center mt-4 space-x-5">
          {socialLinks.map((link) => (
            <li key={link.icon}>
              <a
                href={link.to}
                target="_blank"
                rel="external noopener noreferrer nofollow"
                className="text-gray-700 transition duration-150 ease-in-out hover:text-gray-500"
              >
                <Icon icon={link.icon} className="w-6 h-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
