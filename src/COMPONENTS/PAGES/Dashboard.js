import "./Pages.css";
import styles from "./Dashboard.module.css";
import vendas from "../IMAGES/vendas.png";

export default function Dashboard() {
  function boxVendas() {}

  return (
    <div className="wrapper_page">
      <h1>Conteudo pagina Dashboard</h1>
      <div className={styles.body_dash}>
        <div>
          <form>
            <label>ITEM</label>
          </form>
        </div>

        <div
          className={styles.card_dash}
          onClick={boxVendas}
          id={styles.vendas}
        >
          <img src={vendas} alt="vendas" />
          <p>Vendas</p>
        </div>
      </div>
    </div>
  );
}
