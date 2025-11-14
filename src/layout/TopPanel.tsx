import { Link } from "@tanstack/react-router";

export default function TopPanel() {
  return (
    <>
      <div className="text-base font-medium text-center text-gray-500 border-1 border-gray-300 bg-gray-50">
        <ul className="flex flex-wrap justify-center">
          <MenuItem to="/" text="New Record" subtext="home" />
          <MenuItem to="/records/" text="Records" subtext="edit / del" />
          <MenuItem to="/about" text="About" subtext="info" />
        </ul>
      </div>
    </>
  );
}

interface MenuItemProps {
  text: string;
  subtext?: string;
  to: string;
}

function MenuItem({ text, subtext, to }: MenuItemProps) {
  return (
    <li className="me-4 flex items-stretch">
      <Link
        to={to}
        className="p-8 pb-4 pt-4 border-b-2 border-transparent text-xl leading-none
              hover:text-gray-600 hover:border-gray-300
              [&.active]:border-blue-600 [&.active]:text-blue-600"
      >
        {text}
        {subtext && (
          <>
            <br />
            <span className="text-xs">{subtext}</span>
          </>
        )}
      </Link>
    </li>
  );
}
