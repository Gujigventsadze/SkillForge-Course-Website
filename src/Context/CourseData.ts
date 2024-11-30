export interface DataType {
    id: number;
    title: string;
    duration: number;
    price: number;
    img: string;
    description: string;
    popular: boolean;
}

export const Data = [
    {
        id: 1,
        title: "React Development",
        duration: 6,
        price: 299,
        img: "../../src/assets/Course Images/React.png",
        description: "Comprehensive React Guide with a lot of technologies and libraries in order to build optimized and functioning Web Applications",
        popular: true
    },
    {
        id: 2,
        title: "NodeJS",
        duration: 4,
        price: 199,
        img: "../../src/assets/Course Images/NodeJS-768x768.png",
        description: "NodeJS, JS Runtime for building server side applications, APIs and etc. Versatile language which inherits from JS characteristics.",
        popular: true
    },
    {
        id: 3,
        title: ".NET Core",
        duration: 6,
        price: 399,
        img: "../../src/assets/Course Images/image1_6cbdeb8806.png",
        description: ".NET core is used to build enterprise level applications. One of the most demanded course in today`s market.",
        popular: true
    }   
]