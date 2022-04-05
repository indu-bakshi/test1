(function (i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function () {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  "script",
  "https://www.google-analytics.com/analytics.js",
  "ga"
);

ga("create", "UA-221592716-1", "auto");

introJs()
  .setOptions({
    disableInteraction: true,

    steps: [
      {
        title: "<img src=images/logo-dark.svg width=130px>",
        intro:
          "LitmusBlox is an automated Candidate Engagement Software that delivers a large volume of Qualified, Interested, Pre-screened Interview-Ready candidates in 48 hours.",
        scrollTo: "tooltip",
      },
      {
        element: document.querySelector("#accordionCandidateWrapper"),
        title: "Rich Candidate Profile",
        intro:
          "LitmusBlox allows you to easily collect extremely detailed and useful information of the candidate.",
        scrollTo: "tooltip",
      },
      {
        element: document.querySelector("#drop-img2"),
        intro:
          "We know that too much information can be a little overwhelming, but you can still expand this section to view all the candidate information.",
        disableInteraction: false,
      },
      {
        element: document.querySelector("#heatmap-id"),
        title: "Candidate Skill Heatmap",
        intro:
          "The skill heatmap is a wonderful tool that allows you to visualize the true capability of candidate in rich details. Feel free to hover on the heatmap and explore more.",
        disableInteraction: false,
        scrollTo: "tooltip",
      },
      {
        element: document.querySelector("#screening-id"),
        title: "Screening Questions",
        intro:
          "We also allow you to ask candidate a set of questions that will help you decide if you want to interview that candidate.",
        scrollTo: "tooltip",
      },
      {
        element: document.querySelector("#help-icon-top"),
        title: "Product Tour",
        intro: "Click on this icon to start the product tour.",
      },
    ],
  })
  .onbeforechange(function () {
    let dimensionValue5 = this._currentStep;
    ga("set", "dimension5", dimensionValue5);
    ga("send", "pageview");
  })
  .onchange(function (element) {
    if (element.id === "screening-id") {
      $("#collapseOne1").addClass("show");
      $("#drop-img").toggleClass("down");
    } else {
      $("#collapseOne1").removeClass("show");
      $("#drop-img").removeClass("down");
    }
  })
  .start();

$("#help-icon-top").click(function () {
  introJs()
    .setOptions({
      disableInteraction: true,

      steps: [
        {
          title: "<img src=images/logo-dark.svg width=130px>",
          intro:
            "LitmusBlox is an automated Candidate Engagement Software that delivers a large volume of Qualified, Interested, Pre-screened Interview-Ready candidates in 48 hours.",
          scrollTo: "tooltip",
        },
        {
          element: document.querySelector("#accordionCandidateWrapper"),
          title: "Rich Candidate Profile",
          intro:
            "LitmusBlox allows you to easily collect extremely detailed and useful information of the candidate.",
          scrollTo: "tooltip",
        },
        {
          element: document.querySelector("#drop-img2"),
          intro:
            "We know that too much information can be a little overwhelming, but you can still expand this section to view all the candidate information.",
          disableInteraction: false,
        },
        {
          element: document.querySelector("#heatmap-id"),
          title: "Candidate Skill Heatmap",
          intro:
            "The skill heatmap is a wonderful tool that allows you to visualize the true capability of candidate in rich details. Feel free to hover on the heatmap and explore more.",
          disableInteraction: false,
          scrollTo: "tooltip",
        },
        {
          element: document.querySelector("#screening-id"),
          title: "Screening Questions",
          intro:
            "We also allow you to ask candidate a set of questions that will help you decide if you want to interview that candidate.",
          scrollTo: "tooltip",
        },
        {
          element: document.querySelector("#help-icon-top"),
          title: "Product Tour",
          intro: "Click on this icon to start the product tour.",
        },
      ],
    })
    .onbeforechange(function () {
      let dimensionValue5 = this._currentStep;
      ga("set", "dimension5", dimensionValue5);
      ga("send", "pageview");
    })
    .onchange(function (element) {
      if (element.id === "screening-id") {
        $("#collapseOne1").addClass("show");
        $("#drop-img").toggleClass("down");
      } else {
        $("#collapseOne1").removeClass("show");
        $("#drop-img").removeClass("down");
      }
    })
    .start();
});
