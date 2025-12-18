import News from "./dashboard/News";
import Stocks from "./dashboard/Stocks.tsx";
import Weather from "./dashboard/Weather.tsx";

import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}


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
function Dashboard() {
  return (
    <div className="border-2 h-[600px] w-[600px] flex justify-evenly">
      <ErrorBoundary>
        <Stocks />
      </ErrorBoundary>
      <ErrorBoundary>
        <Weather />
      </ErrorBoundary>
      <ErrorBoundary>
        <News />
      </ErrorBoundary>
    </div>
  );
}

export default Dashboard;
