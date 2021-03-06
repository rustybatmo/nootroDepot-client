// import { locationChange } from "./actions";

import { locationChange } from "./actions";

export function startListener(history, store) {
  store.dispatch(
    locationChange({
      pathname: history.location.pathname,
      search: history.location.search,
      hash: history.location.hash,
    })
  );
  history.listen((info) => {
    const { location } = info;

    store.dispatch(
      locationChange({
        pathname: location.pathname,
        search: location.search,
        hash: location.hash,
      })
    );
  });
}
