function InputGroupContainer({ children, title, customStyles }) {
  return (
    <div className="input-element-container">
      <span>{title}</span>
      <ul style={customStyles}>{children}</ul>
    </div>
  );
}

export default InputGroupContainer;
