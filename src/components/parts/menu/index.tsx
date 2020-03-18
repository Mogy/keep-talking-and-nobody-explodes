import React, { useState } from "react";
import { Drawer, MenuList } from "@material-ui/core";
import Header from "./header";
import MenuItem from "./item";

const MenuBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Header onClick={() => setOpen(true)} />
      <Drawer open={open} onClose={() => setOpen(false)}>
        <MenuList>
          <MenuItem title="Home" targetUrl="/" onClick={() => setOpen(false)} />
          <MenuItem
            title="ワイヤー"
            targetUrl="/wires"
            onClick={() => setOpen(false)}
          />
          <MenuItem
            title="ボタン"
            targetUrl="/button"
            onClick={() => setOpen(false)}
          />
          <MenuItem
            title="キーパッド"
            targetUrl="/keypads"
            onClick={() => setOpen(false)}
          />
          <MenuItem
            title="サイモンゲーム"
            targetUrl="/simon"
            onClick={() => setOpen(false)}
          />
          <MenuItem
            title="表比較"
            targetUrl="/who"
            onClick={() => setOpen(false)}
          />
          <MenuItem
            title="記憶"
            targetUrl="/memory"
            onClick={() => setOpen(false)}
          />
          <MenuItem
            title="モールス信号"
            targetUrl="/morse"
            onClick={() => setOpen(false)}
          />
          <MenuItem
            title="複雑ワイヤー"
            targetUrl="/comp_wires"
            onClick={() => setOpen(false)}
          />
          <MenuItem
            title="順番ワイヤー"
            targetUrl="/seq_wires"
            onClick={() => setOpen(false)}
          />
          <MenuItem
            title="迷路"
            targetUrl="/mazes"
            onClick={() => setOpen(false)}
          />
          <MenuItem
            title="パスワード"
            targetUrl="/passwords"
            onClick={() => setOpen(false)}
          />
          <MenuItem
            title="ダイアル"
            targetUrl="/knobs"
            onClick={() => setOpen(false)}
          />
        </MenuList>
      </Drawer>
    </React.Fragment>
  );
};

export default MenuBar;
