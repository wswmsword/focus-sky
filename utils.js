/** Object.prototype.toString.call 快捷方式 */
export const objToStr = obj => Object.prototype.toString.call(obj);

/** 参数是否是对象 */
export const isObj = obj => objToStr(obj) === "[object Object]";

/** 参数是否为字符串 */
export const isStr = str => typeof str === "string";

/** 是否按下了 enter */
export const isEnterEvent = function(e) {
  return e.key === "Enter" || e.keyCode === 13;
};

/** 按键是否是 esc */
export const isEscapeEvent = function (e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};

/** 按键是否是 tab */
export const isTabEvent = function(e) {
  return e.key === 'Tab' || e.keyCode === 9;
};

/** 是否是向前的 tab */
export const isTabForward = function(e) {
  return isTabEvent(e) && !e.shiftKey;
};

/** 是否是向后的 tab */
export const isTabBackward = function(e) {
  return isTabEvent(e) && e.shiftKey;
};

/** 延迟执行 */
export const delayToProcess = function(after) {
  return function (delay, processor) {
    if (delay == null) f();
    else setTimeout(f, delay);

    function f() {
      processor();
      after();
    }
  }
};

/** document.activeElement 的快捷方式 */
export const getActiveElement = () => document.activeElement;

/** 为执行函数添加条件 */
export function addCondition(condition, processor) {
  return function(...props) {
    if (condition()) processor(...props);
  };
}
