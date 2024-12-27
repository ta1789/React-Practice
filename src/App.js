import logo from './logo.svg';
import './App.css';
import ExpenseEntry from './components/ExpenseEntry';
import FormattedMoney from './components/FormattedMoney';
import FormattedDate from './components/FormattedDate';
import ExpenseEntryItemList from './components/ExpenseEntryItemList';
import MessageWithEvent from './components/MessageWithEvent';
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

const item = [
  { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food"
 },
  { id: 1, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category:
 "Food" },
  { id: 1, name: "Cinema", amount: 210, spendDate: "2020-10-16", category:
 "Entertainment" },
  { id: 1, name: "Java Programming book", amount: 242, spendDate: "2020-10-15",
 category: "Academic" },
  { id: 1, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category:
 "Food" },
  { id: 1, name: "Dress", amount: 2000, spendDate: "2020-10-25", category:
 "Cloth" },
  { id: 1, name: "Tour", amount: 2555, spendDate: "2020-10-29", category:
 "Entertainment" },
  { id: 1, name: "Meals", amount: 300, spendDate: "2020-10-30", category:
 "Food" },
  { id: 1, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category:
 "Gadgets" },
  { id: 1, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category:
 "Academic" }
 ]
 

const amount = 28.99769;
const date=new Date("2002-01-08");
function App(){
  return(
    <>
      <FormattedMoney amount={amount}/>
      <br/>
      <FormattedDate date={date}/>
      <br/>
      <ExpenseEntryItemList item={item}/>
      <br/>
      <MessageWithEvent name="React" />
      <br/>
      <MessageWithEvent name="React developer" />
    </>
  );
}

export default App;
