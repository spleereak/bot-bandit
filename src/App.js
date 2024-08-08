import {useEffect} from "react";

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      It's work!
      <button onClick={onClose}>Click me</button>
    </div>
  );
}

export default App;
