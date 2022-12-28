import { AiFillHeart, AiFillLinkedin } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-200 py-3 text-[16.5px] md:text-lg">
      <div className="container w-[95%] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-1">
          Made with{' '}
          <span>
            <AiFillHeart className="text-primary" />
          </span>{' '}
          by Rakib Ahmed
        </div>
        <div className="flex items-center gap-2 text-[18px] md:text-lg">
          <a
            href="mailto:rakibahmed34360@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail />
          </a>
          <a
            href="https://github.com/Rakib-Ahmed01"
            target="_blank"
            rel="noreferrer"
          >
            <DiGithubBadge />
          </a>
          <a
            href="https://www.linkedin.com/in/rakib-ahmed34360/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
