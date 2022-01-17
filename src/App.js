// import { useState} from "react";
// import { useEffect } from "react/cjs/react.development";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [current, setCurrent] = useState("");
  const [price, setPrice] = useState("");
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then(
      (json)=>{
        setCoins(json);
      }
      );
    },[]);
    const onChange = (event) => {
      setCurrent(event.target.value);
      setLoading(false);
  };
  const onChangeprice = (event) => {
    setPrice(event.target.value);
  };
  return(
    <div>
      <h1>The coins! {loading ? null: `(${coins.length})`}</h1>
      <h2>{current? `현재 보유하고 있는 달러:${current}USD`: "투자할 달러를 알려주세요"}</h2>
      <input type="number" placeholder="00.00" value={current} onChange={onChange}/>
      {loading ? (
        <strong>달러를 입력하세요</strong>
        ) : (
          <select onChange={onChangeprice}>
          <option>전체</option>
          {coins.map((coin) =>(
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol} : {coin.quotes.USD.price})
            </option>
            )
            )}
          </select> 
      )}
      <div><h2>{price? `당신은 선택하신 코인을 ${current/price}개 사실 수 있으십니다.`:null}</h2></div>

    </div>
  );
}

export default App;
