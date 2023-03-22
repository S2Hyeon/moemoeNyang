import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Panel from "../common/Panel";
import ProfileRound from "./ProfileRound";

export default function TopFlick({ setTriggered }) {
  const arr = Array.from({ length: 10 });
  return (
    <Flicking align="prev" circular={true}>
      {arr.map((e, i) => {
        return (
          <Panel key={i}>
            <div className="text-center text-xs ml-3">
              <ProfileRound setTriggered={setTriggered} />
              <div>안냥이</div>
            </div>
          </Panel>
        );
      })}
    </Flicking>
  );
}
