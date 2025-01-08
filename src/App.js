import logo from './logo.svg';
import './App.css';
import ExpenseEntry from './components/ExpenseEntry';
import FormattedMoney from './components/FormattedMoney';
import FormattedDate from './components/FormattedDate';
import ExpenseEntryItemList from './components/ExpenseEntryItemList';
import MessageWithEvent from './components/MessageWithEvent';
import ExpenseEntryItemListFn from './components/ExpenseEntryItemList';
import MyComponent from './components/memoization';
import { BrowserRouter as Router, Routes, Route, Link , Navigate , useParams} from 'react-router-dom';
import Logger from './components/effect';
import FetchData from './components/fetch';
import Theme from './components/theme';

/*const name = "Grape Juice"
const amount = 30.00
const spendDate = new Date("2020-10-10")
const category = "Food"
function App() {
  return (
     <ExpenseEntry
          name={name}
          amount={amount}
          spendDate={spendDate}
          category={category} />
  );
}*/
/*const item={
  id:1,
  name : "Grape Juice",
  amount : 30.5,
  spendDate: new Date("2020-10-10"),
  category: "Food" 
};
function App(){
  return(
    <>
    <ExpenseEntry item={item} />
    <br/>
    <ExpenseEntry item={item} />
</>
  );
}*/

const items = [
  { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food"
 },
  { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category:
 "Food" },
  { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category:
 "Entertainment" },
  { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15",
 category: "Academic" },
  { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category:
 "Food" },
  { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category:
 "Cloth" },
  { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category:
 "Entertainment" },
  { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category:
 "Food" },
  { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category:
 "Gadgets" },
  { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category:
 "Academic" }
 ]
 

const amount = 28.99769;
const date=new Date("2002-01-08");
const text="React";
function App(){
  return(
    <>
      <FormattedMoney amount={amount}/>
      <br/>
      <FormattedDate date={date}/>
      <br/>
      <ExpenseEntryItemList items={items} />
      <br/>
      <MessageWithEvent name="React" />
      <br/>
      <MessageWithEvent name="React developer" />
      <br/>
      <MyComponent name="React"/>
      <br/>
      <Logger/>
      <br/>
      <Theme/>
    </>
  );
}

/*function App(){
  return(
    <Router>
      <nav>
        <Link to="/Expense">Expense</Link> | <Link to="/formatmoney">FormattedMoney</Link> | <Link to="/formatdate">FormattedDate</Link> | <Link to="/messagewithevent">MessageWithEvent</Link>
      </nav>
      <Routes>
        <Route path="/Expense" element=<ExpenseEntryItemList items={items} /> />
        <Route path="/formatmoney" element=<FormattedMoney amount={amount}/> />
        <Route path="/formatdate" element=<FormattedDate date={date}/> />
        <Route path="/messagewithevent" element=<MessageWithEvent name={text} /> />
      </Routes>
    </Router>
  );
}*/

/*function Product() {
  const { id } = useParams();
  return <h2>Product ID: {id}</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element=<Product /> />
      </Routes>
    </Router>
  );
}*/

export default App;

