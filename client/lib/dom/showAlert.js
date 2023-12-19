import { isString } from "../utils/typeOf.js";
import { addClass, removeClass } from "./css.js";
import { getNode } from "./getNode.js";

/**
 * 에러 메세지를 보여주는 함수
 * @param {HTMLElement} node 
 * @param {string} message 
 * @param {number} timeout 
 * @returns void
 */
export function showAlert(node, message, timeout=1000) {

  if(isString(node)) {
    node = getNode(node);
  }

  node.textContent = message
  addClass(node, 'is-active');
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}