//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-app";

import Config from "./config/config.js";
import Lsi from "../config/lsi.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:static
  displayName: Config.TAG + "Left"
  //@@viewOff:static
};

export const Left = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Plus4U5.App.Left
        {...props}
        logoProps={{
          backgroundColor: "#1976d2",
          backgroundColorTo: "#2196f3",
          title: "Forms",
          companyLogo: Plus4U5.Environment.basePath + "assets/img/unicorn-logo.svg"
        }}
        aboutItems={[{ content: <UU5.Bricks.Lsi lsi={Lsi.left.about} />, href: "about" }]}
        helpHref={null}
      >
        <Plus4U5.App.MenuTree
          borderBottom
          // NOTE Item "id" equals to useCase so that item gets automatically selected when route changes (see spa-autheticated.js).
          items={[
            { id: "home", href: "home", content: <UU5.Bricks.Lsi lsi={Lsi.left.home} /> },
            { id: "jokes", href: "jokes", content: <UU5.Bricks.Lsi lsi={Lsi.left.jokes} /> }
          ]}
        />
      </Plus4U5.App.Left>
    );
    //@@viewOff:render
  }
});

export default Left;
