import * as React from "react";
import { withRouter } from "react-router-dom";

const WiresScreen: React.FC = () => {
  const img = process.env.PUBLIC_URL + "/images/";
  return (
    <React.Fragment>
      <img src={img + "WireComponent.svg"} className="diagram" alt="ワイヤモジュール" style={{float:"right", maxWidth:"200px"}} />
      <h2>モジュール詳細：ワイヤ</h2>
      <p><em>ワイヤとは電気回路を流れる生き血のような存在！いや、電気のほうが血液か？そうなるとワイヤは動脈…いや、静脈か、はて…</em></p>
      <ul>
        <li>ワイヤモジュールには3本から6本のワイヤがついている。</li>
        <li>モジュールを解除するには正しいワイヤを<em>1本</em>切る必要がある。</li>
        <li>ワイヤの順番は上から数える。</li>
      </ul>
      <table style={{border:"1px solid #999", borderCollapse:"collapse", width:"100%"}}>
        <tbody>
          <tr><td>
            <strong>3本のワイヤ：</strong><br/>
            赤いワイヤがなければ、二本目のワイヤを切る。<br/>
            そうでない場合、最後のワイヤが白ければ、最後のワイヤを切る。<br/>
            そうでない場合、青いワイヤが一本よりも多ければ、最後の青いワイヤを切る。<br/>
            そうでない場合、最後のワイヤを切る。
          </td></tr>
          <tr><td>
            <strong>4本のワイヤ：</strong><br/>
            赤いワイヤが一本よりも多く、シリアルナンバーの最後の数字が奇数の場合、最後の赤いワイヤを切る。<br/>
            そうでない場合、最後のワイヤが黄色くてかつ赤いワイヤがなければ、最初のワイヤを切る。<br/>
            そうでない場合、青いワイヤが一本しかなければ、最初のワイヤを切る。<br/>
            そうでない場合、黄色いワイヤが一本よりも多ければ、最後のワイヤを切る。<br/>
            そうでない場合、二本目のワイヤを切る。
          </td></tr>
          <tr><td>
            <strong>5本のワイヤ：</strong><br/>
            最後のワイヤが黒でかつシリアルナンバーの最後の数字が奇数の場合、四本目のワイヤを切る。<br/>
            そうでない場合、赤いワイヤが一本しかなくかつ黄色いワイヤが一本よりも多ければ、最初のワイヤを切る。<br/>
            そうでない場合、黒いワイヤがなければ、二本目のワイヤを切る。<br/>
            そうでない場合、最初のワイヤを切る。
          </td></tr>
          <tr><td>
            <strong>6本のワイヤ：</strong><br/>
            黄色いワイヤがなくかつシリアルナンバーの最後の数字が奇数の場合、三本目のワイヤを切る。<br/>
            そうでない場合、黄色いワイヤが一本しかなくかつ白いワイヤが一本よりも多ければ、四本目のワイヤを切る。<br/>
            そうでない場合、赤いワイヤがなければ、最後のワイヤを切る。<br/>
            そうでない場合、四本目のワイヤを切る。
          </td></tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default withRouter(WiresScreen);
