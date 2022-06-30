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
  Grid,
  Divider,
  Box,
} from "@mantine/core";
import { Star, Clock, AlertTriangle } from "tabler-icons-react";
import CircularProgress from "@mui/material/CircularProgress";

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
  deleteSavedMovie,
  loading,
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
        <Card shadow="md" p="lg" style={{ minHeight: 600 }}>
          {loading || !movieId ? (
            <Box className={style.loader} sx={{ display: "flex" }}>
              <CircularProgress style={{ color: "#EC994B" }} />
            </Box>
          ) : (
            <>
              <Card.Section>
                <Grid>
                  <Grid.Col span={5} style={{ paddingTop: 100 }}>
                    <Center>
                      <Text
                        size="xl"
                        weight={800}
                        style={{ textAlign: "center" }}
                      >
                        {title}
                      </Text>
                    </Center>
                    <Divider style={{ paddingBottom: 5 }} my="sm" />
                    <Text size="md" weight={400} style={{ padding: 5 }}>
                      {`Directed: ${director}`}
                    </Text>
                    <Text size="md" weight={400} style={{ padding: 5 }}>
                      {`Writers: ${writer}`}
                    </Text>
                    <Text size="md" weight={400} style={{ padding: 5 }}>
                      {`Cast: ${actors}`}
                    </Text>
                  </Grid.Col>
                  <Grid.Col span={5} offset={1}>
                    <Image src={image} height={"auto"} alt={title} />
                  </Grid.Col>
                </Grid>
              </Card.Section>
              <Group
                position="apart"
                style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
              ></Group>
              <Group
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 5,
                }}
              >
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

              <Text
                size="sm"
                style={{
                  color: secondaryColor,
                  lineHeight: 1.5,
                  paddingBottom: 5,
                }}
              >
                {describtion}
              </Text>

              <Button
                variant="light"
                color="blue"
                size="lg"
                style={{ marginTop: 14, marginRight: 4 }}
              >
                Watched
              </Button>
              <Button
                variant="light"
                color="blue"
                size="lg"
                style={{ marginTop: 14 }}
                onClick={() => deleteSavedMovie(movieId)}
              >
                Delete
              </Button>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default MovieInfo;
