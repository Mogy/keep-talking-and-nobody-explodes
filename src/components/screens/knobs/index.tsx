import * as React from "react";
import { withRouter } from "react-router-dom";

const KnobsScreen: React.FC = () => {
  const img = process.env.PUBLIC_URL + "/images/";

  const positions = [
    {
      label: "上位置",
      patterns: [
        [[" "," ","X"," ","X","X"],["X","X","X","X"," ","X"]],
        [["X"," ","X"," ","X"," "],[" ","X","X"," ","X","X"]],
      ],
    },
    {
      label: "下位置",
      patterns: [
        [[" ","X","X"," "," ","X"],["X","X","X","X"," ","X"]],
        [["X"," ","X"," ","X"," "],[" ","X"," "," "," ","X"]],
      ],
    },
    {
      label: "左位置",
      patterns: [
        [[" "," "," "," ","X"," "],["X"," "," ","X","X","X"]],
        [[" "," "," "," ","X"," "],[" "," "," ","X","X"," "]],
      ],
    },
    {
      label: "右位置",
      patterns: [
        [["X"," ","X","X","X","X"],["X","X","X"," ","X"," "]],
        [["X"," ","X","X"," "," "],["X","X","X"," ","X"," "]],
      ],
    },
  ];

  const cellStyle: React.CSSProperties = {
    width:"24px", height:"24px", textAlign:"center", border:"1px solid #999",
    fontWeight:"bold", color:"red"
  };

  return (
    <React.Fragment>
      <img src={img + "NeedyKnobComponent.svg"} className="diagram" alt="ダイアルモジュール" style={{float:"right", maxWidth:"200px"}} />
      <h2>モジュール詳細：ダイヤル</h2>
      <p><em>不必要に複雑で、底抜けに強欲な機械。この才能をもっと生産的な行為に向けることができていたら…</em></p>
      <ul>
        <li>ダイヤルは4つの位置で止めることができる。</li>
        <li>このモジュールのタイマーがゼロになるまでに、ダイヤルを正しい方向に回す必要がある。</li>
        <li>十二あるLEDの光り方を見て、ダイヤルを止めるべき方向を判断する。</li>
        <li>ダイヤルを回すべき方向は「UP」と書かれたラベルを「上」として判断する。ラベルがモジュールの上方を指しているとはかぎらない。</li>
      </ul>
      <p>X：点灯しているLED</p>
      {positions.map(({label, patterns}) => (
        <div key={label} style={{marginBottom:"16px"}}>
          <h4>{label}：</h4>
          {patterns.map((pattern, pi) => (
            <table key={pi} style={{marginBottom:"8px", borderCollapse:"collapse"}}>
              <tbody>
                {pattern.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={cellStyle}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      ))}
    </React.Fragment>
  );
};

export default withRouter(KnobsScreen);
