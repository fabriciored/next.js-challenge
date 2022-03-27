import styles from "./button.module.scss";

interface ButtonTypes {
  text: string;
  dark?: boolean;
}

const Button = (props: ButtonTypes) => {
  return (
    <>
      {props.dark ? (
        <div className={styles.buttonDark}>
          <p className={styles.buttonText}>{props.text}</p>
        </div>
      ) : (
        <div className={styles.buttonLight}>
          <p className={styles.buttonText}>{props.text}</p>
        </div>
      )}
    </>
  );
};

export default Button;
