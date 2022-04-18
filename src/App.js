import Expenses from "./components/Expenses";

function App() {
  const hello = () => {
    return "oooW MEEN"
  };
  const expenses = [
    { id: 1, title: 'Car Insurance', amount: 294.75, date: new Date(2021,2,28) },
    { id: 2, title: 'Nintendo Switch', amount: 299.50, date: new Date(2021,4,2) },
    { id: 3, title: 'Smart TV OLED', amount: 498.25, date: new Date(2021,5,11) },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>Ñee {hello}</p>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
