import { FC } from "react";
import { IconType } from "react-icons";

type CardProps = {
  icon: IconType;
  heading: string;
  text: string;
};

const AboutCard: FC<CardProps> = ({ icon: Icon, heading, text }) => {
  return (
    <>
      <div className="flex flex-col border items-center rounded-2xl py-12 px-8">
        <div className="text-[var(--primary-blue)]">{<Icon size={40} />}</div>
        <h3 className="text-xl font-bold py-4">{heading}</h3>
        <p>{text}</p>
      </div>
    </>
  );
};

export default AboutCard;
