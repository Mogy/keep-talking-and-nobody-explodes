import * as React from "react";
import { withRouter } from "react-router-dom";

const SimonScreen: React.FC = () => {
  const img = process.env.PUBLIC_URL + "/images/";
  return (
    <React.Fragment>
      <img src={img + "SimonComponent.svg"} className="diagram" alt="サイモンゲームモジュール" style={{float:"right", maxWidth:"200px"}} />
      <h2>モジュール詳細：サイモンゲーム</h2>
      <p><em>昔流行った玩具のひとつで、表示される光の順番を覚えて、そのとおりに押すことができるかを競う。ここで使われているのは安い偽物のようだが。</em></p>
      <ol>
        <li>4つのボタンのいずれかが点滅する。</li>
        <li>下記の表を見て、対応するボタンを押す。</li>
        <li>最初のボタンに続き、2つ目のボタンが光る。ふたたび下記の表を見て対応するボタンを2つ押す。</li>
        <li>正しい順番でボタンを押すたびに、光るボタンが1つ追加される。モジュールを解除するまで続ける。</li>
      </ol>
      <h3>シリアルナンバーに母音が含まれている場合：</h3>
      <table style={{border:"1px solid #999", borderCollapse:"collapse", marginBottom:"16px"}}>
        <thead>
          <tr>
            <th colSpan={2}></th>
            <th>赤点滅</th>
            <th>青点滅</th>
            <th>緑点滅</th>
            <th>黄点滅</th>
          </tr>
        </thead>
        <tbody>
          <tr><th rowSpan={3}>押すボタン：</th><th>ミスなし</th><td>青</td><td>赤</td><td>黄</td><td>緑</td></tr>
          <tr><th>1ミス</th><td>黄</td><td>緑</td><td>青</td><td>赤</td></tr>
          <tr><th>2ミス</th><td>緑</td><td>赤</td><td>黄</td><td>青</td></tr>
        </tbody>
      </table>
      <h3>シリアルナンバーに母音が含まれて<em>いない</em>場合：</h3>
      <table style={{border:"1px solid #999", borderCollapse:"collapse"}}>
        <thead>
          <tr>
            <th colSpan={2}></th>
            <th>赤点滅</th>
            <th>青点滅</th>
            <th>緑点滅</th>
            <th>黄点滅</th>
          </tr>
        </thead>
        <tbody>
          <tr><th rowSpan={3}>押すボタン：</th><th>ミスなし</th><td>青</td><td>黄</td><td>緑</td><td>赤</td></tr>
          <tr><th>1ミス</th><td>赤</td><td>青</td><td>黄</td><td>緑</td></tr>
          <tr><th>2ミス</th><td>黄</td><td>緑</td><td>青</td><td>赤</td></tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default withRouter(SimonScreen);
