import { createContext, useEffect, useState } from "react";
import api from "../utils/api";

const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {

    // State Alanı:
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$",
    });


    // Api'den Coinleri Alan foksiyonu Oluştur:
    const fetchAllCoin = () => {
        api
            .get("/coins/markets", { params: { vs_currency: currency.name } })
            .then((res) => setAllCoin(res.data))
            .catch((err) => { alert("Coin Verilerini Alırken Bir Hata Oluştu", err); }
            );
    };

    useEffect(() => {
        fetchAllCoin()
    }, [currency]);

    // console.log(currency);


    //Context Yapısından bize gelicek veriler:
    const contextValue = {currency , allCoin, setCurrency }
    return (
        <CoinContext.Provider value={contextValue}>
            {/*  */}
            {children}
        </CoinContext.Provider>
    );
};

export { CoinContextProvider, CoinContext };
