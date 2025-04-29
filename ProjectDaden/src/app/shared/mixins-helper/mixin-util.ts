export class MixinUtility {
    static applyMixins(targetClass: any, baseClasses: any[]) {
      baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
          if (name !== "constructor") {
            targetClass.prototype[name] = baseClass.prototype[name];
          }
        });
      });
    }
  }