export default async ({ Vue, router }) => {
  function inject(name, hook) {
    Vue.prototype[`$${name}`] = hook;
  }
  const _hmt = await new Promise(resolve => {
    if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
      // before install
      window._hmt = window._hmt || [];
      window._hmt.push(["_setAutoPageview", false]);
      // install
      const hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?71001b66f08ad6ef9ce530ee894cdb85";
      const s = document.getElementsByTagName("script")[0];
      hm.onload = () => resolve(window._hmt);
      hm.onerror = () => resolve(window._hmt);
      s.parentNode.insertBefore(hm, s);
    } else {
      return resolve([]);
    }
  });

  // API
  const ga = {
    pushTrackPageview(path) {
      return _hmt.push(["_trackPageview", path]);
    },
    pushTrackEvent(...params) {
      return _hmt.push(["_trackEvent", ...params]);
    }
  };

  // 加入百度统计
  router.afterEach(to => {
    ga.pushTrackPageview(to.fullPath);
  });

  inject("ga", ga);
};
