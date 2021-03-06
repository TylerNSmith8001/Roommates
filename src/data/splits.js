let splits = [
    {
        id: 1,
        name: "Rent",
        startDate: "2020-01-01",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 1050,
                roommates:[
                    {
                        roommateId: 1,
                        split: 350
                    },
                    {
                        roommateId: 3,
                        split: 400
                    },
                    {
                        roommateId: 5,
                        split: 250
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Water",
        startDate: "2019-01-01",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 87,
                roommates:[
                    {
                        roommateId: 1,
                        split: 47
                    },
                    {
                        roommateId: 3,
                        split: 20
                    },
                    {
                        roommateId: 5,
                        split: 20
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Electricity",
        startDate: "2019-12-15",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 316,
                roommates:[
                    {
                        roommateId: 1,
                        split: 166
                    },
                    {
                        roommateId: 3,
                        split: 75
                    },
                    {
                        roommateId: 5,
                        split: 75
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Internet",
        startDate: "2019-12-15",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 150,
                roommates:[
                    {
                        roommateId: 1,
                        split: 50
                    },
                    {
                        roommateId: 3,
                        split: 50
                    },
                    {
                        roommateId: 5,
                        split: 50
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Mortgage",
        startDate: "2019-12-15",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 2200,
                roommates:[
                    {
                        roommateId: 6,
                        split: 1100
                    },
                    {
                        roommateId: 7,
                        split: 1100
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "Car Payment",
        startDate: "2019-03-07",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 370,
                roommates:[
                    {
                        roommateId: 6,
                        split: 370
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        name: "Phone Bill",
        startDate: "2019-01-01",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 279,
                roommates:[
                    {
                        roommateId: 6,
                        split: 93
                    },
                    {
                        roommateId: 7,
                        split: 93
                    },
                    {
                        roommateId: 9,
                        split: 93
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        name: "Water",
        startDate: "2019-01-01",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 87,
                roommates:[
                    {
                        roommateId: 6,
                        split: 47
                    },
                    {
                        roommateId: 8,
                        split: 20
                    },
                    {
                        roommateId: 9,
                        split: 20
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        name: "Electricity",
        startDate: "2019-12-15",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 316,
                roommates:[
                    {
                        roommateId: 6,
                        split: 166
                    },
                    {
                        roommateId: 8,
                        split: 75
                    },
                    {
                        roommateId: 9,
                        split: 75
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        name: "Internet",
        startDate: "2019-12-15",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 150,
                roommates:[
                    {
                        roommateId: 6,
                        split: 50
                    },
                    {
                        roommateId: 8,
                        split: 50
                    },
                    {
                        roommateId: 9,
                        split: 50
                    }
                ]
            }
        ]
    },
    {
        id: 11,
        name: "Shawarma",
        startDate: "2008-05-02",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 25,
                roommates:[
                    {
                        roommateId: 10,
                        split: 5
                    },
                    {
                        roommateId: 11,
                        split: 5
                    },
                    {
                        roommateId: 12,
                        split: 5
                    },
                    {
                        roommateId: 14,
                        split: 5
                    },
                    {
                        roommateId: 15,
                        split: 5
                    }
                ]
            }
        ]
    },
    {
        id: 12,
        name: "Comcast",
        startDate: "2008-05-02",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 173,
                roommates:[
                    {
                        roommateId: 13,
                        split: 0
                    }
                ]
            }
        ]
    },
    {
        id: 13,
        name: "Insurance",
        startDate: "2008-05-02",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 10030000,
                roommates:[
                    {
                        roommateId: 10,
                        split: 10000
                    },
                    {
                        roommateId: 11,
                        split: 10000
                    },
                    {
                        roommateId: 13,
                        split: 10000000
                    },
                    {
                        roommateId: 15,
                        split: 10000
                    }
                ]
            }
        ]
    },
    {
        id: 14,
        name: "Water",
        startDate: "2008-05-02",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 263,
                roommates:[
                    {
                        roommateId: 10,
                        split: 187
                    },
                    {
                        roommateId: 11,
                        split: 23
                    },
                    {
                        roommateId: 12,
                        split: 17
                    },
                    {
                        roommateId: 15,
                        split: 36
                    }
                ]
            }
        ]
    },
    {
        id: 15,
        name: "Rent",
        startDate: "2008-05-02",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 10000000,
                roommates:[
                    {
                        roommateId: 10,
                        split: 10000000
                    }
                ]
            }
        ]
    }
];

export default splits;