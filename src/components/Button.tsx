interface ButtonProps {
  label: string;
  isDisabled?: boolean;
  onClick: () => void;
}

export default function Button({ label, isDisabled, onClick }: ButtonProps) {
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {label}
    </button>
  );
}
