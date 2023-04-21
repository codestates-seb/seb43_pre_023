import sprites from "../assets/images/sprites.svg";

const Footer = () => {
  return (
    <div className="flex-col">
      <div className="flex pr-4 py-8 align-top text-soGray-light bg-soGray-footerbg">
        <div className="flex mx-5">
          <div
            className="w-[31px] h-[37px] bg-no-repeat bg-[0_-500px]"
            style={{ backgroundImage: `url(${sprites})` }}
          ></div>
        </div>
        <div className="mt-2 mb-8 grow">
          <div className="font-bold mb-4">STACK OVERFLOW</div>
          <div className="flex mt-2 flex-col text-[hsl(210,8%,60%)] text-xs">
            <a href="/" className="mb-2">
              Questions
            </a>
            <a href="https://stackoverflow.com/help">Help</a>
          </div>
          <div className="mt-4 text-xxs">
            Site design / logo © 2022 Stack Exchange Inc; user contributions
            licensed under CC BY-SA. rev 2022.10.28.42999
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
