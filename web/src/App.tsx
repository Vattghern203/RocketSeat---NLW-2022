interface ButtonProps {
  title: string;
}

function App() {
  return (
  <div>
    <Button title="Send 1"/>

    <Button title="Send 2"/>
  </div>
  )
}

function Button(props: ButtonProps) {
  return (
    <button>
      { props.title }
    </button>
  )
}

export default App
