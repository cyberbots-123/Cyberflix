// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Button,
//   List,
//   ListItem,
//   ListItemText,
//   Chip,
//   Paper,
// } from "@mui/material";
// import {
//   FaTasks,
//   FaChessKnight,
//   FaFlag,
//   FaInfoCircle,
//   FaFileDownload,
// } from "react-icons/fa";
// import { assets } from "../assets/assets";

// const ZoneDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { zone } = location.state || {};

//   if (!zone) {
//     return (
//       <Box
//         sx={{
//           p: 4,
//           textAlign: "center",
//           bgcolor: "#0a0a0a",
//           minHeight: "100vh",
//         }}
//       >
//         <Typography variant="h6" sx={{ color: "white" }}>
//           No zone selected.
//         </Typography>
//         <Button
//           onClick={() => navigate(-1)}
//           sx={{
//             mt: 2,
//             color: "white",
//             bgcolor: "#00e5ff",
//             "&:hover": { bgcolor: "#ff4081" },
//           }}
//         >
//           Go Back
//         </Button>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ bgcolor: "#0a0a0a", color: "white", minHeight: "100vh", p: 4 }}>
//       {/* Back Button */}
//       <Button
//         onClick={() => navigate(-1)}
//         sx={{
//           mb: 3,
//           color: "#00e5ff",
//           border: "1px solid #00e5ff",
//           "&:hover": { bgcolor: "#00e5ff", color: "black" },
//         }}
//       >
//         ← Back
//       </Button>

//       {/* Zone Banner Image */}
//       <Box
//         sx={{ position: "relative", mb: 4, borderRadius: 3, overflow: "hidden" }}
//       >
//         <img
//           src={zone.detailImage}
//           alt={zone.name}
//           style={{ width: "100%", height: "400px", objectFit: "cover" }}
//         />
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: 0,
//             width: "100%",
//             p: 2,
//             bgcolor: "rgba(0,0,0,0.6)",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
//             {zone.name}
//           </Typography>
//           <Chip
//             label={zone.play}
//             sx={{ bgcolor: "#ff4081", color: "white", fontWeight: "bold" }}
//           />
//         </Box>
//       </Box>

//       {/* 🚀 Robot Image Section (only for Dragon Vault & Nautica Quest) */}
// {(zone.name === "DRAGON VAULT" || zone.name === "NAUTICA QUEST") && (
//   <Box
//     sx={{
//       textAlign: "center",
//       mb: 6,
//       animation: "fadeIn 2s ease-in-out",
//       "@keyframes fadeIn": {
//         "0%": { opacity: 0, transform: "translateY(20px)" },
//         "100%": { opacity: 1, transform: "translateY(0)" },
//       },
//     }}
//   >
//     <Typography
//       variant="h5"
//       sx={{
//         color: "#00e5ff",
//         fontWeight: "bold",
//         mb: 2,
//         textShadow: "0 0 10px #00e5ff, 0 0 20px #ff4081",
//         letterSpacing: "1px",
//       }}
//     >
//       ⚙️ Robot Preview
//     </Typography>

//     <Box
//       sx={{
//         display: "inline-block",
//         borderRadius: "16px",
//         overflow: "hidden",
//         boxShadow:
//           "0 0 25px rgba(0,229,255,0.6), 0 0 50px rgba(255,64,129,0.5)",
//         p: 1,
//         background: "linear-gradient(90deg, #00e5ff55, #ff408155)",
//         animation: "pulseGlow 3s infinite alternate",
//         "@keyframes pulseGlow": {
//           "0%": {
//             boxShadow:
//               "0 0 20px rgba(0,229,255,0.5), 0 0 40px rgba(255,64,129,0.3)",
//           },
//           "100%": {
//             boxShadow:
//               "0 0 40px rgba(255,64,129,0.6), 0 0 80px rgba(0,229,255,0.4)",
//           },
//         },
//       }}
//     >
//       <img
//         src={
//           zone.name === "DRAGON VAULT"
//             ? assets.DragonVaultBot
//             : assets.NauticaQuestBot
//         }
//         alt={`${zone.name} Robot`}
//         style={{
//           width: "100%",
//           maxWidth: "500px",
//           borderRadius: "12px",
//           transition: "transform 0.3s ease-in-out",
//         }}
//         onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//         onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//       />
//     </Box>
//   </Box>
// )}



