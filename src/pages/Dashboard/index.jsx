import HeroDashboard from "../../components/HeroDashboard";
import Table from "../../components/Table";
import Navigation from "../../components/Navigation";

const Dashboard = () => {
  const updateTotalsFunction = (updatedTotals) => {
    setTotals(updatedTotals);
  };
  return (
    <>
      <Navigation />
      <HeroDashboard />
      <Table updateTotals={updateTotalsFunction} />
    </>
  );
};

export default Dashboard;
