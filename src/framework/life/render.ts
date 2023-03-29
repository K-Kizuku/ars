// /**
//  * 状態管理用のグローバル変数
//  */
// export var __STATE__;

// /**
//  * アクション管理用のグローバル変数
//  */
// export var __ACTION__;

export const LifeRender = (beforeFunc: () => void, afterFunc: () => void) => {
  beforeRender(beforeFunc);
  afterRender(afterFunc);
};

export const beforeRender = (funcs: () => void) => {
  funcs();
};

const afterRender = (func: () => void) => {
  document.addEventListener("DOMContentLoaded", () => {
    func();
  });
};
