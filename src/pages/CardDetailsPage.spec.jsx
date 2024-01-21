import { expect, test, vi } from "vitest";
import CardDetailsPage from "./CardDetailsPage";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

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

vi.mock("axios");

test("display card details", async () => {
  axios.get.mockResolvedValue({
    data: testCardData,
  });

  render(
    <BrowserRouter>
      <CardDetailsPage />
    </BrowserRouter>
  );

  expect(await screen.findByText("Lemmorld!")).toBeDefined();
});
