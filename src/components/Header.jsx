import logo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <div>Hello</div>
      <img src={logo} alt="Quiz Logo" />
      <h1>React Quiz</h1>
    </header>
  );
}
