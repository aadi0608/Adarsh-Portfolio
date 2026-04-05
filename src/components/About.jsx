import { Box, Container, Grid, Typography } from "@mui/material";
import { PERSONAL, EDUCATION } from "../data";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function About({ dark }) {
  const accent = dark ? "#00e5ff" : "#7c4dff";
  const accent2 = dark ? "#7c4dff" : "#ff4081";

  const glassBg = dark ? "rgba(10,25,50,0.6)" : "rgba(255,255,255,0.65)";
  const glassBorder = dark
    ? "1px solid rgba(0,229,255,0.14)"
    : "1px solid rgba(124,77,255,0.14)";

  const INFO_CARDS = [
    {
      icon: "🎓",
      title: "Education",
      sub: `${EDUCATION.university}  ·  ${EDUCATION.period}`,
      detail: `B.Tech (CSE)  ·  CGPA: ${EDUCATION.cgpa}`,
      color: "#7c4dff",
    },
    {
      icon: "🏢",
      title: "Current Role",
      sub: PERSONAL.company,
      detail: `Software Engineer  ·  Jan 2024 – Present`,
      color: "#00e5ff",
    },
    {
      icon: "📍",
      title: "Location",
      sub: "India",
      detail: "Open to Remote / Hybrid",
      color: "#ff4081",
    },
    {
      icon: "🌟",
      title: "Focus",
      sub: "Web & Mobile Development",
      detail: "AI-powered applications",
      color: "#4caf50",
    },
  ];

  return (
    <Box id="about" sx={{ py: 12, position: "relative", zIndex: 1 }}>
      <Container maxWidth="lg">
        <Reveal>
          <Typography
            variant="h2"
            sx={{
              mb: 7,
              fontSize: { xs: "2rem", md: "2.8rem" },
              "&::after": {
                content: '""',
                display: "block",
                width: 60,
                height: 4,
                borderRadius: 2,
                background: "linear-gradient(90deg,#00e5ff,#7c4dff)",
                mt: 1.5,
              },
            }}
          >
            About Me
          </Typography>
        </Reveal>

        <Grid container spacing={4}>
          {/* Bio card */}
          <Grid item xs={12} md={6}>
            <Reveal direction="left">
              <TiltCard
                sx={{
                  background: glassBg,
                  border: glassBorder,
                  backdropFilter: "blur(18px)",
                  borderRadius: 4,
                  p: 4,
                  height: "100%",
                }}
              >
                <Typography variant="h5" sx={{ mb: 2.5, color: accent }}>
                  Who Am I?
                </Typography>
                <Typography
                  sx={{ lineHeight: 1.9, color: "text.secondary", mb: 2 }}
                >
                  I'm a passionate{" "}
                  <Box
                    component="span"
                    sx={{ color: "text.primary", fontWeight: 600 }}
                  >
                    Software Engineer
                  </Box>{" "}
                  at Automaton AI Infosystem Pvt. Ltd., with 2+ years of
                  hands-on experience building scalable web and mobile
                  applications using{" "}
                  <Box component="span" sx={{ color: accent, fontWeight: 600 }}>
                    React.js
                  </Box>
                  ,{" "}
                  <Box component="span" sx={{ color: accent, fontWeight: 600 }}>
                    React Native
                  </Box>
                  ,{" "}
                  <Box component="span" sx={{ color: accent, fontWeight: 600 }}>
                    JavaScript
                  </Box>
                  , and{" "}
                  <Box component="span" sx={{ color: accent, fontWeight: 600 }}>
                    TypeScript
                  </Box>
                  .
                </Typography>

                <Typography
                  sx={{ lineHeight: 1.9, color: "text.secondary", mb: 2 }}
                >
                  With a strong foundation in{" "}
                  <Box component="span" sx={{ color: accent, fontWeight: 600 }}>
                    TypeScript
                  </Box>{" "}
                  and{" "}
                  <Box component="span" sx={{ color: accent, fontWeight: 600 }}>
                    modern React patterns
                  </Box>
                  , I build reusable and maintainable component architectures,
                  manage complex state, and integrate APIs efficiently to
                  deliver smooth and responsive user experiences.
                </Typography>

                <Typography
                  sx={{ lineHeight: 1.9, color: "text.secondary", mb: 2 }}
                >
                  I have practical experience in performance optimization,
                  debugging production issues, and improving application
                  scalability. I actively collaborate with backend and AI teams
                  to integrate real-world features into products used by
                  clients.
                </Typography>

                <Typography sx={{ lineHeight: 1.9, color: "text.secondary" }}>
                  I thrive at the intersection of{" "}
                  <Box
                    component="span"
                    sx={{ color: accent2, fontWeight: 600 }}
                  >
                    AI technologies
                  </Box>{" "}
                  and{" "}
                  <Box
                    component="span"
                    sx={{ color: accent2, fontWeight: 600 }}
                  >
                    frontend engineering
                  </Box>
                  , and I’m continuously working on improving my problem-solving
                  skills, system design understanding, and writing clean,
                  scalable code.
                </Typography>

                {/* Divider */}
                <Box
                  sx={{
                    my: 3,
                    height: 1,
                    background: dark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.06)",
                  }}
                />

                {/* Quick facts */}
                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                  {[
                    { label: "Degree", value: "B.Tech CSE" },
                    { label: "CGPA", value: "7.90" },
                    { label: "Exp.", value: "2.5+ Years" },
                  ].map((f) => (
                    <Box key={f.label}>
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          color: "text.disabled",
                          textTransform: "uppercase",
                          letterSpacing: 1,
                        }}
                      >
                        {f.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: accent,
                          fontSize: "1rem",
                        }}
                      >
                        {f.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </TiltCard>
            </Reveal>
          </Grid>

          {/* Info cards grid */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {INFO_CARDS.map((card, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Reveal delay={i * 0.1} direction="right">
                    <TiltCard
                      intensity={8}
                      sx={{
                        background: glassBg,
                        border: `1px solid ${card.color}22`,
                        backdropFilter: "blur(14px)",
                        borderRadius: 3,
                        p: 2.5,
                        height: "100%",
                        transition: "border-color 0.3s",
                        "&:hover": { border: `1px solid ${card.color}55` },
                      }}
                    >
                      <Typography sx={{ fontSize: "2rem", mb: 1 }}>
                        {card.icon}
                      </Typography>
                      <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                        {card.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          color: "text.secondary",
                          lineHeight: 1.5,
                        }}
                      >
                        {card.sub}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.76rem",
                          color: card.color,
                          mt: 0.6,
                          fontWeight: 600,
                        }}
                      >
                        {card.detail}
                      </Typography>
                    </TiltCard>
                  </Reveal>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
