import { Button } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import Confirm from "../components/Confirm";
import { populateDB } from "../services/db";
import notify from "../utils/notify";
import rssImg from "../img/rss-ore.jpg";

async function populate() {
  try {
    await populateDB();
    notify("DB populated");
  } catch (e) {
    notify("Error - populateDB", "error");
    console.log(e);
  }
}

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="p-4">
      <div className="grid md:grid-cols-2 gap-6">
        <section className="rounded-md shadow-black shadow-sm p-6 prose !max-w-none">
          <h2>Populate Counter with data</h2>
          <p>
            Populate DB with dummy data (this will delete all the previous
            data!!)
          </p>
          <Confirm title={`Populate DB`} onConfirm={populate}>
            <Button variant="contained" size="large">
              Populate DB - dummy data
            </Button>
          </Confirm>
        </section>
        <section className="rounded-md shadow-black shadow-sm p-6 prose !max-w-none">
          <h2>About App and Motivation</h2>

          <ul>
            <li>
              As i started learning React, did not know what app should i do for
              my portfolio.
            </li>
            <li>
              Counting available in-game resources, for spending planing, or
              just to have overview
            </li>
          </ul>
          <p>
            The game (i have been lured into by false advertising) does not
            provide you those important numbers, only showing available RSS
            boxes as is shown in the picture bellow (example: one of the 4 main
            resources - food, lumber, stone, ore)
          </p>
          <p>
            This app is for PC, on mobile/tablet you run the game. You can very
            quickly fill the form for 4 main resources by focus in 5K-input and
            typing numbers followed by TABs (You have an overview within 1-2
            minutes.)
          </p>

          <img src={rssImg} width={280} />
        </section>
      </div>
    </div>
  );
}
