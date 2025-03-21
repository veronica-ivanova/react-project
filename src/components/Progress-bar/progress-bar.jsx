import { useProgress } from "./use-progress";

import "./progress-bar.css";

export const ProgressBar = () => {
  const scrollProgress = useProgress();

  return <div className="progress-bar" style={{ width: scrollProgress }}></div>;
};
