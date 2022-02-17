import { atom, useRecoilState } from "recoil";

const textState = atom({
  key: "sharedValue", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export function Consumer2() {
  const [sharedValue, setSharedValue] = useRecoilState(textState);
  return (
    <div>
      Consumer 2
      <input
        value={sharedValue}
        onChange={(e) => setSharedValue(e.target.value)}
      />
    </div>
  );
}
