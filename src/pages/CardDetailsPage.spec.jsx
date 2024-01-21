
const testCardData = {
  createdBy: "65a959899a29b2a85878c7ed",
  title: "Lemmorld!",
  status: "To-do",
  topic: "game",
  category: "Action-Adventure",
  content: "Click on them to acttheir skils!",
  link: "https://github.com/hymced/project1-game",
  consumeTime:
    "Your goal is to have at least 60% of lemmings IN the EXIT at the bottom.",
};

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useParams: () => {
      return {
        cardId: 123,
      };
    },
  };
});
