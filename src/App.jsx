import './App.css'

function App() {
 return <body class="bg-pink-400">
 <div class="h-screen flex items-center justify-center">
 <button class= "text-center rounded-full p-3 bg-green-500 md:bg-red-600">Entrar</button>
 <>
  {/* Hello world */}
  <div className="awesome" style={{ border: "1px solid red" }}>
    <label htmlFor="name">Enter your name: </label>
    <input type="text" id="name" />
  </div>
  <p />
  <form action="https://getform.io/f/adrgmwla" method="POST">
    <input type="email" name="Digite o email" />
    <input type="text" name="Digite a senha" />
    {/* add hidden Honeypot input to prevent spams */}
    <input
      type="hidden"
      name="_gotcha"
      style={{ display: "none !important" }}
    />
  </form>
  <p />
</>
</div>
</body> 
}

export default App
