import * as React from "react";
import { withRouter } from "react-router-dom";

const MazesScreen: React.FC = () => {
  const img = process.env.PUBLIC_URL + "/images/";
  const mazes = [0,1,2,3,4,5,6,7,8];
  return (
    <React.Fragment>
      <img src={img + "MazeComponent.svg"} className="diagram" alt="迷路モジュール" style={{float:"right", maxWidth:"200px"}} />
      <h2>モジュール詳細：迷路</h2>
      <p><em>大方この迷路は、どこかのレストランのランチョンマットを書き写したものだろう。</em></p>
      <ul>
        <li>丸印が一致する迷路を見つける。</li>
        <li>処理担当者は上下左右のボタンを操作して、白い点を赤い三角形まで導く。</li>
        <li><strong>注意：</strong>迷路の壁を越えてはならない。爆弾のモジュールでは壁が表示されていない。</li>
      </ul>
      <div style={{display:"flex", flexWrap:"wrap", gap:"8px"}}>
        {mazes.map(i => (
          <img key={i} src={img + "maze" + i + ".svg"} alt={"迷路" + i} style={{width:"200px", height:"200px", border:"1px solid #ccc"}} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default withRouter(MazesScreen);
