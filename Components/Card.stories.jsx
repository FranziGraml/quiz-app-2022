import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: "3em", maxWidth: "400px" }}>
          <Story />
        </div>
      );
    },
  ],
};

const props = {
  id: "123",
  question: "Meine Frage",
  answer: "Meine Antwort",
};

export const Default = () => <Card {...props} />;

export const IsBookmarked = () => <Card {...props} isBookmarked />;