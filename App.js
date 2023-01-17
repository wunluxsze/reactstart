
import './App.css';

function App() {
  // let text = 'текст'

  // let text2 = <p>текст</p>

  // let text3 = <p>текст1</p>
  // let text4 = <p>текст2</p>

  // let attr = 'block'

  // let str = 'block'

  // const show = true
  // let textshow;

  // if (show) {
  //   textshow = 'текст1'
  // } else {
  //   textshow = 'текст2'
  // }


  // let arr = ['a', 'b', 'c', 'd', 'e']

  // const res = arr.map(function (item) {
  //   return <li>{item}</li>
  // })

  // function getText() {
  //   return <p>текст</p>
  // }

  // const getNum1 = () => 1;
  // const getNum2 = () => 2;

  const arr = [
    {
      'firstName': 'Alex',
      'lastName': 'Alexev',
      'WorkDay': 30,
      'money': 100,
    },
    {
      'firstName': 'timur',
      'lastName': 'Kozlov',
      'WorkDay': 10,
      'money': 1000,
    },
    {
      'firstName': 'Kostya',
      'lastName': 'Ruz',
      'WorkDay': 2,
      'money': 10000,
    },
  ];

  let sum = 0;
  let elemsWorkers = arr.map(function (val) {
    let wage = val.WorkDay * val.money;
    sum += wage;
    return (
      <tr>
        <td>{val.firstName}</td>
        <td>{val.lastName}</td>
        <td>{val.WorkDay}</td>
        <td>{val.money}</td>
        <td>{wage}</td>
      </tr>
    )
  });

  return (
    <div>
      <table border="1px">
        <tr>
          <td>Имя</td>
          <td>Фамилия</td>
          <td>Кол-во отр. дней</td>
          <td>ЗП за день</td>
          <td>ЗП</td>
        </tr>
        {elemsWorkers}
      </table>
      <p>{sum} зп сотрудникам</p>
    </div>
  )

  // return (
  //   <div>
  //     <div className="App">
  //       текст
  //     </div>

  //     <div className="App">
  //       {text}
  //     </div>

  //     <div className="App">
  //       {text2}
  //     </div>

  //     <div className="App">
  //       {text3}
  //       <p>!!!</p>
  //       {text4}
  //     </div>

  //     <div className="App" id={attr}>
  //       id сменился
  //     </div>

  //     <div className={str}>
  //       className сменился
  //     </div>
  //     <div className='text'>
  //       ахахах
  //     </div>
  //     <div>
  //       {textshow}
  //     </div>
  //     <ul>{res}</ul>

  //     <div>
  //       {getText()}
  //     </div>

  //     <div>
  //       {getNum1() + getNum2()}
  //     </div>
  //   </div>
  // );
}

export default App;
