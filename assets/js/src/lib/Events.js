class Events {
  constructor(target) {
    this.events = new Map();
    this.target = target || this;
  }

  /**
   * On: Listen to events
   */
  on(type, func, ctx = null) {
    if (!this.events.has(type)) {
      this.events.set(type, []);
    }
    this.events.get(type).push({ func, ctx });
    return this.target;
  }

  /**
   * Off: Stop listening to an event or a specific callback
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
   * Emit: Trigger an event, callbacks will be executed
   */
  emit(type, ...args) {
    if (!this.events.has(type)) return this.target;

    const listeners = [...this.events.get(type)];
    for (const { func, ctx } of listeners) {
      func.apply(ctx, args);
    }
    return this.target;
  }
}
