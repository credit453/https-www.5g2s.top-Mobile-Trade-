"use strict";(self.webpackChunk_ember_auto_import_=self.webpackChunk_ember_auto_import_||[]).push([[356],{84356:function(t){var o="touch"
function s(t,o){this._target=t||document.body,this._attr=o||"data-focus-method",this._focusMethod=this._lastFocusMethod=!1,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onWindowBlur=this._onWindowBlur.bind(this),this._bindEvents()}var n=s.prototype
n._bindEvents=function(){this._target.addEventListener("keydown",this._onKeyDown,!0),this._target.addEventListener("mousedown",this._onMouseDown,!0),this._target.addEventListener("touchstart",this._onTouchStart,!0),this._target.addEventListener("focus",this._onFocus,!0),this._target.addEventListener("blur",this._onBlur,!0),window.addEventListener("blur",this._onWindowBlur)},n._onKeyDown=function(t){this._focusMethod="key"},n._onMouseDown=function(t){this._focusMethod!==o&&(this._focusMethod="mouse")},n._onTouchStart=function(t){this._focusMethod=o},n._onFocus=function(t){this._focusMethod||(this._focusMethod=this._lastFocusMethod),t.target.setAttribute(this._attr,this._focusMethod),this._lastFocusMethod=this._focusMethod,this._focusMethod=!1},n._onBlur=function(t){t.target.removeAttribute(this._attr)},n._onWindowBlur=function(t){this._focusMethod=!1},t.exports=s}}])
