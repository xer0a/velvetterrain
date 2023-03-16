const velvetHeaderText = ["V", "E", "L", "V", "E", "T"];
const terrainHeaderText = ["T", "E", "R", "R", "A", "I", "N"];

export const BoxLogotext = () => {
  return (
    <div className="text-left uppercase text-2xl px-4 py-2 flex flex-col shadow shadow-white border w-72">
      <div className="flex justify-between">
        {velvetHeaderText.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </div>
      <div className="flex justify-between">
        {terrainHeaderText.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </div>
    </div>
  );
};
