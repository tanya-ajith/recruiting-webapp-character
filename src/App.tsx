import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import SkillCheckResult from './components/skill/SkillCheckResult';
import Character from './components/Character';


function App() {
  const [num, setNum] = useState<number>(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      {/* <section className="App-section">
        <div>
          Value:
          {num}
          <button>+</button>
          <button>-</button>
        </div>
      </section> */}
      <section className="App-section">
        <SkillCheckResult />
      </section>
      <section className="App-section">
        <Character />
      </section>
    </div>
  );
}

export default App;
