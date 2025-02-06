interface IconsType {
  id: string;
  width?: string;
  height?: string;
  classes?: string;
}

const Icons = ({ id, classes, width = "20", height = "20" }: IconsType) => {
  return (
    <svg
      width={width}
      height={height}
      className={classes}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  );
};

export default Icons;
