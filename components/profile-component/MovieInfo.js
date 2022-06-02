import React, { useEffect, useState } from "react";
import style from "./MovieInfo.module.css";
import {
  Badge,
  Avatar,
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
  Center,
} from "@mantine/core";
import { Star, Clock, AlertTriangle } from "tabler-icons-react";


const MovieInfo = ({
  title,
  rating,
  image,
  describtion,
  trailer,
  director,
  rated,
  runtime,
  writer,
  actors,
  movieId,
  deleteSavedMovie
}) => {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const avatar = (
    <Avatar color="orange" radius="md">
      <Star size={20} color={"#EC994B"} />
    </Avatar>
  );
  const clock = (
    <Avatar color="orange" radius="md">
      <Clock size={20} color={"#EC994B"} />
    </Avatar>
  );
  const alertTriangle = (
    <Avatar color="orange" radius="md">
      <AlertTriangle size={20} color={"#EC994B"} />
    </Avatar>
  );

  return (
    <div className={style.movieInfo}>
      <div style={{ width: 800, margin: "auto", paddingTop: 50 }}>
        <Card shadow="md" p="lg">
          <Card.Section>
            <Center>
              <Image src={image} height={"auto"} alt={title} />
            </Center>
          </Card.Section>
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={800}>{title}</Text>
            </Group>
            <Group style={{ display: "flex", flexDirection: 'row-reverse', marginBottom: 5}}>
            <Badge
              sx={{ paddingLeft: 0 }}
              size="lg"
              radius="xl"
              color="indigo"
              leftSection={avatar}
            >
              {rating}
            </Badge>
            <Badge
              sx={{ paddingLeft: 0 }}
              size="lg"
              radius="xl"
              color="indigo"
              leftSection={alertTriangle}
            >
              {rated}
            </Badge>
            <Badge
              sx={{ paddingLeft: 0 }}
              size="lg"
              radius="xl"
              color="indigo"
              leftSection={clock}
            >
              {runtime}
            </Badge>
            </Group>

          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {describtion}
          </Text>

          <Button
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
            onClick={() => deleteSavedMovie(movieId)}
          >
            Delete
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default MovieInfo;
