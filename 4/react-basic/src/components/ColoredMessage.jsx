export const ColoredMessage = (props) => {
  // Propsを分割代入
  const { color, fontSize, children } = props;

  const contentStyle = {
    color,
    fontSize,
  };

  return <p style={contentStyle}>{children}</p>;
};
