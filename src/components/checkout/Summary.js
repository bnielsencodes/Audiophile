import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

export default function Summary(props) {
  return (
    <>
      <div className={styles.summary}>
        <h4 className={styles.heading}>Summary</h4>

        <div className={styles.totalSection}>
          <div className={styles.totalTopContainer}>
            <div className={styles.totalItem}>
              <p className={styles.totalItemHeading}>Total</p>
              <div className={styles.priceContainer}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faDollarSign} />
                </div>
                <p className={styles.price}>{cart.getTotalCost(0)}</p>
              </div>
            </div>

            <div className={styles.totalItem}>
              <p className={styles.totalItemHeading}>Shipping</p>
              <div className={styles.priceContainer}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faDollarSign} />
                </div>
                <p className={styles.price}>50</p>
              </div>
            </div>

            <div className={styles.totalItem}>
              <p className={styles.totalItemHeading}>VAT (Included)</p>
              <div className={styles.priceContainer}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faDollarSign} />
                </div>
                <p className={styles.price}>{cart.getVAT()}</p>
              </div>
            </div>
          </div>

          <div className={`${styles.totalItem} ${styles.grandTotal}`}>
            <p className={styles.totalItemHeading}>Grand Total</p>
            <div
              className={`${styles.priceContainer} ${styles.grandTotalPriceContainer}`}
            >
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <p className={styles.price}>{cart.getTotalCost(50)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
