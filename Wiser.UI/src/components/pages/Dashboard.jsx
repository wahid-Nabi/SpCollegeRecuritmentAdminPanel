import PageLoader from "../common/PageLoader";
import WiserTable from "../common/WiserTable";
import WiserBreadcrumb from "../common/WiserBreadcrumb";
const links = [{ text: "Dashboard", link: "/wiser/dashboard" }];
const Dashboard = () => {
  return (
    <div style={{ padding: "10px" }}>
      <WiserBreadcrumb links={links} />
      {/* <PageLoader open={true} /> */}
      <WiserTable />
    </div>
  );
};

export default Dashboard;
