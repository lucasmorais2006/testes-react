import './App.css'
import { FaCat } from "react-icons/fa"




function App() {
 return <div class="bg-pink-300 h-screen items-center">
  <header class="text-purple-600 bg-white text-center h-10 font-bold"><FaCat />DudaSys</header>
  <div class="h-80 rounded-xl items-center justify-center bg-white w-100 text-center fixed top-[50%] left-[50%] ml-[-15%] mt-[-10%]">
    <h3 class="text-xl p-4 font-bold">Entrar na sua conta</h3>
    <form action="https://getform.io/f/bmdmodra" method="POST">
    <input class="w-80 border-gray-400 border-2 rounded-xl m-2 p-3" type="email" placeholder='Digite o email' name="email" />
    <input class="w-80 border-gray-400 border-2 rounded-xl m-2 p-3" type="text" placeholder='Digite a senha' name="senha" />
      <button class= "w-80 items-center text-white text-center rounded-xl p-3 bg-purple-600"type="submit">Entrar</button>
    </form>
 </div>
</div> 
}

export default App
