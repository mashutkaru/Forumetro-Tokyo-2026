/* Host phone numbers for L09.
   To add or remove a host, edit HOSTS, then publish the site.
   Numbers can be written as +972504412944 or 0504412944. */
(function () {
  var HOSTS = [
    "+972504412944",
    "+972546668902"
  ];

  function digits(value) {
    var d = String(value || "").replace(/\D/g, "");
    if (d.indexOf("00") === 0) d = d.slice(2);
    if (d.charAt(0) === "0") d = "972" + d.slice(1);
    return d;
  }

  function allows(value) {
    var key = digits(value);
    if (!key) return false;
    var i;
    for (i = 0; i < HOSTS.length; i++) {
      if (digits(HOSTS[i]) === key) return true;
    }
    return false;
  }

  window.ForumetroLiveHosts = { allows: allows, digits: digits };
})();
