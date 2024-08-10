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
      <h1>It's work!</h1>
    </div>
  );
}

export default App;
