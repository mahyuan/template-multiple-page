module.exports = function* (next) {
  this.__isAndroid = /android/.test(this.request && this.headers['user-agent'] && this.request.headers['user-agent'].toLowerCase());
  yield next;
}
