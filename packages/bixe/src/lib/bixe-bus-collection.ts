import { BixeBus } from "./bixe-bus";
import { BixeLogger } from "./bixe-logger";

export class BixeBusCollection {
  private static _buses = {} as Record<string, BixeBus>;

  static get buses(): { [key: string]: BixeBus } {
    return this._buses;
  };

  static GetBus(scope: string, logger: BixeLogger) {
    let bus = BixeBusCollection.buses[scope];
    if (!bus) {
      bus = new BixeBus(logger);
      BixeBusCollection.Add(scope, bus);
    }
    return bus;
  }

  static Dispatch(action: any, scope: string) {
    const bus = BixeBusCollection.buses[scope];
    if (!bus) {
      throw new Error(`Scope not found: ${scope}`);
    }
    return bus.dispatch(action);
  }

  static Add(scope: string, bus: BixeBus) {
    this._buses[scope] = bus;
  }

  static Logger: BixeLogger;

  static GetLogger(): BixeLogger {
    if (!BixeBusCollection.Logger) {
      BixeBusCollection.Logger = new BixeLogger(BixeBusCollection.LoggingEnabled)
    }
    return BixeBusCollection.Logger;
  }

  static LoggingEnabled = false;

  // static 
}