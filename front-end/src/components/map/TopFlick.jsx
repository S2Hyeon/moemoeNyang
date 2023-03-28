import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { useEffect } from "react";
import Panel from "../common/Panel";
import ProfileRound from "./ProfileRound";
import { shallowEqual, useDispatch } from "react-redux";
import { setSelectedCat } from "../../store/mapSlice";
import { typedUseSelector } from "../../store";

export default function TopFlick(
  {
    // setTriggered,
    // catList,
    // setSelectedCat,
    // selectedCat,
  },
) {
  const dispatch = useDispatch();
  const catList = typedUseSelector((state) => state.map.catList, shallowEqual);

  return (
    <Flicking align="prev" circular={true}>
      {catList.map((element, i) => {
        const { cat_id: catId, name, image } = element;

        return (
          <Panel key={catId}>
            <div
              className="text-center text-xs ml-3"
              onClick={() => {
                dispatch(setSelectedCat(element));
                // setSelectedCat(element);
              }}
            >
              <ProfileRound
                // setTriggered={setTriggered}
                image={image}
                // selectedCat={selectedCat}
                catId={catId}
              />
              <div>{name}</div>
            </div>
          </Panel>
        );
      })}
    </Flicking>
  );
}