//       {/* 🆕 Buttons Section */}
// <Box
//   sx={{
//     textAlign: "center",
//     mb: 4,
//     display: "flex",
//     justifyContent: "center",
//     gap: 3,
//     flexWrap: "wrap",
//   }}
// >
//   {/* Register Now (Shown for all zones) */}
//   <Button
//     variant="contained"
//     sx={{
//       backgroundImage: "linear-gradient(90deg, #00e5ff, #ff4081)",
//       color: "white",
//       fontWeight: "bold",
//       fontSize: "1.1rem",
//       px: 4,
//       py: 1.5,
//       boxShadow: "0 0 10px #00e5ff, 0 0 20px #ff4081",
//       borderRadius: 2,
//       "&:hover": {
//         bgcolor: "#ff4081",
//         boxShadow: "0 0 15px #ff4081, 0 0 25px #00e5ff",
//       },
//     }}
//     onClick={() => navigate("/register")}
//   >
//     Register Now
//   </Button>

//   {/* Purchase Button (Only for Dragon Vault & Nautica Quest) */}
//   {(zone.name === "DRAGON VAULT" || zone.name === "NAUTICA QUEST") && (
//     <Button
//       variant="contained"
//       sx={{
//         backgroundImage: "linear-gradient(90deg, #ff4081, #00e5ff)",
//         color: "white",
//         fontWeight: "bold",
//         fontSize: "1.1rem",
//         px: 4,
//         py: 1.5,
//         boxShadow: "0 0 10px #ff4081, 0 0 20px #00e5ff",
//         borderRadius: 2,
//         "&:hover": {
//           bgcolor: "#00e5ff",
//           boxShadow: "0 0 15px #00e5ff, 0 0 25px #ff4081",
//         },
//       }}
//       onClick={() => {
//         if (zone.name === "DRAGON VAULT") navigate("/dbv");
//         else if (zone.name === "NAUTICA QUEST") navigate("/nq");
//       }}
//     >
//       Purchase Your Robot
//     </Button>
//   )}
// </Box>


//       {/* Download Handbook Button */}
//       {zone.handbook && (
//         <Box sx={{ textAlign: "right", mb: 3 }}>
//           <Button
//             variant="contained"
//             startIcon={<FaFileDownload />}
//             sx={{
//               bgcolor: "#00e5ff",
//               color: "black",
//               fontWeight: "bold",
//               "&:hover": { bgcolor: "#ff4081", color: "white" },
//             }}
//             href={zone.handbook}
//             download
//           >
//             Download Handbook
//           </Button>
//         </Box>
//       )}

//       {/* Backstory Section */}
//       <Paper
//         elevation={3}
//         sx={{
//           p: 3,
//           mb: 3,
//           borderRadius: 3,
//           bgcolor: "#1c1c1c",
//           borderLeft: "6px solid #00e5ff",
//           display: "flex",
//           alignItems: "center",
//           gap: 1,
//         }}
//       >
//         <FaInfoCircle color="#00e5ff" size={24} />
//         <Box>
//           <Typography variant="h6" sx={{ color: "white" }}>
//             Backstory
//           </Typography>
//           <Typography variant="body1" sx={{ color: "white" }}>
//             {zone.backstory}
//           </Typography>
//         </Box>
//       </Paper>

//       {/* Objective Section */}
//       <Paper
//         elevation={3}
//         sx={{
//           p: 3,
//           mb: 3,
//           borderRadius: 3,
//           bgcolor: "#1c1c1c",
//           borderLeft: "6px solid #ff4081",
//           display: "flex",
//           alignItems: "center",
//           gap: 1,
//         }}
//       >
//         <FaFlag color="#ff4081" size={24} />
//         <Box>
//           <Typography variant="h6" sx={{ color: "white" }}>
//             Objective
//           </Typography>
//           <Typography variant="body1" sx={{ color: "white" }}>
//             {zone.objective}
//           </Typography>
//         </Box>
//       </Paper>

