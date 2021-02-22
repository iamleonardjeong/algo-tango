import Insertion from './sort/Insertion';
import * as data from './data/array';

function App() {
  return (
    <>
      <h1>Algo-Tango</h1>
      <h2>알고리즘 스터디</h2>
      <h3>Array Data is: {`[${data.arr}]`}</h3>
      <Insertion />
    </>
  );
}

export default App;
