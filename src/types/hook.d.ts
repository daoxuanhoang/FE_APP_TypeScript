import { IHomeState } from "./app";

export interface IActReducerwithCB {
  payload: {
    callback: (
      oldState: Partial<IHomeState>,
      cb: (newState: Partial<IHomeState>) => void
    ) => void;
  };
}
