"use client"

import { Bar, BarChart } from "recharts";
import Header from "../_components/header";
import LateralBar from "../_components/lateralbar";
import { Card, CardContent, CardHeader, CardTitle } from "../_components/ui/card";
import { ChartConfig, ChartContainer } from "../_components/ui/chart";

const Dashboard = () => {
    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 199 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
      ]

    const chartConfig = {
        desktop: {
          label: "Desktop",
          color: "#2563eb",
        },
        mobile: {
          label: "Mobile",
          color: "#60a5fa",
        },
      } satisfies ChartConfig
    return (
        <div>
            <Header/>
            <LateralBar/>
            <div className="ml-[20%] py-5">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <Card className="w-[350px] mt-3">
                    <CardHeader>
                        <CardTitle className="text-base font-bold">Gráfico</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                            <BarChart accessibilityLayer data={chartData}>
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
 
export default Dashboard;