//       {/* Arena Overview */}
//       {zone.arenaOverview && (
//         <Paper
//           elevation={3}
//           sx={{
//             p: 3,
//             mb: 3,
//             borderRadius: 3,
//             bgcolor: "#1c1c1c",
//             borderLeft: "6px solid #00ff99",
//             display: "flex",
//             alignItems: "center",
//             gap: 1,
//           }}
//         >
//           <FaChessKnight color="#00ff99" size={24} />
//           <Box>
//             <Typography variant="h6" sx={{ color: "white" }}>
//               Arena Overview
//             </Typography>
//             <Typography variant="body1" sx={{ color: "white" }}>
//               {zone.arenaOverview}
//             </Typography>
//           </Box>
//         </Paper>
//       )}

//       {/* Challenges Section */}
//       {zone.challenges && (
//         <Paper
//           elevation={3}
//           sx={{
//             p: 3,
//             mb: 3,
//             borderRadius: 3,
//             bgcolor: "#1c1c1c",
//             borderLeft: "6px solid #ffde00",
//           }}
//         >
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
//             <FaTasks color="#ffde00" size={24} />
//             <Typography variant="h6" sx={{ color: "white" }}>
//               Challenges
//             </Typography>
//           </Box>
//           <List>
//             {zone.challenges.map((challenge, index) => (
//               <ListItem
//                 key={index}
//                 sx={{
//                   bgcolor: "#2a2a2a",
//                   mb: 1,
//                   borderRadius: 2,
//                   "&:hover": { bgcolor: "#ff4081", transition: "0.3s" },
//                 }}
//               >
//                 <ListItemText
//                   primary={
//                     <Typography sx={{ fontWeight: "bold", color: "white" }}>
//                       {challenge.name} ({challenge.type})
//                     </Typography>
//                   }
//                   secondary={
//                     <Typography sx={{ color: "white" }}>
//                       {challenge.description} — Reward: {challenge.reward}
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Paper>
//       )}

//       {/* Game Flow Section */}
//       {zone.gameFlow && (
//         <Paper
//           elevation={3}
//           sx={{
//             p: 3,
//             mb: 3,
//             borderRadius: 3,
//             bgcolor: "#1c1c1c",
//             borderLeft: "6px solid #ff6a00",
//           }}
//         >
//           <Typography
//             variant="h6"
//             sx={{
//               color: "white",
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <FaInfoCircle /> Game Flow
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ whiteSpace: "pre-line", color: "white" }}
//           >
//             {zone.gameFlow}
//           </Typography>
//         </Paper>
//       )}

//       {/* Rules Section */}
//       {zone.rules &&
//         Object.entries(zone.rules).map(([key, value], i) => (
//           <Paper
//             key={i}
//             elevation={3}
//             sx={{
//               p: 3,
//               mb: 3,
//               borderRadius: 3,
//               bgcolor: "#1c1c1c",
//               borderLeft: `6px solid ${
//                 i % 2 === 0 ? "#00e5ff" : "#ff4081"
//               }`,
//             }}
//           >
//             <Typography
//               variant="h6"
//               gutterBottom
//               sx={{
//                 textTransform: "capitalize",
//                 mb: 1,
//                 color: "white",
//               }}
//             >
//               {key}
//             </Typography>
//             {Array.isArray(value) ? (
//               <List>
//                 {value
//                   .filter(
//                     (item) =>
//                       typeof item === "string" ||
//                       item.task ||
//                       item.bonus ||
//                       item.points ||
//                       item.penalty
//                   )
//                   .map((item, idx) =>
//                     typeof item === "string" ? (
//                       <ListItem
//                         key={idx}
//                         sx={{
//                           bgcolor: "#2a2a2a",
//                           mb: 1,
//                           borderRadius: 1,
//                           "&:hover": { bgcolor: "#00ff99", color: "black" },
//                         }}
//                       >
//                         <ListItemText
//                           primary={
//                             <Typography sx={{ color: "white" }}>
//                               {item}
//                             </Typography>
//                           }
//                         />
//                       </ListItem>
//                     ) : (
//                       <ListItem
//                         key={idx}
//                         sx={{
//                           bgcolor: "#2a2a2a",
//                           mb: 1,
//                           borderRadius: 1,
//                           "&:hover": { bgcolor: "#ffde00", color: "black" },
//                         }}
//                       >
//                         <ListItemText
//                           primary={
//                             <Typography sx={{ color: "white" }}>
//                               {`${item.task || item.bonus || ""}${
//                                 item.points
//                                   ? ` — Points: ${item.points}`
//                                   : ""
//                               }${
//                                 item.penalty
//                                   ? ` | Penalty: ${item.penalty}`
//                                   : ""
//                               }`}
//                             </Typography>
//                           }
//                         />
//                       </ListItem>
//                     )
//                   )}
//               </List>
//             ) : (
//               <Typography variant="body1" sx={{ color: "white" }}>
//                 {value}
//               </Typography>
//             )}
//           </Paper>
//         ))}
//         {/* 🌟 Buttons at the End of the Page */}
// <Box
//   sx={{
//     textAlign: "center",
//     mt: 6,
//     mb: 4,
//     display: "flex",
//     justifyContent: "center",
//     gap: 3,
//     flexWrap: "wrap",
//     animation: "fadeInUp 1.5s ease-in-out",
//     "@keyframes fadeInUp": {
//       "0%": { opacity: 0, transform: "translateY(30px)" },
//       "100%": { opacity: 1, transform: "translateY(0)" },
//     },
//   }}
// >
//   {/* Register Now Button (Always visible) */}
//   <Button
//     variant="contained"
//     sx={{
//       backgroundImage: "linear-gradient(90deg, #00e5ff, #ff4081)",
//       color: "white",
//       fontWeight: "bold",
//       fontSize: "1.1rem",
//       px: 4,
//       py: 1.5,
//       boxShadow: "0 0 10px #00e5ff, 0 0 20px #ff4081",
//       borderRadius: 2,
//       "&:hover": {
//         bgcolor: "#ff4081",
//         boxShadow: "0 0 15px #ff4081, 0 0 25px #00e5ff",
//       },
//     }}
//     onClick={() => navigate("/register")}
//   >
//     Register Now
//   </Button>

