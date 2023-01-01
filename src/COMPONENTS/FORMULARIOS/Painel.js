import styles from "./Painel.module.css";

import { useState } from "react";

import ErrorBoundary from "../UTIL/ErrorBoundary";

import Power from "../IMAGES/power.png";
import FormUsers from "./USUARIOS/FormUsers";
import Message from "../AVISOS/Message";
import FormCustomers from "./CLIENTES/FormCustomers";
import FormProducts from "./PRODUTOS/FormProducts";

export default function Painel() {
  const [showForm] = useState(getForm() || "");
  const [user, setUser] = useState({});
  const [showMsg, setShowMsg] = useState([false]);
  const [busca, setBusca] = useState();
  const [showBtn, setShowBtn] = useState(false);
  const [alterar, setAlterar] = useState(false);
  const [userAltera, setUserAltera] = useState({});
  const [showBtnSalva, setShowBtnSalva] = useState(false);
  const [showTitulo] = useState(getForm() || '');
  const url = 'https://639484544df9248eada48b34.mockapi.io/'

  function getForm() {
    let keyForm = sessionStorage.getItem("keyIcone");
    keyForm = JSON.parse(keyForm);
    return keyForm;
  };

  function HandleChange(e) {
    let name = e.target.name;
    let valo = e.target.value;
    let dcto = document.getElementById(`${name}`);

    switch (name) {
      case "contato":
        dcto.value = valo
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d{5})(\d{4})/g, "($1) $2-$3");
        valo = dcto.value;
        break;
      case "nascimento":
        dcto.value = valo
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d{2})(\d{4})/g, "$1/$2/$3");
        valo = dcto.value;
        break;
      case "cpf":
        dcto.value = valo
          .replace(/\D/g, "")
          .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
        valo = dcto.value;
        break;
      case "cep":
        dcto.value = valo
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d{3})(\d{3})/g, "$1.$2-$3");
        valo = dcto.value;
        if (dcto.value.length === 10) {
          buscaCep();
        }
        break;

      default:
        break;
    }

    setUser((val) => ({ ...val, [name]: valo.toUpperCase() }));
    setUserAltera((val) => ({ ...val, [name]: valo.toUpperCase() }));
    if (
      Object.keys(user).length ===
      document.getElementsByClassName("inputClass").length - 1
    ) {
      setShowBtnSalva(true);
    }
  };

  function OpenForm() {
    switch (showForm) {
      case "iconUser": return <FormUsers HandleChange={HandleChange} />
      //break;
      case "iconCustomer": return <FormCustomers HandleChange={HandleChange} />
      //break;
      case "iconProducts": return <FormProducts HandleChange={HandleChange} />
      //break;

      default:
        break;
    }
  };

  function tituloHeader() {

    switch (showTitulo) {
      case "iconUser": return 'USUARIOS';
        break;
      case "iconCustomer": return 'CLIENTES'
        break;
        case "iconProducts": return 'PRODUTOS'
        break;

      default:
        break;
    }
  };

  function buscaCep() {
    let cep = document.getElementById("cep").value;
    fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((resp) => resp.json())
      .then((data) => {
        let ruaValue = (document.getElementById("rua").value = data.street);
        let baiValue = (document.getElementById("bairro").value =
          data.neighborhood);
        let cidValue = (document.getElementById("cidade").value = data.city);
        let estValue = (document.getElementById("estado").value = data.state);

        setUser((e) => ({
          ...e,
          ["rua"]: ruaValue,
          ["bairro"]: baiValue,
          ["cidade"]: cidValue,
          ["estado"]: estValue
        }));

        let url = `https://brasilapi.com.br/api/cep/v1/39404404`;

        console.log(url);
      });
  };

  function HandleSubmit(e) {
    e.preventDefault();
    if(OpenForm() === 'iconUser'){
    if (
      document.getElementById("senhaRep").value ===
      document.getElementById("senha").value
    ) {
      dataBase();
    } else {
      setShowMsg([true, "error", "SENHA INCOMPACTIVEL"]);
      setTimeout(() => {
        setShowMsg([false]);
      }, 3000);
    }
  }else{
    dataBase();
  }
 
    console.log(user);
  };

  function closeForm() {
    sessionStorage.removeItem("keyIcone");
    window.location.reload();
    sessionStorage.removeItem('dataForm')
  };

  const info = tituloHeader();
  const api = `https://639484544df9248eada48b34.mockapi.io/${info}`;

  function dataBase() {

    if (Object.keys(user).length > 1) {
      fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (document.getElementById("check").checked) {
            setShowMsg([true, "success", "USUARIO CADASTRADO!"]);
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          } else {
            setShowMsg([true, "success", "USUARIO CADASTRADO!"]);
            sessionStorage.removeItem("keyIcone");
            setTimeout(() => {
             window.location.reload();
            }, 3000);
          }
        });
    } else {
      setShowMsg([true, "error", "FALHA NO CADASTRO!"]);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  function buscaDados() {
    let key = Object.keys(user);
    let val = Object.values(user);
    val = val.toString();
    // let id = document.getElementById('id').value;

    if (key.length > 0) {
      fetch(
        `${api}?${key}=${val}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        }
      )
        .then((resp) => resp.json())
        .then((data) => {
          if (data.length > 0) {
            setBusca(data[0]);
            setUser(data[0]);
            setShowBtn(true);
            console.log(data[0]);
            sessionStorage.setItem('dataForm',JSON.stringify(data))
          } else {
            setShowMsg([true, "error", "USUARIO NÃO EXISTENTE!"]);
            setTimeout(() => {
              setShowMsg([false, "", ""]);
              window.location.reload();
            }, 3500);
          }
        });
    }
  };

  if (showBtn) {
    document.getElementById("btnDelete").style.visibility = "visible";
    document.getElementById("btnAltera").style.visibility = "visible";
  };

  if (busca) {
    let listKey = Object.keys(busca);
    let listVal = Object.values(busca);

    for (let index = 0; index < listKey.length; index++) {
      document.getElementById(listKey[index]).value = listVal[index];
    }
  };

  function deletaDados() {
    const text = (
      <>
        <p>APAGAR USUÁRIO</p>
        <p>{user.nome + user.sobrenome} ?</p>
      </>
    );

    setShowMsg([true, "confirm", text, HandleDelete]);
  };

  function HandleDelete(e) {
    let res = e.target.value;
    if (res === "SIM") {
      fetch(
        `${api}/${user.id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" }
        }
      )
        .then((resp) => resp.json())
        .then((data) => {
          setShowMsg([true, "success", "DADOS APAGADOS!"]);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        })
        .catch(console.error());
    } else {
      setShowMsg([false]);
    }
  };

  function alteraDados() {
    document.getElementById("btnAltera").setAttribute("disabled", true);
    setBusca();
    setUserAltera({});
    setAlterar(true);
    setShowBtnSalva(true);
  };

  function alteraConf() {
    fetch(
      `${api}/${user.id}`,
      {
        method: "PUT", // A API NÃO ACEITA PATCH
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setShowMsg([true, "success", "DADOS ALTERADOS COM SUCESSO"]);

        setUser(data);
        setBusca(data);
        setAlterar(false);
        setShowBtnSalva(false);
        document.getElementById("btnAltera").removeAttribute("disabled");
        document.getElementById("id").value = user.id;
        setTimeout(() => {
          setShowMsg([false]);
        }, 3000);
        console.log(data);
      });
  };

  function limpaForm() {
    setBusca({});
    setUser({});
    sessionStorage.removeItem('dataForm');
  };

  return (
    <ErrorBoundary>
      <div className={styles.wrapper_painel}>
        {showMsg[0] && (
          <Message
            type={showMsg[1]}
            msg={showMsg[2]}
            Handle={showMsg[3] || ""}
          />
        )}
        <div className={styles.painel_form}>
          <div className={styles.painel_head}>
            <h3>CADASTRO DE {tituloHeader()}</h3>
            <img src={Power} alt="Power" onClick={closeForm} />
          </div>

          <div className={styles.painel_body}>
            <form onSubmit={HandleSubmit}>
              {OpenForm()}

              <div className={styles.btn_form}>
                <div>
                  <h5>CONTINUA?</h5>
                  <input type={"checkbox"} id={"check"} />
                </div>
                <div>
                  {showBtnSalva &&
                    (alterar ? (
                      <input
                        type={"button"}
                        value="SALVAR"
                        onClick={alteraConf}
                        id="btnSalva"
                      />
                    ) : (
                      <input type={"submit"} value="SALVAR" id="btnSalva" />
                    ))}
                  <input
                    type={"button"}
                    style={{ visibility: "hidden" }}
                    onClick={deletaDados}
                    id="btnDelete"
                    value="DELETAR"
                  />
                  <input type={"button"} onClick={buscaDados} value="BUSCAR" />
                  <input
                    type={"button"}
                    style={{ visibility: "hidden" }}
                    onClick={alteraDados}
                    id="btnAltera"
                    value="ALTERAR"
                  />
                  <input type={"reset"} value={"LIMPAR"} onClick={limpaForm} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
