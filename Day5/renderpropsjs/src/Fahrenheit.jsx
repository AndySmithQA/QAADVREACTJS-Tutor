function Fahrenheit({ value }) {
    return <div className="temp">{(parseInt(value || 0) * 9) / 5 + 32}°F</div>;
  }

  export default Fahrenheit;


  