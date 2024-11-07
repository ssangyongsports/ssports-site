import React, { useEffect } from 'react';

const ChatwootWidget = () => {
  useEffect(() => {
    // Define the Beacon function and load the script
    (function (e, t, n) {
      function a() {
        var e = t.getElementsByTagName('script')[0],
          n = t.createElement('script');
        n.type = 'text/javascript';
        n.async = true;
        n.src = 'https://beacon-v2.helpscout.net';
        e.parentNode.insertBefore(n, e);
      }
      if (
        (e.Beacon = n = function (t, n, a) {
          e.Beacon.readyQueue.push({ method: t, options: n, data: a });
        }),
        (n.readyQueue = []),
        'complete' === t.readyState
      )
        return a();
      e.attachEvent ? e.attachEvent('onload', a) : e.addEventListener('load', a, false);
    })(window, document, window.Beacon || function () {});

    // Initialize the Beacon
    window.Beacon('init', '86a7ac14-638e-42d4-9506-362c84380956');
  }, []);

  return null; // This component doesn't render anything to the UI
};

export default ChatwootWidget;
