import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";

import { TimelineCard } from "../Cards/TimelineCard";

import News from "../../data/news.json";

export const NewsLine = () => {
  const customTheme = {
    yearColor: "#263864",
    lineColor: "#263864",
    dotColor: "#263864",
    borderDotColor: "#263864",
    subtitleColor: "#bf9765",
  };

  return (
    <>
      <Timeline theme={customTheme} dateFormat="short" lang="en">
        {News.map((item, index) => {
          return (
            <Container key={index}>
              <YearContent startDate={item.date} />
              <BodyContent>
                <Section>
                  <TimelineCard
                    title={item.title}
                    date={item.date}
                    desc={item.desc}
                    avatars={item.avatars}
                    names={item.names}
                  />
                </Section>
              </BodyContent>
            </Container>
          );
        })}
      </Timeline>
    </>

    // <Container>
    //   <YearContent startDate="2020/07/01" currentYear />
    //   <BodyContent>
    //     <Section>
    //       <Box bg="white">
    //         <Heading as="h3" size="md">
    //           Heading
    //         </Heading>
    //         <Text>
    //           {" "}
    //           yearColor: "#888888", lineColor: "#c5c5c5", dotColor: "#c5c5c5",
    //           borderDotColor: "#ffffff", titleColor: "#cccccc", subtitleColor:
    //           "#888888", textColor: "#cccccc" } yearColor: "#888888",
    //           lineColor: "#c5c5c5", dotColor: "#c5c5c5", borderDotColor:
    //           "#ffffff", titleColor: "#cccccc", subtitleColor: "#888888",
    //           textColor: "#cccccc" } yearColor: "#888888", lineColor:
    //           "#c5c5c5", dotColor: "#c5c5c5", borderDotColor: "#ffffff",
    //           titleColor: "#cccccc", subtitleColor: "#888888", textColor:
    //           "#cccccc" }
    //         </Text>
    //       </Box>
    //     </Section>

    //     <Section title="Another title">
    //       <Description text="Description" />
    //       <Description text="Another description" />
    //     </Section>
    //   </BodyContent>
    // </Container>
  );
};
