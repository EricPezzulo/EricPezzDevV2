const button = ({
  btnTitle,
  btnColor,
  borderRadius,
  btnTextColor,
  paddingX,
  paddingY,
  textSize,
  fontWeight,
  fontStyle,
  hover,
  ifClicked,
}) => {
  return (
    <div>
      <button
        onClick={ifClicked}
        className={`flex ${btnColor} ${textSize} ${btnTextColor} ${paddingX} ${paddingY} ${borderRadius} ${fontWeight} ${fontStyle} ${hover}`}
      >
        {btnTitle}
      </button>
    </div>
  );
};

export default button;
