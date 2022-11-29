import styles from "./Card.module.css";

type CardProps = {
  /**
   * Content/markup to pass into the card
   */
  children: React.ReactNode;
  /**
   * Url for the card to link to
   */
  link: string;
  /**
   * Featured style for the card
   */
  featured?: boolean;
};

// export const Button = ({
export const Card = ({ children, link, featured = false }: CardProps) => {
  return (
    <a href={link} className={styles.card}>
      {children}
      {featured ? "!!!" : ""}
    </a>
  );
};
