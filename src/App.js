import {useEffect} from "react";

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <header>
        <div className='lvl'>
         <span>Your lvl</span>
        </div>
        <div className='nick'>
          <h2>Your nick</h2>
        </div>
        <div className='top'>
          <span />
        </div>
        <div className='settings'>
          <span />
        </div>
      </header>
      <main>
        <div className='balance'>
          <h1>Your balance</h1>
        </div>
        <div className='bandit'>
          <div className='' />
        </div>
        <div className='counter'>
          <div className='counter__skam'>
            <span>Count of reffs</span>
          </div>
          <div className='counter__tickets'>
            <span>Count of tickets</span>
          </div>
        </div>
      </main>
      <div className='navbar'>
        <a href='/scam'>
          <button>
            <svg></svg>
          </button>
        </a>
        <a href='/history'>
          <button>
            <svg></svg>
          </button>
        </a>
        <a href='/top'>
          <button>
            <svg></svg>
          </button>
        </a>
        <a href='/shop'>
          <button>
            <svg></svg>
          </button>
        </a>
        <a href='/casino'>
          <button>
            <svg></svg>
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
