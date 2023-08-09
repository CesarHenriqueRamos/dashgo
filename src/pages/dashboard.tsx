import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import('react-apexcharts'),{ssr:false});

const options = {
    chart:{
        toolbar:{
            show:false
        },
        zoon:{
            enabled:false
        },
        foreColor: theme.colors.gray[500]
    },
    grid:{
        show:false
    },
    dataLabels:{
        enabled:false
    },
    //depois configurar o tooltip
    tooltip:{
        enabled:false
    },
    xaxis:{
        type:'datetime' as const,
        xaxisBorder:{
            color: theme.colors.gray[600]
        },
        xaxisTicks:{
            color: theme.colors.gray[600]
        },
        categories:[
            '2021-03-21T00:00:00.000Z',
            '2021-03-22T00:00:00.000Z',
            '2021-03-24T00:00:00.000Z',
        ]
    },
    fill:{
        opacity: 0.3,
        type:'gradient',
        gradient:{
            shade:'dark',
            opacityFrom: 0.7,
            opacityTo:0.3
        }
    }
}

const series = [
    {name:'data1', data:[31,120,10]}
]

export default function Dashboard(){
    return(
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />  
                <SimpleGrid flex='1' gap="4" minChildWidth="320px" alignItems="flex-start" >
                    <Box p={["6","8"]} bg="gray.800" borderRadius={8} pb="4">
                        <Text fontSize="large" mb="4">Inscritos da Semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                    <Box p={["6","8"]} bg="gray.800" borderRadius={8} pb="4">
                        <Text fontSize="large" mb="4">Taxa de Abertura</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                </SimpleGrid> 
            </Flex>            
        </Flex>
    )
}