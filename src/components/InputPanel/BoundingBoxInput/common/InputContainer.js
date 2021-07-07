function InputContainer({ children, title, containerStyle, titleStyle }) {
  return (
    <label className="input-element-container" style={containerStyle}>
      <span style={titleStyle}>{title}</span>
      {children}
    </label>
  );
}

export default InputContainer;
