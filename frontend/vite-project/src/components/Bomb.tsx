import React, { useState, Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

// Error Boundaries MUST be Class Components (currently)
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // 1. Update state so the next render shows the fallback UI
  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  // 2. Log the error to an analytics service
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Engineers have been notified.</h1>;
    }

    return this.props.children;
  }
};

function Bomb() {
  const [shouldCrash, setShouldCrash] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ((e.target as HTMLElement).id === "bomb") {
      setShouldCrash(true);
    }
  };

  if (shouldCrash)
    throw new Error();

  return (
    <div className="bg-gray-500 border-2 m-5 h-50 w-100 flex justify-center items-center">
      <button className="border-2 bg-gray-300" id="bomb" onClick={handleClick}>Explode</button>
    </div>
  );

}

export default Bomb;
