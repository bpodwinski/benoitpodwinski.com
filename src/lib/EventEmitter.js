/**
<<<<<<< HEAD
 * EventEmitter class: Provides a simple and efficient event-based communication system.
 * Supports adding, removing, and emitting events dynamically.
 */
export class EventEmitter {
  /**
   * Initializes an EventEmitter instance.
   * @param {Object} [target=null] - Optional target to bind the emitter to.
   */
  constructor(target = null) {
=======
 * EventEmitter class: Provides methods to handle event-based communication.
 */
export class EventEmitter {
  /**
   * Initializes the EventEmitter instance.
   * @param {Object} [target=null] - Optional target to bind the emitter to.
   */
  constructor(target) {
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
    this.events = new Map();
    this.target = target || this;
  }

  /**
<<<<<<< HEAD
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
=======
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
   * Registers an event listener for a specific event type.
   * @param {string} type - The event type to listen to.
   * @param {Function} callback - The callback function to invoke when the event is emitted.
   * @param {Object} [context=null] - Optional context to bind the callback to.
   * @returns {Object} - The target bound to this emitter.
   */
<<<<<<< HEAD
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

=======
  on(type, func, ctx = null) {
    if (!this.events.has(type)) {
      this.events.set(type, []);
    }
    this.events.get(type).push({ func, ctx });
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
    return this.target;
  }

  /**
   * Removes an event listener or all listeners for a specific event type.
   * @param {string} [type=null] - The event type to remove listeners from.
   * @param {Function} [callback=null] - The specific callback to remove.
   * @returns {Object} - The target bound to this emitter.
   */
<<<<<<< HEAD
  off(type = null, callback = null) {
    if (!type) {
      this.events.clear();
    } else if (this.events.has(type)) {
      if (!callback) {
=======
  off(type = null, func = null) {
    if (!type) {
      this.events.clear();
    } else if (this.events.has(type)) {
      if (!func) {
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
        this.events.delete(type);
      } else {
        const listeners = this.events.get(type);
        this.events.set(
          type,
<<<<<<< HEAD
          listeners.filter((listener) => listener.callback !== callback)
=======
          listeners.filter((listener) => listener.func !== func)
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
        );
      }
    }
    return this.target;
  }

  /**
<<<<<<< HEAD
   * Emits an event, invoking all registered callbacks for the given event type.
=======
   * Emits an event, invoking all registered callbacks for the event type.
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
   * @param {string} type - The event type to emit.
   * @param {...any} args - Arguments to pass to the callbacks.
   * @returns {Object} - The target bound to this emitter.
   */
  emit(type, ...args) {
<<<<<<< HEAD
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
=======
    if (!this.events.has(type)) return this.target;

    // Copy the listeners array to prevent issues if listeners are modified during emit
    const listeners = [...this.events.get(type)];
    for (const { func, ctx } of listeners) {
      func.apply(ctx, args);
    }
    return this.target;
  }
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
}

/**
 * Singleton instance of EventEmitter.
 */
export const events = new EventEmitter();
