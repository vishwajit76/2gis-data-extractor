const initialize = () =>
    new Promise((e, t) => {
      try {
        chrome.storage.sync.get("appinfo", function (t) {
          try {
            chrome.storage.sync.get("scrap", function (t) {
                  void 0 !== t.scrap && e(t.scrap);
                })
             
          } catch (e) {
            console.log(e);
          }
        });
      } catch (e) {
        console.log(e);
      }
    }),
  cleanScraper = () =>
    new Promise((e, t) => {
      try {
        chrome.storage.sync.remove("scrap"), e();
      } catch (e) {
        console.log(e);
      }
    }),
  setScraper = (e) =>
    new Promise((t, n) => {
      try {
        chrome.storage.sync.set({ scrap: e }, function () {
          try {
            t();
          } catch (e) {
            console.log(e);
          }
        });
      } catch (e) {
        console.log(e);
      }
    }),
  setup = () =>
    new Promise((e, t) => {
      try {
        chrome.storage.sync.get("appinfo", function (t) {
          try {
            chrome.storage.sync.get("setting", function (t) {
                  void 0 !== t.setting &&
                    void 0 !== t.setting.remainExtrx &&
                    (document.getElementById("report").innerHTML =
                      '<button type="button" class="btn btn-primary" style="position: fixed; top: 50%; margin: 0 auto; right: 10%;">Collect Data</button>'),
                    e();
                })
             
          } catch (e) {
            console.log(e);
          }
        });
      } catch (e) {
        console.log(e);
      }
    }),
  layout = () =>
    new Promise((e, t) => {
      try {
        (document.getElementById("sfcnt").style.pointerEvents = "none"),
          (document.getElementById("appbar").style.pointerEvents = "none"),
          void 0 !== document.getElementsByClassName("D6j0vc")[0] &&
            (document.getElementsByClassName("D6j0vc")[0].style.pointerEvents =
              "none"),
          void 0 !== document.getElementsByClassName("CvDJxb")[0] &&
            (document.getElementsByClassName("CvDJxb")[0].style.pointerEvents =
              "none");
        let t = document.createElement("div");
        (t.style.backgroundColor = "rgb(255 255 255)"),
          (t.style.position = "fixed"),
          (t.style.top = "0"),
          (t.style.bottom = "0"),
          (t.style.right = "0"),
          (t.style.width = "100%"),
          (t.style.opacity = "0"),
          document.getElementById("lu_pinned_rhs").append(t);
        let n = document.createElement("div");
        n.setAttribute("id", "report"),
          (n.style.backgroundColor = "rgb(255 255 255)"),
          (n.style.position = "fixed"),
          (n.style.top = "0"),
          (n.style.bottom = "0"),
          (n.style.right = "0"),
          (n.style.width = "25%"),
          document.getElementById("lu_pinned_rhs").append(n),
          (document.getElementById("report").innerHTML =
            '<form style="position: fixed; top: 40%; padding-left: 1%;"><div class="spinner-border text-primary" role="status" style="margin-left: 45%; margin-bottom: 30px;"><span class="sr-only">Loading...</span></div><p class="h5" style="line-height: 28px;">Current Page :- <span class="currentPageNo">1</span></p><p class="h5" style="line-height: 28px;">Collected Data :- <span class="collectedData">0</span></p><p class="h5" style="line-height: 28px;">Time Consuming :- <span class="timeConsumingMin"></span><span class="timeConsumingSec">0</span></p><a href="#" id="show_record" style="text-decoration: underline; line-height: 28px;">Show Records </a><a href="#" id="close" style="text-decoration: underline; margin-left: 8px; line-height: 28px;">Close </a><a href="#" id="pause" style="text-decoration: underline; margin-left: 8px; line-height: 28px;">Pause </a></form>'),
          e();
      } catch (e) {
        console.log(e);
      }
    }),
  addListener = () =>
    new Promise((e, t) => {
      try {
        document.getElementById("show_record").addEventListener("click", () => {
          chrome.runtime.sendMessage({ type: "show_record" });
        }),
          document.getElementById("close").addEventListener("click", () => {
            chrome.runtime.sendMessage({ type: "window_close" });
          }),
          e();
      } catch (e) {
        console.log(e);
      }
    }),
  timer = () => {
    let e = 1,
      t = 1;
    setInterval(function () {
      e > 59 &&
        ((e = 0),
        (document.getElementsByClassName("timeConsumingMin").item(0).innerHTML =
          t + " Min : "),
        t++),
        (document.getElementsByClassName("timeConsumingSec").item(0).innerHTML =
          e + " Sec"),
        e++;
    }, 1e3);
  };
