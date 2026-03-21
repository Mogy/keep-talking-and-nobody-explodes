import * as React from "react";
import { withRouter } from "react-router-dom";

const PasswordsScreen: React.FC = () => {
  const img = process.env.PUBLIC_URL + "/images/";
  const words = [
    ["about","after","again","below","could"],
    ["every","first","found","great","house"],
    ["large","learn","never","other","place"],
    ["plant","point","right","small","sound"],
    ["spell","still","study","their","there"],
    ["these","thing","think","three","water"],
    ["where","which","world","would","write"],
  ];
  return (
    <React.Fragment>
      <img src={img + "PasswordComponent.svg"} className="diagram" alt="パスワードモジュール" style={{float:"right", maxWidth:"200px"}} />
      <h2>モジュール詳細：パスワード</h2>
      <p><em>このパスワードが政府の推奨する仕様（22文字、大文字小文字混在、ランダムな順番で数字を混入、3文字以上の回文禁止）に準拠していないのが不幸中の幸いだ。</em></p>
      <ul>
        <li>各文字の上下についているボタンで、そのダイヤルを回す。</li>
        <li>用意された文字で作成できるパスワードは、下記のうち1つしかない。</li>
        <li>正しいパスワードを入力したら「送信」ボタンを1回だけ押す。</li>
      </ul>
      <table style={{border:"1px solid #999", borderCollapse:"collapse"}}>
        <tbody>
          {words.map((row, i) => (
            <tr key={i}>
              {row.map(word => (
                <td key={word} style={{padding:"4px 12px"}}>{word}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default withRouter(PasswordsScreen);
