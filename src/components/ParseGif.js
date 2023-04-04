import { useWorkerParser, usePlayerState, usePlayback, Canvas } from "@react-gifs/tools";

const Gif = (src) => {
  // default state
  const [state, update] = usePlayerState();

  //  load and parse gif
  useWorkerParser(src, update);

  // updates current index
  usePlayback(state, () => update(({ index }) => ({ index: index + 1 })));

  // render frames
  return <Canvas {...state} />;
};

