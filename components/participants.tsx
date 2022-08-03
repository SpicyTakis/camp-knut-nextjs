import { Grid, SimpleGrid, Text } from "@mantine/core";
import { participants } from "../content/streamers";

import type { ParticipantsType } from "../content/streamers";

export default function Participants() {
  return (
    <Grid>
      {participants.map((category) => (
        <Grid.Col>
          <Category category={category} />
        </Grid.Col>
      ))}
    </Grid>
  );
}

function Category({category}: { category: ParticipantsType }) {
  return (
    <div>
      <Text transform="capitalize" weight={"bold"}>
        {category.category}
      </Text>
      {category.members.map((member) => (
        <>
          <Text
            variant="link"
            component="a"
            href={member.url}
            target="_blank"
            rel="noreferrer"
          >
            {member.name}
          </Text>
          <br></br>
        </>
      ))}
    </div>
  );
}

