import ExpenseItem from "./components/ExpenseItem";
const hello = () => {
  return "oooW MEEN"
};
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>Ñee {hello}</p>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
