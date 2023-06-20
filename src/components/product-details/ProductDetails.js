import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
export default function ProductDetails(props) {
  const product = props.product;

  return (
    <>
      <section className={styles.container}>
        <div className={styles.innerContainer}>
          {product.new && (
            <p
              id="overline--small-text"
              className="overline overline--current-product"
            >
              New Product
            </p>
          )}
          <h2 className={styles.heading}>{product.name}</h2>
          <p className={styles.text}>{product.description}</p>
          <div className={styles.priceContainer}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={faDollarSign} />
            </div>
            <div className="price">{props.product.priceString}</div>
          </div>
          <div className={styles.addToCart}>
          </div>
        </div>
      </section>
    </>
  );
}