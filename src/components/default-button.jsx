function DefaultButton({ text, className, onClick }) {
  return (
    <button className={`default-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default DefaultButton;
