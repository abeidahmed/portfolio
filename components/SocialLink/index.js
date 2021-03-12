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

export function SocialLink({ classes }) {
  return (
    <ul className="flex items-center space-x-5">
      {socialLinks.map((link) => (
        <li key={link.icon}>
          <a
            href={link.to}
            target={link.newTab ? '_blank' : null}
            rel={link.newTab ? 'external noopener noreferrer nofollow' : null}
            aria-label={link.name}
            className={`transition duration-150 ease-in-out ${classes}`}
          >
            <Icon icon={link.icon} className="w-6 h-6" />
          </a>
        </li>
      ))}
    </ul>
  );
}
