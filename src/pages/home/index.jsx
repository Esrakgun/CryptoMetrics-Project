// İmport alanı:
import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import CoinItem from "../../components/CoinItem";

const Home = () => {
  // Context'e abone olmaya geldik ve context yapısınan verileri aldık:
  const { allCoin } = useContext(CoinContext);
  // console.log(context);

  // Bileşen ekrana geldiğinde Displaycoin'in değerini Api'den gelen tüm coinler olarak ata:
  useEffect(() => {SetDisplayCoin(allCoin);}, [allCoin]);

  // State Alanı:
  const [displayCoin, SetDisplayCoin] = useState([allCoin]);
  const [input, SetInput] = useState("");

  // Aratılan Kelimeyi tüm coinler İçerisinde Filtrele ve bulunan coini Renderla:
  const searchHandler = (e) => {
    // Sayfa yenilenmesini engelle:
    e.preventDefault();
    // console.log(`Form Gönderildi..`);

    // İnput'a girilen coin Adına Göre Tüm Coinler Arasında Filtreleme yap:
    const filtredCoin = allCoin.filter((item) => item.name.includes(input));

    SetDisplayCoin(filtredCoin);

  };
  //  İnput Değiştiğinde Gelen Kelimeyi İnputState'tine atadık:
  const inputHandler = (e) => {

    if (e.target.value === '') {

    }

    // Değer Değiştiğinde input'a yeni değeri ata:
    SetInput(e.target.value);
  }

  // console.log(allCoin);
  console.log(input);

  return (
    <div className="px-4">
      {/* Top : */}
      <div className="max-w-2xl mx-auto my-16 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold leading-tight text-center"> Largest <br /> Crypto Marketplace</h1>
        <p className="w-3/4 text-[#e3e3e3] leading-7 ">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>

        {/* Form: */}
        <form
          onSubmit={searchHandler}
          className="flex w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
          <input
            type="text"
            className="flex-1 px-4 py-2 text-base border-none text-black "
            placeholder="Search Crypto..."
            value={input}
            onChange={inputHandler}
            list="coinlist" />

          {/* DataList ile bizler,İnput işlemesi yaptık inputa otomatik tanımlama desteği sunabiliriz. */}

          <datalist id="coinlist">
            {/* BitCoin İsimleri bu sayede Dinamai hale geldi: */}
            {allCoin.map((item, key) => (<option key={key}>{item.name}</option>))}
          </datalist>

          <button
            type="submit"
            className="bg-[#7927ff] px-5 py-2 font-semibold hover:opacity-50">Search
          </button>
        </form>
      </div>

      {/* Coin List Alanı: */}
      <div className="max-w-4x mx-auto bg-[#141414] rounded-lg shadow-lg overflow-hidden">
        {/* Title */}
        <div className="grid grid-cols-3 md:grid-cols-[0.5fr_2fr_1fr_1fr] p-4 bg-[#222] font-semibold">
          <p>#</p>
          <p>Coins</p>
          <p className="text-center">Price</p>
          <p className="hidden md:block text-right">24H Change</p>
        </div>
        {/* Coins: */}
        {displayCoin.map((item, key) => (
          <CoinItem key={key} item={item}/>
         ))}
      </div>
    </div>


  );

};

export default Home;












