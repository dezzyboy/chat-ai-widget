var h = typeof globalThis < "u" && globalThis || typeof self < "u" && self || h !== void 0 && h, f = { searchParams: "URLSearchParams" in h, iterable: "Symbol" in h && "iterator" in Symbol, blob: "FileReader" in h && "Blob" in h && function() {
  try {
    return new Blob(), !0;
  } catch {
    return !1;
  }
}(), formData: "FormData" in h, arrayBuffer: "ArrayBuffer" in h };
if (f.arrayBuffer)
  var U = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], D = ArrayBuffer.isView || function(e) {
    return e && U.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function b(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function T(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function w(e) {
  var t = { next: function() {
    var r = e.shift();
    return { done: r === void 0, value: r };
  } };
  return f.iterable && (t[Symbol.iterator] = function() {
    return t;
  }), t;
}
function i(e) {
  this.map = {}, e instanceof i ? e.forEach(function(t, r) {
    this.append(r, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
function v(e) {
  if (e.bodyUsed)
    return Promise.reject(new TypeError("Already read"));
  e.bodyUsed = !0;
}
function P(e) {
  return new Promise(function(t, r) {
    e.onload = function() {
      t(e.result);
    }, e.onerror = function() {
      r(e.error);
    };
  });
}
function j(e) {
  var t = new FileReader(), r = P(t);
  return t.readAsArrayBuffer(e), r;
}
function g(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function B() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    var t;
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : f.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : f.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : f.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : f.arrayBuffer && f.blob && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = g(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : f.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || D(e)) ? this._bodyArrayBuffer = g(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : f.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, f.blob && (this.blob = function() {
    var e = v(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return Promise.resolve(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as blob");
    return Promise.resolve(new Blob([this._bodyText]));
  }, this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var e = v(this);
      return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
    }
    return this.blob().then(j);
  }), this.text = function() {
    var e, t, r, s = v(this);
    if (s)
      return s;
    if (this._bodyBlob)
      return e = this._bodyBlob, t = new FileReader(), r = P(t), t.readAsText(e), r;
    if (this._bodyArrayBuffer)
      return Promise.resolve(function(n) {
        for (var o = new Uint8Array(n), p = new Array(o.length), a = 0; a < o.length; a++)
          p[a] = String.fromCharCode(o[a]);
        return p.join("");
      }(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, f.formData && (this.formData = function() {
    return this.text().then(S);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
i.prototype.append = function(e, t) {
  e = b(e), t = T(t);
  var r = this.map[e];
  this.map[e] = r ? r + ", " + t : t;
}, i.prototype.delete = function(e) {
  delete this.map[b(e)];
}, i.prototype.get = function(e) {
  return e = b(e), this.has(e) ? this.map[e] : null;
}, i.prototype.has = function(e) {
  return this.map.hasOwnProperty(b(e));
}, i.prototype.set = function(e, t) {
  this.map[b(e)] = T(t);
}, i.prototype.forEach = function(e, t) {
  for (var r in this.map)
    this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
}, i.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push(r);
  }), w(e);
}, i.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), w(e);
}, i.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push([r, t]);
  }), w(e);
}, f.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
var R = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
function d(e, t) {
  if (!(this instanceof d))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  var r, s, n = (t = t || {}).body;
  if (e instanceof d) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new i(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || e._bodyInit == null || (n = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new i(t.headers)), this.method = (r = t.method || this.method || "GET", s = r.toUpperCase(), R.indexOf(s) > -1 ? s : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && n)
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(n), !(this.method !== "GET" && this.method !== "HEAD" || t.cache !== "no-store" && t.cache !== "no-cache")) {
    var o = /([?&])_=[^&]*/;
    o.test(this.url) ? this.url = this.url.replace(o, "$1_=" + (/* @__PURE__ */ new Date()).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
  }
}
function S(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(r) {
    if (r) {
      var s = r.split("="), n = s.shift().replace(/\+/g, " "), o = s.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(n), decodeURIComponent(o));
    }
  }), t;
}
function u(e, t) {
  if (!(this instanceof u))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new i(t.headers), this.url = t.url || "", this._initBody(e);
}
d.prototype.clone = function() {
  return new d(this, { body: this._bodyInit });
}, B.call(d.prototype), B.call(u.prototype), u.prototype.clone = function() {
  return new u(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new i(this.headers), url: this.url });
}, u.error = function() {
  var e = new u(null, { status: 0, statusText: "" });
  return e.type = "error", e;
};
var I = [301, 302, 303, 307, 308];
u.redirect = function(e, t) {
  if (I.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new u(null, { status: t, headers: { location: e } });
};
var l = h.DOMException;
try {
  new l();
} catch {
  (l = function(t, r) {
    this.message = t, this.name = r;
    var s = Error(t);
    this.stack = s.stack;
  }).prototype = Object.create(Error.prototype), l.prototype.constructor = l;
}
function E(e, t) {
  return new Promise(function(r, s) {
    var n = new d(e, t);
    if (n.signal && n.signal.aborted)
      return s(new l("Aborted", "AbortError"));
    var o = new XMLHttpRequest();
    function p() {
      o.abort();
    }
    o.onload = function() {
      var a, c, m = { status: o.status, statusText: o.statusText, headers: (a = o.getAllResponseHeaders() || "", c = new i(), a.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(y) {
        return y.indexOf(`
`) === 0 ? y.substr(1, y.length) : y;
      }).forEach(function(y) {
        var A = y.split(":"), _ = A.shift().trim();
        if (_) {
          var O = A.join(":").trim();
          c.append(_, O);
        }
      }), c) };
      m.url = "responseURL" in o ? o.responseURL : m.headers.get("X-Request-URL");
      var x = "response" in o ? o.response : o.responseText;
      setTimeout(function() {
        r(new u(x, m));
      }, 0);
    }, o.onerror = function() {
      setTimeout(function() {
        s(new TypeError("Network request failed"));
      }, 0);
    }, o.ontimeout = function() {
      setTimeout(function() {
        s(new TypeError("Network request failed"));
      }, 0);
    }, o.onabort = function() {
      setTimeout(function() {
        s(new l("Aborted", "AbortError"));
      }, 0);
    }, o.open(n.method, function(a) {
      try {
        return a === "" && h.location.href ? h.location.href : a;
      } catch {
        return a;
      }
    }(n.url), !0), n.credentials === "include" ? o.withCredentials = !0 : n.credentials === "omit" && (o.withCredentials = !1), "responseType" in o && (f.blob ? o.responseType = "blob" : f.arrayBuffer && n.headers.get("Content-Type") && n.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (o.responseType = "arraybuffer")), !t || typeof t.headers != "object" || t.headers instanceof i ? n.headers.forEach(function(a, c) {
      o.setRequestHeader(c, a);
    }) : Object.getOwnPropertyNames(t.headers).forEach(function(a) {
      o.setRequestHeader(a, T(t.headers[a]));
    }), n.signal && (n.signal.addEventListener("abort", p), o.onreadystatechange = function() {
      o.readyState === 4 && n.signal.removeEventListener("abort", p);
    }), o.send(n._bodyInit === void 0 ? null : n._bodyInit);
  });
}
E.polyfill = !0, h.fetch || (h.fetch = E, h.Headers = i, h.Request = d, h.Response = u);
