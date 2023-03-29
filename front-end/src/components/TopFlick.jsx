import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Panel from "./Panel";

export default function TopFlick({ setTriggered }) {
  const arr = Array.from({ length: 10 });
  return (
    <Flicking
      align="prev"
      circular={true}
      // onMoveEnd={(e) => {
      //   console.log(e);
      // }}
    >
      {arr.map((e, i) => {
        return <Panel key={i} setTriggered={setTriggered} />;
      })}
    </Flicking>
  );
}
