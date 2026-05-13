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
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news";
          },
        },{id: "dropdown-2025",
              title: "2025",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/workshop_2025";
              },
            },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people";
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
            },},{id: "news-subsea-part-1-begins-in-the-south-atlantic",
          title: 'SUBSEA Part 1 Begins in the South Atlantic',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-04-subsea-part1-begins.html";
            },},{id: "news-subsea-part-1-science-operations-begin-at-station-1",
          title: 'SUBSEA Part 1: Science Operations Begin at Station 1',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-07-subsea-part1-station1-operations.html";
            },},{id: "news-subsea-part-1-sampling-expands-across-the-south-atlantic-gyre",
          title: 'SUBSEA Part 1: Sampling Expands Across the South Atlantic Gyre',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/title:%20%22News%20from%20the%20Cruise:%20SUBSEA%20Part%201%20Week%202%20Update%22";
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
