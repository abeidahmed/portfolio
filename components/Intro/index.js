import { Icon } from 'components/Icons';

const socialLinks = [
  {
    name: 'email to abeidahmed948@gmail.com',
    icon: 'mail',
    to: 'mailto:abeidahmed948@gmail.com',
    newTab: false,
  },
  {
    name: 'linkedin',
    icon: 'linkedin',
    to: 'https://www.linkedin.com/in/abeidahmed/',
    newTab: true,
  },
  {
    name: 'twitter',
    icon: 'twitter',
    to: 'https://twitter.com/iamhawaabi',
    newTab: true,
  },
  {
    name: 'github',
    icon: 'github',
    to: 'https://github.com/abeidahmed',
    newTab: true,
  },
];

export function Intro() {
  return (
    <div className="max-w-md lg:ml-auto">
      <h1 className="text-5xl font-medium text-gray-800">Abeid Ahmed</h1>
      <p className="text-xl mt-2">
        I am a web developer with several years of experience developing
        high-quality projects with Ruby on Rails and React.
        <span className="block mt-2">
          I invite you to browse through some of my work below.
        </span>
      </p>
      <div className="mt-5">
        <a
          href="https://drive.google.com/file/d/1XoDR3y3nK_Ty5HSe6CRt-NUKCzLGwTF8/view"
          target="_blank"
          rel="external noopener noreferrer nofollow"
          className="text-xl inline-flex items-center hover:underline"
        >
          See my resume
          <Icon icon="link-external" className="w-4 h-4 ml-1" />
        </a>
      </div>
      <div className="mt-10">
        <h4 className="text-xl font-medium">Let's work together</h4>
        <ul className="flex items-center mt-4 space-x-5">
          {socialLinks.map((link) => (
            <li key={link.icon}>
              <a
                href={link.to}
                target={link.newTab ? '_blank' : null}
                rel={
                  link.newTab ? 'external noopener noreferrer nofollow' : null
                }
                aria-label={link.name}
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
