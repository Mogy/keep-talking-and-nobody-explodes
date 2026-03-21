import * as React from "react";
import { withRouter } from "react-router-dom";

const SeqWiresScreen: React.FC = () => {
  const img = process.env.PUBLIC_URL + "/images/";
  const redData = [
    ["一番目の出現（赤）","C"],["二番目の出現（赤）","B"],["三番目の出現（赤）","A"],
    ["四番目の出現（赤）","AかC"],["五番目の出現（赤）","B"],["六番目の出現（赤）","AかC"],
    ["七番目の出現（赤）","AかBかC"],["八番目の出現（赤）","AかB"],["九番目の出現（赤）","B"],
  ];
  const blueData = [
    ["一番目の出現（青）","B"],["二番目の出現（青）","AかC"],["三番目の出現（青）","B"],
    ["四番目の出現（青）","A"],["五番目の出現（青）","B"],["六番目の出現（青）","BかC"],
    ["七番目の出現（青）","C"],["八番目の出現（青）","AかC"],["九番目の出現（青）","A"],
  ];
  const blackData = [
    ["一番目の出現（黒）","AかBかC"],["二番目の出現（黒）","AかC"],["三番目の出現（黒）","B"],
    ["四番目の出現（黒）","AかC"],["五番目の出現（黒）","B"],["六番目の出現（黒）","BかC"],
    ["七番目の出現（黒）","AかB"],["八番目の出現（黒）","C"],["九番目の出現（黒）","C"],
  ];

  const renderTable = (title: string, data: string[][], color: string) => (
    <div style={{marginBottom:"16px"}}>
      <table style={{border:"1px solid #999", borderCollapse:"collapse", width:"100%"}}>
        <thead>
          <tr><th colSpan={2} style={{padding:"4px 8px", backgroundColor:color}}>{title}</th></tr>
          <tr><th style={{padding:"4px 8px"}}>ワイヤの出現回数</th><th style={{padding:"4px 8px"}}>切るべき接続先</th></tr>
        </thead>
        <tbody>
          {data.map(([occ, dest]) => (
            <tr key={occ}><td style={{padding:"2px 8px"}}>{occ}</td><td style={{padding:"2px 8px"}}>{dest}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <React.Fragment>
      <img src={img + "WireSequenceComponent.svg"} className="diagram" alt="順番ワイヤモジュール" style={{float:"right", maxWidth:"200px"}} />
      <h2>モジュール詳細：順番ワイヤ</h2>
      <p><em>このモジュールの仕組みは謎が多い。工学的には優れた構造だと思われるが、9本のワイヤを管理するだけならもっと簡単な仕組みもあったはずだ。</em></p>
      <ul>
        <li>このモジュールには、ワイヤが取りつけられたパネルが何枚か内蔵されているが、1枚ずつしか表示されない。下ボタンで次のパネルへ、上ボタンで前のパネルを表示する。</li>
        <li>現在のパネルで切るべきワイヤをすべて切ってから、次のパネルへ進むこと。</li>
        <li>下記の表に従ってワイヤを切ること。ワイヤの出現回数はモジュール内で累積する。</li>
      </ul>
      {renderTable("赤いワイヤの出現回数", redData, "#ffcccc")}
      {renderTable("青いワイヤの出現回数", blueData, "#cce5ff")}
      {renderTable("黒いワイヤの出現回数", blackData, "#cccccc")}
    </React.Fragment>
  );
};

export default withRouter(SeqWiresScreen);
