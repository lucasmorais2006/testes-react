import './App.css'

function App() {
 return  <div class="h-screen flex items-center justify-center">
 <button class= "text-center rounded-full p-3 bg-green-500 md:bg-red-600">ME CLIQUE-ME</button>
 <>
  {/* Hello world */}
  <div className="awesome" style={{ border: "1px solid red" }}>
    <label htmlFor="name">Enter your name: </label>
    <input type="text" id="name" />
  </div>
  <p />
  <form action="https://getform.io/f/adrgmwla" method="POST">
    <input type="text" name="name" />
    <input type="email" name="email" />
    <input type="text" name="message" />
    {/* add hidden Honeypot input to prevent spams */}
    <input
      type="hidden"
      name="_gotcha"
      style={{ display: "none !important" }}
    />
    {/* checkbox handle */}
    <input
      type="checkbox"
      name="subscribe"
      defaultValue="yes"
      defaultChecked=""
    />
    <input type="hidden" name="subscribe" defaultValue="no" />
    {/* radio button handle */}
    <input type="radio" name="gender" defaultValue="male" defaultChecked="" />
    <input type="radio" name="gender" defaultValue="female" />
    <input type="radio" name="gender" defaultValue="other" />
    {/* select field handle */}
    <select name="work-experience">
      <option value="one-year">0-1 years</option>
      <option value="one-five-years">1-5 years</option>
    </select>
    <button type="submit">Send</button>
  </form>
  <p />
</>

</div>
}

export default App
