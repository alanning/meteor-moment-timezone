// This file undoes all the trickery that we needed to get timezone working.
(function(undefined) {

  function safeDelete (target, field) {
    try {
      delete target[field]
    }
    catch (ex) {
      // calling delete on a window field in IE8 throws an 
      // "object doesn't support this action" error
      target[field] = undefined
    }
  }
  
  if (this.__AC_OLD_REQUIRE) {
    this.require = this.__AC_OLD_REQUIRE;
    safeDelete(this, "__AC_OLD_REQUIRE");
  } else {
    safeDelete(this, "require");
  }

  if (this.__AC_OLD_MODULE) {
    this.module = this.__AC_OLD_MODULE;
    safeDelete(this, "__AC_OLD_MODULE");
  } else {
    safeDelete(this, "module");
  }
}).call(this);