(async () => {
  try {
    scrap = await new Promise((e, t) => {
      try {
        chrome.storage.sync.get("scrap", function (t) {
                  void 0 !== t.scrap && e(t.scrap);
                })
      } catch (e) {
        console.log(e);
      }
    });
  } catch (e) {
    console.log(e);
  }
  try {
    await new Promise((e, t) => {
      try {
        (document.getElementById("sfcnt").style.pointerEvents = "none"),
          (document.getElementById("appbar").style.pointerEvents = "none"),
          void 0 !== document.getElementsByClassName("D6j0vc")[0] &&
            (document.getElementsByClassName("D6j0vc")[0].style.pointerEvents =
              "none"),
          void 0 !== document.getElementsByClassName("CvDJxb")[0] &&
            (document.getElementsByClassName("CvDJxb")[0].style.pointerEvents =
              "none");
        let t = document.createElement("div");
        (t.style.backgroundColor = "rgb(255 255 255)"),
          (t.style.position = "fixed"),
          (t.style.top = "0"),
          (t.style.bottom = "0"),
          (t.style.right = "0"),
          (t.style.width = "100%"),
          (t.style.opacity = "0"),
          document.getElementById("lu_pinned_rhs").append(t);
        let n = document.createElement("div");
        n.setAttribute("id", "report"),
          (n.style.backgroundColor = "rgb(255 255 255)"),
          (n.style.position = "fixed"),
          (n.style.top = "0"),
          (n.style.bottom = "0"),
          (n.style.right = "0"),
          (n.style.width = "25%"),
          document.getElementById("lu_pinned_rhs").append(n),
          (document.getElementById("report").innerHTML =
            '<form style="position: fixed; top: 40%; padding-left: 1%;"><div class="spinner-border text-primary" role="status" style="margin-left: 45%; margin-bottom: 30px;"><span class="sr-only">Loading...</span></div><p class="h5" style="line-height: 28px;">Current Page :- <span class="currentPageNo">1</span></p><p class="h5" style="line-height: 28px;">Collected Data :- <span class="collectedData">0</span></p><p class="h5" style="line-height: 28px;">Time Consuming :- <span class="timeConsumingMin"></span><span class="timeConsumingSec">0</span></p><a href="#" id="show_record" style="text-decoration: underline; line-height: 28px;">Show Records </a><a href="#" id="close" style="text-decoration: underline; margin-left: 8px; line-height: 28px;">Close </a><a href="#" id="pause" style="text-decoration: underline; margin-left: 8px; line-height: 28px;">Pause </a></form>'),
          e();
      } catch (e) {
        console.log(e);
      }
    });
  } catch (e) {
    console.log(e);
  }
  try {
    await new Promise((e, t) => {
      try {
        chrome.storage.sync.get("appinfo", function (t) {
          try {
           chrome.storage.sync.get("setting", function (t) {
                  void 0 !== t.setting &&
                    void 0 !== t.setting.remainExtrx &&
                    (document.getElementById("report").innerHTML =
                      '<button type="button" class="btn btn-primary" style="position: fixed; top: 50%; margin: 0 auto; right: 10%;">Collect Data</button>'),
                    e();
                })
             
          } catch (e) {
            console.log(e);
          }
        });
      } catch (e) {
        console.log(e);
      }
    });
  } catch (e) {
    console.log(e);
  }
  try {
    new Promise((e, t) => {
      try {
        document.getElementById("show_record").addEventListener("click", () => {
          chrome.runtime.sendMessage({ type: "show_record" });
        }),
          document.getElementById("close").addEventListener("click", () => {
            chrome.runtime.sendMessage({ type: "window_close" });
          }),
          e();
      } catch (e) {
        console.log(e);
      }
    });
  } catch (e) {
    console.log(e);
  }
  timer();
})();
