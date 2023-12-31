import styles from "../styles/style.module.css";
const PreviousPhoto = () => {
  return (
    <svg
      width="15"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
      transform="scale(0.8)"
    >
      <path
        className={styles.previous}
        d="M11 1 3 9l8 8"
        stroke="#1D2026"
        stroke-width="3"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default PreviousPhoto;
