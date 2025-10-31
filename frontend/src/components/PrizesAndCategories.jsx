import React from "react";
import { Box, Typography, Grid, Card, CardHeader, CardContent, Divider } from "@mui/material";
import { FaTrophy, FaRocket, FaBrain, FaGamepad } from "react-icons/fa";

const PrizesAndCategories = () => {
  const prizes = [
    { icon: <FaTrophy />, title: "Grand Prize" },
    { icon: <FaRocket />, title: "Innovation Award" },
    { icon: <FaBrain />, title: "AI Excellence" },
    { icon: <FaGamepad />, title: "Gaming Champion" },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#0d1117",
        color: "white",
        minHeight: "fit-content",
        py: { xs: 5, md: 8 },
        px: { xs: 3, md: 6 },
        backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(35,35,112,0.8))",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 6,
          py: 4,
          borderRadius: 3,
          background:
            "linear-gradient(90deg, #ff0080, #7928ca, #007cf0, #00e5ff)",
          backgroundSize: "300% 300%",
          animation: "gradient 6s ease infinite, float 4s ease-in-out infinite alternate",
          "@keyframes gradient": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
          "@keyframes float": {
            "0%": { transform: "translateY(0px)" },
            "100%": { transform: "translateY(-10px)" },
          },
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "white", mb: 1 }}>
          ₹1 Lakh Worth Prizes
        </Typography>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          50+ Technical and Creative Categories | Unleash Your Innovation!
        </Typography>
      </Box>

      {/* Prize Highlights */}
      <Grid container spacing={4} justifyContent="center">
        {prizes.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              sx={{
                background: "linear-gradient(135deg, #1e1e2f, #282a36, #20232a)",
                color: "white",
                borderRadius: 3,
                textAlign: "center",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                boxShadow: "0 0 10px rgba(0,229,255,0.3)",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.05) rotate(-1deg)",
                  boxShadow: "0 0 25px rgba(0,229,255,0.6)",
                },
              }}
            >
              <CardHeader
                avatar={
                  <Box
                    sx={{
                      fontSize: 40,
                      color: "#00e5ff",
                      animation: "pulse 2s ease-in-out infinite",
                      "@keyframes pulse": {
                        "0%": { transform: "scale(1)", textShadow: "0 0 5px #00e5ff" },
                        "50%": { transform: "scale(1.2)", textShadow: "0 0 20px #00e5ff" },
                        "100%": { transform: "scale(1)", textShadow: "0 0 5px #00e5ff" },
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                }
                title={<Typography variant="h6">{item.title}</Typography>}
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
                  {item.desc || ""}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider
        sx={{
          mt: 6,
          borderColor: "#00e5ff",
          borderWidth: 2,
          width: "40%",
          mx: "auto",
          opacity: 0.8,
        }}
      />
    </Box>
  );
};

export default PrizesAndCategories;
