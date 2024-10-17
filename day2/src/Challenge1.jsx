import Profile from "./components/Profile";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        size="70"
        profession="physicist and chemist"
        awards={{
          count: "4",
          names: [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry",
            "Davy Medal",
            "Matteucci Medal",
          ],
        }}
        discovery="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        size="70"
        profession="geochemist"
        awards={{
          count: 2,
          names: ["Miyake Prize for geochemistry", "Tanaka Prize"],
        }}
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
