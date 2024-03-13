interface PrimaryButtonProps {
  text: string;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <button className="w-[161px] h-[61px]  font-bold bg-green-400 text-black drop-shadow-md hover:bg-transparent hover:border-2 hover:border-green-400 hover:text-green-400 transition-all">
      {props.text}
    </button>
  );
};

export default PrimaryButton;
