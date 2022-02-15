import Dashboard from "../components/pages/Dashboard";
import Campus from "../components/pages/Campus";
import Settings from "../components/pages/Settings";

export const routePaths = {
  DashboardPath: "/wiser/dashboard",
  GeneralSettingsPath: "/wiser/general-settings",
  ManageCampusPath: "/wiser/manage-campus",
  ManageCampusPathClasses: "/wiser/manage-campus/classes",
  ManageCampusPathSubjects: "/wiser/manage-campus/subjects",
  ManageCampusPathStreams: "/wiser/manage-campus/streams",
  ManageCampusPathCombinatons: "/wiser/manage-campus/combinations",
};

const mainRoutes = [
  {
    to: routePaths.DashboardPath,
    text: "Dashboard",
    icon: "dashboard",
    component: Dashboard,
  },
  {
    to: routePaths.GeneralSettingsPath,
    text: "Settings",
    icon: "settings",
    component: Settings,
  },
];
const manageRoutes = [
  {
    to: "/wiser/manage-campus",
    text: "Campus",
    icon: "school",
    open: false,
    component: Campus,
    subMenus: [
      { to: "/wiser/manage-campus/classes", text: "Classes", icon: "class" },
      { to: "/wiser/manage-campus/subjects", text: "Subjects", icon: "note" },
      { to: "/wiser/manage-campus/streams", text: "Streams", icon: "notes" },
      {
        to: "/wiser/manage-campus/combinations",
        text: "Combinations",
        icon: "subject",
      },
    ],
  },
  {
    to: "/wiser/manage-students",
    text: "Students",
    icon: "group_add",
    open: false,
    subMenus: [
      {
        to: "/wiser/manage-students/new",
        text: "New Records",
        icon: "person_add",
      },
      {
        to: "/wiser/manage-students/profiles",
        text: "Profiles",
        icon: "person_outline",
      },
    ],
  },
  {
    to: "/wiser/manage-departments",
    text: "Departments",
    icon: "apartment",
    open: false,
    subMenus: [
      {
        to: "/wiser/manage-departments/all",
        text: "All Departments",
        icon: "domain",
      },
      {
        to: "/wiser/manage-departments/details",
        text: "Deparment Details",
        icon: "home_work",
      },
    ],
  },
  { to: "/wiser/manage-staff", text: "Staff", icon: "assignment_ind" },
  {
    to: "/wiser/manage-stories",
    text: "Stories",
    icon: "notifications_active",
  },
];

export { mainRoutes, manageRoutes };
