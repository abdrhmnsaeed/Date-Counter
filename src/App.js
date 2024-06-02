import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const increaseStep = () => setStep((step) => step + 1);
  const decreaseStep = () => {
    if (step > 1) setStep((step) => step - 1);
  };

  const increaseCount = () => setCount((count) => count + step);
  const decreaseCount = () => setCount((count) => count - step);

  const addDays = (date, days) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  };
  const todayDate = new Date();

  const days = count;
  const newDate = addDays(todayDate, days);

  return (
    <>
      <div className="count">
        <button onClick={decreaseStep}>-</button>
        <h3>Step: {step}</h3>
        <button onClick={increaseStep}>+</button>
      </div>

      <div className="count">
        <button onClick={decreaseCount}>-</button>
        <h3>Count: {count}</h3>
        <button onClick={increaseCount}>+</button>
      </div>

      <h2>
        {count === 0
          ? "Today"
          : count === -1
          ? `${count} days ago was`
          : count > 0
          ? `${count} days from today is`
          : `${count} days ago was`}{" "}
        {newDate.toDateString()}
      </h2>
    </>
  );
}
