interface IconsType {
  id: string;
  classes?: string;
}

const Icons = ({ id, classes }: IconsType) => {
  return (
    <svg
      width={20}
      height={20}
      className={classes}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  );
};

export default Icons;
