import * as React from "react";
import { withRouter } from "react-router-dom";

const MorseScreen: React.FC = () => {
  const img = process.env.PUBLIC_URL + "/images/";
  const words = [
    ["shell", "3.505 MHz"], ["halls", "3.515 MHz"], ["slick", "3.522 MHz"],
    ["trick", "3.532 MHz"], ["boxes", "3.535 MHz"], ["leaks", "3.542 MHz"],
    ["strobe", "3.545 MHz"], ["bistro", "3.552 MHz"], ["flick", "3.555 MHz"],
    ["bombs", "3.565 MHz"], ["break", "3.572 MHz"], ["brick", "3.575 MHz"],
    ["steak", "3.582 MHz"], ["sting", "3.592 MHz"], ["vector", "3.595 MHz"],
    ["beats", "3.600 MHz"],
  ];
  return (
    <React.Fragment>
      <img src={img + "MorseCodeComponent.svg"} className="diagram" alt="モールス信号モジュール" style={{float:"right", maxWidth:"200px"}} />
      <h2>モジュール詳細：モールス信号</h2>
      <p><em>こんな時代遅れの通信手段がなぜここに？まあ、爆弾を解除する過程で新しい知識が身につく（かもしれない）のが、せめてもの救いか。</em></p>
      <ul>
        <li>点滅する光はモールス信号でなんらかの単語になっている。</li>
        <li>光の点滅は長い休止をはさみ、何度も繰り返される。</li>
        <li>単語が判明したら、対応する周波数にあわせて「送信」ボタンを押す。</li>
      </ul>
      <p>モールス信号の読み方：1.短い点灯は点　2.長い点灯はダッシュ　3.文字間には長い休止　4.単語間には非常に長い休止</p>
      <img src={img + "morse-signals.svg"} alt="モールス信号一覧" style={{maxWidth:"100%", margin:"8px 0"}} />
      <h3>単語と周波数対応表</h3>
      <table style={{border:"1px solid #999", borderCollapse:"collapse"}}>
        <thead>
          <tr><th style={{padding:"4px 16px"}}>単語</th><th style={{padding:"4px 16px"}}>周波数</th></tr>
        </thead>
        <tbody>
          {words.map(([word, freq]) => (
            <tr key={word}><td style={{padding:"2px 16px"}}>{word}</td><td style={{padding:"2px 16px"}}>{freq}</td></tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default withRouter(MorseScreen);
