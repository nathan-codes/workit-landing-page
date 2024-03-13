interface SecondaryButtonProps {
  text: string;
}

const SecondaryButton = (props: SecondaryButtonProps) => {
  return (
    <button className="border-b-[3px]  text-base border-b-green-400 font-bold hover:text-green-400 transition-all leading-loose">
      <span>{props.text}</span>
    </button>
  );
};

export default SecondaryButton;
