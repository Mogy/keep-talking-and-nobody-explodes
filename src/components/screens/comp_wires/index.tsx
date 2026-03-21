import * as React from "react";
import { withRouter } from "react-router-dom";

const CompWiresScreen: React.FC = () => {
  const img = process.env.PUBLIC_URL + "/images/";
  return (
    <React.Fragment>
      <img src={img + "VennWireComponent.svg"} className="diagram" alt="複雑ワイヤモジュール" style={{float:"right", maxWidth:"200px"}} />
      <h2>モジュール詳細：複雑ワイヤ</h2>
      <p><em>これはほかのワイヤモジュールとは違い、ストライプ模様のワイヤも混ざっている！だが心配は無用、ワイヤを処理するにあたってのルールを簡潔にまとめた。少し簡潔すぎたかもしれないが…</em></p>
      <ul>
        <li>すべてのワイヤを観察する。各ワイヤの上にはLED、下には★印がつく場所が用意されている。</li>
        <li><strong>それぞれ</strong>のワイヤ・LED・★印の組みあわせにつき、下記のベン図を参照し、ワイヤを切るかどうかを判断する。</li>
        <li>ワイヤは複数の色のストライプ模様である場合もある。</li>
      </ul>
      <div style={{display:"flex", flexWrap:"wrap", gap:"16px", alignItems:"flex-start"}}>
        <div>
          <h3>ベン図の凡例</h3>
          <table style={{border:"1px solid #999", borderCollapse:"collapse"}}>
            <tbody>
              <tr><td style={{padding:"4px 8px"}}><img src={img + "venn_red.svg"} alt="赤" style={{width:"60px"}} /></td><td style={{padding:"4px 8px"}}>ワイヤが赤い</td></tr>
              <tr><td style={{padding:"4px 8px"}}><img src={img + "venn_blue.svg"} alt="青" style={{width:"60px"}} /></td><td style={{padding:"4px 8px"}}>ワイヤが青い</td></tr>
              <tr><td style={{padding:"4px 8px"}}><img src={img + "venn_symbol.svg"} alt="★" style={{width:"60px"}} /></td><td style={{padding:"4px 8px"}}>★印つき</td></tr>
              <tr><td style={{padding:"4px 8px"}}><img src={img + "venn_led.svg"} alt="LED" style={{width:"60px"}} /></td><td style={{padding:"4px 8px"}}>LEDが点灯</td></tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>文字の意味</h3>
          <table style={{border:"1px solid #999", borderCollapse:"collapse"}}>
            <thead>
              <tr><th style={{padding:"4px 8px"}}>文字</th><th style={{padding:"4px 8px"}}>指示</th></tr>
            </thead>
            <tbody>
              <tr><td style={{padding:"4px 8px"}}>C</td><td style={{padding:"4px 8px"}}>ワイヤを切る</td></tr>
              <tr><td style={{padding:"4px 8px"}}>D</td><td style={{padding:"4px 8px"}}>ワイヤを切らない</td></tr>
              <tr><td style={{padding:"4px 8px"}}>S</td><td style={{padding:"4px 8px"}}>シリアルナンバーの最後の数字が偶数であればワイヤを切る</td></tr>
              <tr><td style={{padding:"4px 8px"}}>P</td><td style={{padding:"4px 8px"}}>爆弾ケースにパラレルポートがついていたらワイヤを切る</td></tr>
              <tr><td style={{padding:"4px 8px"}}>B</td><td style={{padding:"4px 8px"}}>爆弾ケースにバッテリーが二本以上ついていたらワイヤを切る</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>バッテリーの種類を確認するには「付録B」を参照すること。ポートの種類を確認するには「付録C」を参照すること。</p>
      <p><strong>ベン図（外部マニュアル参照）：</strong> 4つの楕円の組み合わせ（赤・青・★・LED）により、各交差領域に C/D/S/P/B のいずれかが割り当てられている。</p>
    </React.Fragment>
  );
};

export default withRouter(CompWiresScreen);
