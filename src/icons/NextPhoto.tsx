import styles from "../styles/style.module.css";
const NextPhoto = () => {
  return (
    <svg
      width="13"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
      transform="scale(0.8)"
    >
      <path
        className={styles.next}
        d="m2 1 8 8-8 8"
        stroke="#1D2026"
        stroke-width="3"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default NextPhoto;