//   {/* Purchase Button (Only for Dragon Vault & Nautica Quest) */}
//   {(zone.name === "DRAGON VAULT" || zone.name === "NAUTICA QUEST") && (
//     <Button
//       variant="contained"
//       sx={{
//         backgroundImage: "linear-gradient(90deg, #ff4081, #00e5ff)",
//         color: "white",
//         fontWeight: "bold",
//         fontSize: "1.1rem",
//         px: 4,
//         py: 1.5,
//         boxShadow: "0 0 10px #ff4081, 0 0 20px #00e5ff",
//         borderRadius: 2,
//         "&:hover": {
//           bgcolor: "#00e5ff",
//           boxShadow: "0 0 15px #00e5ff, 0 0 25px #ff4081",
//         },
//       }}
//       onClick={() => {
//         if (zone.name === "DRAGON VAULT") navigate("/dbv");
//         else if (zone.name === "NAUTICA QUEST") navigate("/nq");
//       }}
//     >
//       Purchase Your Robot
//     </Button>
//   )}
// </Box>


//     </Box>

    
//   );
// };

// export default ZoneDetails;





import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Chip,
  Paper,
} from "@mui/material";
import {
  FaTasks,
  FaChessKnight,
  FaFlag,
  FaInfoCircle,
  FaFileDownload,
} from "react-icons/fa";
import { assets } from "../assets/assets";

const ZoneDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { zone } = location.state || {};

  if (!zone) {
    return (
      <Box
        sx={{
          p: 4,
          textAlign: "center",
          bgcolor: "#0a0a0a",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h6" sx={{ color: "white" }}>
          No zone selected.
        </Typography>
        <Button
          onClick={() => navigate(-1)}
          sx={{
            mt: 2,
            color: "white",
            bgcolor: "#00e5ff",
            "&:hover": { bgcolor: "#ff4081" },
          }}
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#0a0a0a", color: "white", minHeight: "100vh", p: 4 }}>
      {/* Back Button */}
      <Button
        onClick={() => navigate(-1)}
        sx={{
          mb: 3,
          color: "#00e5ff",
          border: "1px solid #00e5ff",
          "&:hover": { bgcolor: "#00e5ff", color: "black" },
        }}
      >
        ← Back
      </Button>

      {/* Zone Banner Image */}
      <Box
        sx={{ position: "relative", mb: 4, borderRadius: 3, overflow: "hidden" }}
      >
        <img
          src={zone.detailImage}
          alt={zone.name}
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            p: 2,
            bgcolor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
            {zone.name}
          </Typography>
          <Chip
            label={zone.play}
            sx={{ bgcolor: "#ff4081", color: "white", fontWeight: "bold" }}
          />
        </Box>
      </Box>

      {/* 🚀 Robot Image Section */}
      {(zone.name === "DRAGON VAULT" || zone.name === "NAUTICA QUEST") && (
        <Box
          sx={{
            textAlign: "center",
            mb: 6,
            animation: "fadeIn 2s ease-in-out",
            "@keyframes fadeIn": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#00e5ff",
              fontWeight: "bold",
              mb: 2,
              textShadow: "0 0 10px #00e5ff, 0 0 20px #ff4081",
              letterSpacing: "1px",
            }}
          >
            ⚙️ Robot Preview
          </Typography>

          <Box
            sx={{
              display: "inline-block",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow:
                "0 0 25px rgba(0,229,255,0.6), 0 0 50px rgba(255,64,129,0.5)",
              p: 1,
              background: "linear-gradient(90deg, #00e5ff55, #ff408155)",
              animation: "pulseGlow 3s infinite alternate",
              "@keyframes pulseGlow": {
                "0%": {
                  boxShadow:
                    "0 0 20px rgba(0,229,255,0.5), 0 0 40px rgba(255,64,129,0.3)",
                },
                "100%": {
                  boxShadow:
                    "0 0 40px rgba(255,64,129,0.6), 0 0 80px rgba(0,229,255,0.4)",
                },
              },
            }}
          >
            <img
              src={
                zone.name === "DRAGON VAULT"
                  ? assets.DragonVaultBot
                  : assets.NauticaQuestBot
              }
              alt={`${zone.name} Robot`}
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "12px",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Box>
        </Box>
      )}

      {/* 🆕 Buttons Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {/* Register Now (Shown for all zones) */}
        <Button
          variant="contained"
          sx={{
            backgroundImage: "linear-gradient(90deg, #00e5ff, #ff4081)",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.1rem",
            px: 4,
            py: 1.5,
            boxShadow: "0 0 10px #00e5ff, 0 0 20px #ff4081",
            borderRadius: 2,
            "&:hover": {
              bgcolor: "#ff4081",
              boxShadow: "0 0 15px #ff4081, 0 0 25px #00e5ff",
            },
          }}
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/1MCW2VkkbIeub7JzScvNr2595juP_Smqinrv7VbQ3uzg/edit",
              "_blank"
            )
          }
        >
          Register Now
        </Button>

        {/* Purchase Button (Only for Dragon Vault & Nautica Quest) */}
        {(zone.name === "DRAGON VAULT" || zone.name === "NAUTICA QUEST") && (
          <Button
            variant="contained"
            sx={{
              backgroundImage: "linear-gradient(90deg, #ff4081, #00e5ff)",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.1rem",
              px: 4,
              py: 1.5,
              boxShadow: "0 0 10px #ff4081, 0 0 20px #00e5ff",
              borderRadius: 2,
              "&:hover": {
                bgcolor: "#00e5ff",
                boxShadow: "0 0 15px #00e5ff, 0 0 25px #ff4081",
              },
            }}
            onClick={() => {
              if (zone.name === "DRAGON VAULT")
                window.open(
                  "https://docs.google.com/forms/d/15LZ6cJSJ4oFrIJZBdJzjFUQG7d-QW3ZL9ojzrKwtw48/edit",
                  "_blank"
                );
              else if (zone.name === "NAUTICA QUEST")
                window.open(
                  "https://docs.google.com/forms/d/1WOGE64Tr-wrc4kuo9X-90VVQlJmJP8YYnBbus6zpg64/edit",
                  "_blank"
                );
            }}
          >
            Purchase Your Robot
          </Button>
        )}
      </Box>

             {/* Download Handbook Button */}
       {zone.handbook && (
         <Box sx={{ textAlign: "right", mb: 3 }}>
           <Button
             variant="contained"
             startIcon={<FaFileDownload />}
             sx={{
               bgcolor: "#00e5ff",
               color: "black",
               fontWeight: "bold",
               "&:hover": { bgcolor: "#ff4081", color: "white" },
             }}
             href={zone.handbook}
             download
           >
             Download Handbook
           </Button>
         </Box>
       )}
       {/* Backstory Section */}
       <Paper
         elevation={3}
         sx={{
           p: 3,
           mb: 3,
           borderRadius: 3,
           bgcolor: "#1c1c1c",
           borderLeft: "6px solid #00e5ff",
           display: "flex",
           alignItems: "center",
           gap: 1,
         }}
       >
         <FaInfoCircle color="#00e5ff" size={24} />
         <Box>
           <Typography variant="h6" sx={{ color: "white" }}>
             Backstory
           </Typography>
           <Typography variant="body1" sx={{ color: "white" }}>
             {zone.backstory}
           </Typography>
         </Box>
       </Paper>

       {/* Objective Section */}
       <Paper
         elevation={3}
         sx={{
           p: 3,
           mb: 3,
           borderRadius: 3,
           bgcolor: "#1c1c1c",
           borderLeft: "6px solid #ff4081",
          display: "flex",
           alignItems: "center",
           gap: 1,
         }}
       >
         <FaFlag color="#ff4081" size={24} />
         <Box>
           <Typography variant="h6" sx={{ color: "white" }}>
             Objective
           </Typography>
           <Typography variant="body1" sx={{ color: "white" }}>
             {zone.objective}
           </Typography>
         </Box>
       </Paper>

       {/* Arena Overview */}
       {zone.arenaOverview && (
         <Paper
           elevation={3}
           sx={{
             p: 3,
             mb: 3,
             borderRadius: 3,
             bgcolor: "#1c1c1c",
             borderLeft: "6px solid #00ff99",
             display: "flex",
             alignItems: "center",
             gap: 1,
           }}
         >
           <FaChessKnight color="#00ff99" size={24} />
           <Box>
             <Typography variant="h6" sx={{ color: "white" }}>
               Arena Overview
             </Typography>
             <Typography variant="body1" sx={{ color: "white" }}>
               {zone.arenaOverview}
             </Typography>
           </Box>
         </Paper>
       )}

       {/* Challenges Section */}
       {zone.challenges && (
         <Paper
           elevation={3}
           sx={{
             p: 3,
             mb: 3,
             borderRadius: 3,
             bgcolor: "#1c1c1c",
             borderLeft: "6px solid #ffde00",
           }}
         >
           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
             <FaTasks color="#ffde00" size={24} />
             <Typography variant="h6" sx={{ color: "white" }}>
               Challenges
             </Typography>
           </Box>
           <List>
             {zone.challenges.map((challenge, index) => (
               <ListItem
                 key={index}
                 sx={{
                   bgcolor: "#2a2a2a",
                   mb: 1,
                   borderRadius: 2,
                   "&:hover": { bgcolor: "#ff4081", transition: "0.3s" },
                 }}
               >
                 <ListItemText
                   primary={
                     <Typography sx={{ fontWeight: "bold", color: "white" }}>
                       {challenge.name} ({challenge.type})
                     </Typography>
                   }
                   secondary={
                     <Typography sx={{ color: "white" }}>
                       {challenge.description} — Reward: {challenge.reward}
                     </Typography>
                   }
                 />
               </ListItem>
             ))}
           </List>
         </Paper>
       )}
       {/* Game Flow Section */}
       {zone.gameFlow && (
         <Paper
           elevation={3}
           sx={{
             p: 3,
             mb: 3,
             borderRadius: 3,
             bgcolor: "#1c1c1c",
             borderLeft: "6px solid #ff6a00",
          }}
         >
           <Typography
             variant="h6"
             sx={{
               color: "white",
               display: "flex",
               alignItems: "center",
               gap: 1,
             }}
           >
             <FaInfoCircle /> Game Flow
           </Typography>
           <Typography
             variant="body1"
             sx={{ whiteSpace: "pre-line", color: "white" }}
           >
             {zone.gameFlow}
           </Typography>
         </Paper>
       )}
       {/* Rules Section */}
       {zone.rules &&
         Object.entries(zone.rules).map(([key, value], i) => (
           <Paper
             key={i}
             elevation={3}
             sx={{
               p: 3,
               mb: 3,
               borderRadius: 3,
               bgcolor: "#1c1c1c",
               borderLeft: `6px solid ${
                 i % 2 === 0 ? "#00e5ff" : "#ff4081"
               }`,
             }}
           >
             <Typography
               variant="h6"
               gutterBottom
               sx={{
                 textTransform: "capitalize",
                 mb: 1,
                 color: "white",
               }}
             >
               {key}
             </Typography>
             {Array.isArray(value) ? (
               <List>
                 {value
                   .filter(
                     (item) =>
                       typeof item === "string" ||
                       item.task ||
                       item.bonus ||
                       item.points ||
                       item.penalty
                   )
                   .map((item, idx) =>
                    typeof item === "string" ? (
                       <ListItem
                         key={idx}
                         sx={{
                           bgcolor: "#2a2a2a",
                           mb: 1,
                           borderRadius: 1,
                           "&:hover": { bgcolor: "#00ff99", color: "black" },
                         }}
                       >
                         <ListItemText
                           primary={
                             <Typography sx={{ color: "white" }}>
                               {item}
                             </Typography>
                           }
                         />
                       </ListItem>
                     ) : (
                       <ListItem
                         key={idx}
                         sx={{
                           bgcolor: "#2a2a2a",
                           mb: 1,
                           borderRadius: 1,
                           "&:hover": { bgcolor: "#ffde00", color: "black" },
                         }}
                       >
                         <ListItemText
                           primary={
                             <Typography sx={{ color: "white" }}>
                               {`${item.task || item.bonus || ""}${
                                 item.points
                                   ? ` — Points: ${item.points}`
                                   : ""
                               }${
                                 item.penalty
                                   ? ` | Penalty: ${item.penalty}`
                                   : ""
                               }`}
                             </Typography>
                           }
                         />
                      </ListItem>
                     )
                   )}
               </List>
             ) : (
               <Typography variant="body1" sx={{ color: "white" }}>
                 {value}
               </Typography>
             )}
           </Paper>
         ))}
         {/* 🌟 Buttons at the End of the Page */}
<Box
  sx={{
    textAlign: "center",
    mt: 6,
    mb: 4,
    display: "flex",
    justifyContent: "center",
    gap: 3,
    flexWrap: "wrap",
    animation: "fadeInUp 1.5s ease-in-out",
    "@keyframes fadeInUp": {
      "0%": { opacity: 0, transform: "translateY(30px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  }}
>
  {/* Register Now Button (Same as top one) */}
  <Button
    variant="contained"
    sx={{
      backgroundImage: "linear-gradient(90deg, #00e5ff, #ff4081)",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.1rem",
      px: 4,
      py: 1.5,
      boxShadow: "0 0 10px #00e5ff, 0 0 20px #ff4081",
      borderRadius: 2,
      "&:hover": {
        bgcolor: "#ff4081",
        boxShadow: "0 0 15px #ff4081, 0 0 25px #00e5ff",
      },
    }}
    onClick={() =>
      window.open(
        "https://docs.google.com/forms/d/1MCW2VkkbIeub7JzScvNr2595juP_Smqinrv7VbQ3uzg/edit",
        "_blank"
      )
    }
  >
    Register Now
  </Button>

  {/* Purchase Button (Same as top one) */}
  {(zone.name === "DRAGON VAULT" || zone.name === "NAUTICA QUEST") && (
    <Button
      variant="contained"
      sx={{
        backgroundImage: "linear-gradient(90deg, #ff4081, #00e5ff)",
        color: "white",
        fontWeight: "bold",
        fontSize: "1.1rem",
        px: 4,
        py: 1.5,
        boxShadow: "0 0 10px #ff4081, 0 0 20px #00e5ff",
        borderRadius: 2,
        "&:hover": {
          bgcolor: "#00e5ff",
          boxShadow: "0 0 15px #00e5ff, 0 0 25px #ff4081",
        },
      }}
      onClick={() => {
        if (zone.name === "DRAGON VAULT")
          window.open(
            "https://docs.google.com/forms/d/15LZ6cJSJ4oFrIJZBdJzjFUQG7d-QW3ZL9ojzrKwtw48/edit",
            "_blank"
          );
        else if (zone.name === "NAUTICA QUEST")
          window.open(
            "https://docs.google.com/forms/d/1WOGE64Tr-wrc4kuo9X-90VVQlJmJP8YYnBbus6zpg64/edit",
            "_blank"
          );
      }}
    >
      Purchase Your Robot
    </Button>
  )}
</Box>
    </Box>
  );
};

export default ZoneDetails;
