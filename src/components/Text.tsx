interface TextProps {
  children: React.ReactNode;
  dataTestID?: string;
}

export default function Text({ children, dataTestID }: TextProps) {
  return <p data-testid={dataTestID}>{children}</p>;
}
