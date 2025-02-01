/**
 * EventEmitter class: Provides a simple and efficient event-based communication system.
 * Supports adding, removing, and emitting events dynamically.
 */
export class EventEmitter {
  /**
   * Initializes an EventEmitter instance.
   * @param {Object} [target=null] - Optional target to bind the emitter to.
   */
  constructor(target = null) {
    this.events = new Map();
    this.target = target || this;
  }

  /**
   * Returns the default configuration for the EventEmitter.
   * @returns {Object} Default configuration settings (future extension).
   */
  static defaultConfig() {
    return {};
  }

  /**
   * Ensures the provided event type is valid.
   * @param {string} type - The event type to validate.
   * @throws {Error} If the event type is not a string.
   */
  validateEventType(type) {
    if (typeof type !== "string") {
      throw new Error(`Invalid event type: ${type}. Expected a string.`);
    }
  }

  /**
   * Registers an event listener for a specific event type.
   * @param {string} type - The event type to listen to.
   * @param {Function} callback - The callback function to invoke when the event is emitted.
   * @param {Object} [context=null] - Optional context to bind the callback to.
   * @returns {Object} - The target bound to this emitter.
   */
  on(type, callback, context = null) {
    this.validateEventType(type);
    if (typeof callback !== "function") {
      throw new Error(
        `Invalid callback for event '${type}'. Expected a function.`
      );
    }

    if (!this.events.has(type)) {
      this.events.set(type, []);
    }
    this.events.get(type).push({ callback, context });

    return this.target;
  }

  /**
   * Removes an event listener or all listeners for a specific event type.
   * @param {string} [type=null] - The event type to remove listeners from.
   * @param {Function} [callback=null] - The specific callback to remove.
   * @returns {Object} - The target bound to this emitter.
   */
  off(type = null, callback = null) {
    if (!type) {
      this.events.clear();
    } else if (this.events.has(type)) {
      if (!callback) {
        this.events.delete(type);
      } else {
        const listeners = this.events.get(type);
        this.events.set(
          type,
          listeners.filter((listener) => listener.callback !== callback)
        );
      }
    }
    return this.target;
  }

  /**
   * Emits an event, invoking all registered callbacks for the given event type.
   * @param {string} type - The event type to emit.
   * @param {...any} args - Arguments to pass to the callbacks.
   * @returns {Object} - The target bound to this emitter.
   */
  emit(type, ...args) {
    this.validateEventType(type);

    if (!this.events.has(type)) return this.target;

    // Clone the listener array to prevent modification during iteration
    const listeners = [...this.events.get(type)];
    for (const { callback, context } of listeners) {
      callback.apply(context, args);
    }

    return this.target;
  }

  /**
   * Checks if an event type has registered listeners.
   * @param {string} type - The event type to check.
   * @returns {boolean} - Returns true if there are listeners, otherwise false.
   */
  hasEvent(type) {
    return this.events.has(type) && this.events.get(type).length > 0;
  }

  /**
   * Clears all registered events, effectively resetting the emitter.
   */
  clearAll() {
    this.events.clear();
  }

  /**
   * Disposes the EventEmitter instance, removing all events and references.
   */
  dispose() {
    this.clearAll();
    this.events = null;
    this.target = null;
  }
}

/**
 * Singleton instance of EventEmitter.
 */
export const events = new EventEmitter();
