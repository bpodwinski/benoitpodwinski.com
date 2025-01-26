/**
 * EventEmitter class: Provides methods to handle event-based communication.
 */
export class EventEmitter {
  /**
   * Initializes the EventEmitter instance.
   * @param {Object} [target=null] - Optional target to bind the emitter to.
   */
  constructor(target) {
    this.events = new Map();
    this.target = target || this;
  }

  /**
   * Registers an event listener for a specific event type.
   * @param {string} type - The event type to listen to.
   * @param {Function} callback - The callback function to invoke when the event is emitted.
   * @param {Object} [context=null] - Optional context to bind the callback to.
   * @returns {Object} - The target bound to this emitter.
   */
  on(type, func, ctx = null) {
    if (!this.events.has(type)) {
      this.events.set(type, []);
    }
    this.events.get(type).push({ func, ctx });
    return this.target;
  }

  /**
   * Removes an event listener or all listeners for a specific event type.
   * @param {string} [type=null] - The event type to remove listeners from.
   * @param {Function} [callback=null] - The specific callback to remove.
   * @returns {Object} - The target bound to this emitter.
   */
  off(type = null, func = null) {
    if (!type) {
      this.events.clear();
    } else if (this.events.has(type)) {
      if (!func) {
        this.events.delete(type);
      } else {
        const listeners = this.events.get(type);
        this.events.set(
          type,
          listeners.filter((listener) => listener.func !== func)
        );
      }
    }
    return this.target;
  }

  /**
   * Emits an event, invoking all registered callbacks for the event type.
   * @param {string} type - The event type to emit.
   * @param {...any} args - Arguments to pass to the callbacks.
   * @returns {Object} - The target bound to this emitter.
   */
  emit(type, ...args) {
    if (!this.events.has(type)) return this.target;

    // Copy the listeners array to prevent issues if listeners are modified during emit
    const listeners = [...this.events.get(type)];
    for (const { func, ctx } of listeners) {
      func.apply(ctx, args);
    }
    return this.target;
  }
}

/**
 * Singleton instance of EventEmitter.
 */
export const events = new EventEmitter();
