import { useState } from 'react';
import './App.css';
import SkillCheckResult from './components/skill/SkillCheckResult';
import Character from './components/Character';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts';


function App() {
  const [num, setNum] = useState<number>(0);
  const [characterList, setCharacterList] = useState([]);

  const createNewCharacter = () => { 
    // setting character attributes
    let attributeList = [];
    let id = 1;
    
    ATTRIBUTE_LIST.forEach(attribute => {
      const attributeItem = {
        id: id,
        name: attribute,
        value: 10,
        modifierValue: 10
      }

      attributeList.push(attributeItem);
      id = id + 1;
    })

    // setting character classes
    let classList = [];
    id = 1;

    Object.keys(CLASS_LIST).forEach(element => {
      const classItem = {
        id: id,
        name: element,
        isMetReqs: false
      }

      classList.push(classItem);
      id = id + 1;
    })

    // setting character skills
    let skillList = [];
    id = 1;

    SKILL_LIST.forEach(skill => {
      const skillItem = {
        id: id,
        name: skill.name,
        value: 0,
        modifierName: skill.attributeModifier,
        modifierValue: 0
      }

      skillList.push(skillItem);
      id = id + 1;
    });

    // setting character
    const characterItem = {
      id: 1,
      attributes: attributeList,
      classes: classList,
      skills: skillList
    }

    return characterItem;
  }

  const initialize = () => { 
    if(!characterList || characterList.length === 0) {
      const characterItem = createNewCharacter();
      setCharacterList([characterItem]);
    }
  }

  initialize();

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <SkillCheckResult />
      </section>
      <section className="App-section">
        {
          characterList.map((character, index) => {
            return (
              <section className="App-section" key={index}>
                <Character character={character} />
              </section>
            )
          })
        }
      </section>
    </div>
  );
}

export default App;
