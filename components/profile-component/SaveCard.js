import * as React from "react";
import {
  Stack,
  Button,
  Group,
  Text,
  Avatar,
  UnstyledButton,
} from "@mantine/core";

export default function SaveCard({ title, img, year, id, movieInfo, movieId }) {
  return (
    <Stack
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
        height: 60,
      })}
    >
      <UnstyledButton onClick={() => movieInfo(movieId)}>
        <Group>
          <Avatar size={40} color="blue" src={img}>
          </Avatar>
          <div>
            <Text>{title}</Text>
            <Text size="xs" color="gray">
              {year}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Stack>
  );
}
