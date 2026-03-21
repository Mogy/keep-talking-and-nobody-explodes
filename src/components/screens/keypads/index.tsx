import * as React from "react";
import { withRouter } from "react-router-dom";

const KeyPadsScreen: React.FC = () => {
  const img = process.env.PUBLIC_URL + "/images/";
  const syms = [
    ["28-balloon","13-at","30-upsidedowny","12-squigglyn","7-squidknife","9-hookn","23-leftc"],
    ["16-euro","28-balloon","23-leftc","26-cursive","3-hollowstar","9-hookn","20-questionmark"],
    ["1-copyright","8-pumpkin","26-cursive","5-doublek","15-meltedthree","30-upsidedowny","3-hollowstar"],
    ["11-six","21-paragraph","31-bt","7-squidknife","5-doublek","20-questionmark","4-smileyface"],
    ["24-pitchfork","4-smileyface","31-bt","22-rightc","21-paragraph","19-dragon","2-filledstar"],
    ["11-six","16-euro","27-tracks","14-ae","24-pitchfork","18-nwithhat","6-omega"],
  ];
  return (
    <React.Fragment>
      <img src={img + "KeypadComponent.svg"} className="diagram" alt="キーパッドモジュール" style={{float:"right", maxWidth:"200px"}} />
      <h2>モジュール詳細：キーパッド</h2>
      <p><em>これらの記号が何を意味するのかは不明だが、なんらかのオカルトとの関連が疑われている。</em></p>
      <ul>
        <li>下記の各列の中で、モジュールについている4つのキーすべてが含まれているのは1列しか存在しない。</li>
        <li>該当の列の上から順番にキーを押す。</li>
      </ul>
      <table style={{border:"1px solid #999", borderCollapse:"collapse"}}>
        <thead>
          <tr>
            {["列1","列2","列3","列4","列5","列6"].map(c => <th key={c} style={{padding:"4px 12px"}}>{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {[0,1,2,3,4,5,6].map(row => (
            <tr key={row}>
              {syms.map((col, ci) => col[row] ? (
                <td key={ci} style={{textAlign:"center", padding:"4px"}}>
                  <img src={img + col[row] + ".png"} alt={col[row]} style={{width:"48px", height:"48px"}} />
                </td>
              ) : <td key={ci}></td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default withRouter(KeyPadsScreen);
