function* idMaker() {
  let i = 1;
  while (true) {
    yield "ID_" + i;
    i++;
  }
}
