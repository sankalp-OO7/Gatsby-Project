import React from "react";
import { graphql } from "gatsby";
import IndustriesList from "../components/IndustriesList";
import { Box, Heading } from "@chakra-ui/react";

const IndustriesPage = ({ data }) => {
  const industries = data.allDataJson.nodes[0].industries; // Access the industries array correctly

  return (
    <Box p={8}>
      <Heading as="h1" mb={4}>
        Industries We Serve
      </Heading>
      <IndustriesList industries={industries} />
    </Box>
  );
};

export const query = graphql`
  {
    allDataJson {
      nodes {
        industries {
          name
          image
          points {
            Mega_scale
            Specialized_Machinery
            Project_Management
            Budget_Constraints
            Safety_Regulators
            Connectivity
            Workforce_Management
            Predictive_Maintenance
            Security
            Management___Repair
            Security_and_Loss_Prevention
            Regulatory_Compliance
            Specialized_Spaces
            Coordination_with_Stakeholders
            Scalability
            Space_Utilization
            Flexibility___Scalability
            Safety_Regulations
            Complexity
            Scalability___Flexibility
          }
        }
      }
    }
  }
`;

export default IndustriesPage;


// // src/pages/industries.js

// import React from "react";
// import { graphql } from "gatsby";
// import IndustriesList from "../components/IndustriesList";
// import { Box, Heading } from "@chakra-ui/react";

// const IndustriesPage = ({ data }) => {
//   const industries = data.allIndustriesJson.nodes;

//   return (
//     <Box p={8}>
//       <Heading as="h1" mb={4}>
//         Industries We Serve
//       </Heading>
//       <IndustriesList industries={industries} />
//     </Box>
//   );
// };

// export const query = graphql`
//   {
//     allDataJson {
//       nodes {
//         industries {
//           name
//           image
//           points{
//            Mega_scale
//           Specialized_Machinery
//           Project_Management
//           Budget_Constraints
//           Safety_Regulators
//           Connectivity
//           Workforce_Management
//           Predictive_Maintenance
//           Security
//           Management___Repair
//           Security_and_Loss_Prevention
//           Regulatory_Compliance
//           Specialized_Spaces
//           Coordination_with_Stakeholders
//           Scalability
//           Space_Utilization
//           Flexibility___Scalability
//           Safety_Regulations
//           Complexity
//           Scalability___Flexibility
//           }
//         }
//       }
//     }
//   }
// `;

// export default IndustriesPage;
