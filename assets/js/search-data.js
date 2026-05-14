// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "about",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about";
          },
        },{id: "nav-cruises",
          title: "Cruises",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cruises/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news";
          },
        },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people";
          },
        },{id: "dropdown-2025",
              title: "2025",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/workshop_2025";
              },
            },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications";
          },
        },{id: "nav-data",
          title: "data",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/data";
          },
        },{id: "news-obvi-workshop-2025-application-opens",
          title: 'OBVI workshop 2025 application opens',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/obvi_2025_workshop_application.html";
            },},{id: "news-last-day-to-apply-for-the-2025-obvi-workshop-apply-here",
          title: 'Last day to apply for the 2025 OBVI workshop! Apply here!',
          description: "",
          section: "News",},{id: "news-news-from-the-cruise-hot-september-2025",
          title: 'News from the cruise: HOT September 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/sep2025_HOTcruise.html";
            },},{id: "news-2025-obvi-meeting-in-cape-town",
          title: '2025 OBVI meeting in Cape Town',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/oct2025_UCTmeeting.html";
            },},{id: "news-subsea-was-featured-in-the-online-science-magazine-nautilus-read-the-article-here",
          title: 'SUBSEA was featured in the online science magazine Nautilus! Read the article here....',
          description: "",
          section: "News",},{id: "news-2025-obvi-workshop-recap",
          title: '2025 OBVI Workshop recap',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/obvi_2025_workshop_wrapup.html";
            },},{id: "news-south-atlantic-cruise-1-begins",
          title: 'South Atlantic Cruise 1 Begins',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-04-subsea-part1-begins.html";
            },},{id: "news-news-from-the-cruise-s-atlantic-cruise-1-science-operations-begin",
          title: 'News from the Cruise: S.Atlantic Cruise 1 Science Operations Begin',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-07-subsea-part1-station1-operations.html";
            },},{id: "news-news-from-the-cruise-s-atlantic-cruise-1-week-2-update",
          title: 'News from the Cruise: S.Atlantic Cruise 1 Week 2 Update',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-13-subsea-part1-week2-update.html";
            },},{id: "news-news-from-the-cruise-s-atlantic-cruise-1-mid-cruise-update",
          title: 'News from the Cruise: S.Atlantic Cruise 1 Mid-Cruise Update',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-22-subsea-mid-cruise-update.html";
            },},{id: "news-news-from-the-cruise-s-atlantic-cruise-1-final-long-station",
          title: 'News from the Cruise: S.Atlantic Cruise 1 Final Long Station',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-28-subsea-bloom-dynamics-final-station.html";
            },},{id: "news-news-from-the-cruise-s-atlantic-cruise-1-returns-to-port",
          title: 'News from the Cruise: S.Atlantic Cruise 1 Returns to Port',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-04-06-subsea-returns-to-port.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
