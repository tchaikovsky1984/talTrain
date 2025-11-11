// awaited<T> type

// recursively unwraps a promise object for the goodies inside

async function fetchName(): Promise<string[]> {
  return ["Alice", "Bob"];
}

function getResult<T extends Promise<string[]>>(asyncFunc: () => T) {
  type Result = Awaited<T>;
  asyncFunc()
    .then((res: Result) => { console.log(res); })
    .catch((err: any) => { console.log(err); })
    .finally(() => { console.log("done"); })
}

getResult(fetchName);
