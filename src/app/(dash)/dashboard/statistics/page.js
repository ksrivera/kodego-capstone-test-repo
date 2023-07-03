"use client"
import HeaderSection from "@/components/ui-components/HeaderSection";
import Section from "@/components/ui-components/Section";
import Card from "@/components/ui-components/Card";
import DoughnutChartExample from "@/components/DoughnutChartExample";
import BarChartExample from "@/components/BarChartExample";


const Statistics = () => {
  const cardContainer = {
    width: "400px",
    height: "300px",
    marginRight: "10px",
  };
  return (
    <>
      <HeaderSection
        heading={"Statistics Report"}
        subHeading={"Visualize your data"}
      />
      
      <Section>
        <Card
          heading="Bar Chart Example"
          subHeading="An Introduction to bar chart support on aio"
        >
          <BarChartExample />
        </Card>

        <Card
          heading="Doughnut Chart Example"
          subHeading="An Introduction to doughnut chart exmaple"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DoughnutChartExample />
          </div>
        </Card>
      </Section>
    </>
  );
};

export default Statistics;
