    // Your JSON data
        const censusData = [
    {
        "filename": "TS001",
        "description": "Number of usual residents in households and communal establishments",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts001.zip",
        "files": [
            "census2021-ts001-oa.csv",
            "census2021-ts001-lsoa.csv",
            "census2021-ts001-msoa.csv",
            "census2021-ts001-ltla.csv",
            "census2021-ts001-utla.csv",
            "census2021-ts001-rgn.csv",
            "census2021-ts001-ctry.csv",
            "metadata/ts001-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Residence type: Total; measures: Value",
                "type": "int64"
            },
            {
                "name": "Residence type: Lives in a household; measures: Value",
                "type": "int64"
            },
            {
                "name": "Residence type: Lives in a communal establishment; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS002",
        "description": "Legal partnership status",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts002.zip",
        "files": [
            "census2021-ts002-ctry.csv",
            "census2021-ts002-lsoa..csv",
            "census2021-ts002-ltla.csv",
            "census2021-ts002-msoa..csv",
            "census2021-ts002-oa.csv",
            "census2021-ts002-rgn.csv",
            "census2021-ts002-utla.csv",
            "metadata/ts002-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Marital and civil partnership status: Total; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Never married and never registered a civil partnership; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Married or in a registered civil partnership; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Married or in a registered civil partnership: Married; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Married or in a registered civil partnership: Married: Opposite sex; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Married or in a registered civil partnership: Married: Same sex; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Married or in a registered civil partnership: In a registered civil partnership; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Married or in a registered civil partnership: In a registered civil partnership: Opposite sex; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Married or in a registered civil partnership: In a registered civil partnership: Same sex; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Separated, but still legally married or still legally in a civil partnership; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Separated, but still legally married or still legally in a civil partnership: Separated, but still married; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Separated, but still legally married or still legally in a civil partnership: Separated, but still in a registered civil partnership; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Divorced or civil partnership dissolved; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Divorced or civil partnership dissolved: Divorced; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Divorced or civil partnership dissolved: Formerly in a civil partnership now legally dissolved; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Widowed or surviving civil partnership partner; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Widowed or surviving civil partnership partner: Widowed; measures: Value",
                "type": "int64"
            },
            {
                "name": "Marital and civil partnership status: Widowed or surviving civil partnership partner: Surviving partner from civil partnership; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS003",
        "description": "Household composition",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts003.zip",
        "files": [
            "census2021-ts003-ctry.csv",
            "census2021-ts003-lsoa.csv",
            "census2021-ts003-ltla.csv",
            "census2021-ts003-msoa.csv",
            "census2021-ts003-oa.csv",
            "census2021-ts003-rgn.csv",
            "census2021-ts003-utla.csv",
            "metadata/ts003-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Household composition: Total; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: One person household; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: One person household: Aged 66 years and over; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: One person household: Other; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household: All aged 66 years and over; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household: Married or civil partnership couple; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household: Married or civil partnership couple: No children; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household: Married or civil partnership couple: Dependent children; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household: Married or civil partnership couple: All children non-dependent; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household: Cohabiting couple family; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household: Cohabiting couple family: No children; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household: Cohabiting couple family: With dependent children; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household: Cohabiting couple family: All children non-dependent; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household: Lone parent family; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household: Lone parent family: With dependent children; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household: Lone parent family: All children non-dependent; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household: Other single family household; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Single family household: Other single family household: Other family composition; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Other household types; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Other household types: With dependent children; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household composition: Other household types: Other, including all full-time students and all aged 66 years and over; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS004",
        "description": "Country of birth",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts004.zip",
        "files": [
            "census2021-ts004-ctry.csv",
            "census2021-ts004-llta.csv",
            "census2021-ts004-lsoa.csv",
            "census2021-ts004-msoa.csv",
            "census2021-ts004-oa.csv",
            "census2021-ts004-rgn.csv",
            "census2021-ts004-ulta.csv",
            "metadata/ts004-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Country of birth: Total; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: United Kingdom; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: EU countries; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: EU countries: European Union EU14; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: EU countries: European Union EU8; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: EU countries: European Union EU2; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: EU countries: All other EU countries; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Non-EU countries; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Non-EU countries: All other non-EU countries; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: The Americas and the Caribbean; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Antarctica and Oceania (including Australasia) and Other; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: British Overseas ; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS004A",
        "description": "Country of Birth",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts004a.zip",
        "files": []
    },
    {
        "filename": "TS005",
        "description": "Passports held",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts005.zip",
        "files": [
            "census2021-ts005-ctry.csv",
            "census2021-ts005-lsoa.csv",
            "census2021-ts005-ltla.csv",
            "census2021-ts005-msoa.csv",
            "census2021-ts005-oa.csv",
            "census2021-ts005-rgn.csv",
            "census2021-ts005-utla.csv",
            "metadata/ts005-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Passports held: Total; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: United Kingdom; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Ireland; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: France; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Germany; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Italy; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Portugal; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Spain; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Lithuania; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Poland; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Romania; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Other EU countries; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: Rest of Europe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: Rest of Europe: Turkey; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: Rest of Europe: Other Europe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa: North Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa: Central and Western Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa: South and Eastern Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Middle East; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Eastern Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Southern Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: South-East Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Central Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: The Americas and the Caribbean; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: The Americas and the Caribbean: North America and the Caribbean; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: The Americas and the Caribbean: Central and South America; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Antarctica and Oceania, including Australasia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: British Overseas Territories; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: No passport held; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS006",
        "description": "Population density",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts006.zip",
        "files": [
            "census2021-ts006-ctry.csv",
            "census2021-ts006-lsoa.csv",
            "census2021-ts006-ltla.csv",
            "census2021-ts006-msoa.csv",
            "census2021-ts006-oa.csv",
            "census2021-ts006-rgn.csv",
            "census2021-ts006-ulta.csv",
            "metadata/ts006-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Population Density: Persons per square kilometre; measures: Value",
                "type": "float64"
            }
        ]
    },
    {
        "filename": "TS007",
        "description": "Age by single year",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts007.zip",
        "files": [
            "census2021-ts007-ctry.csv",
            "census2021-ts007-ltla.csv",
            "census2021-ts007-msoa.csv",
            "census2021-ts007-rgn.csv",
            "census2021-ts007-utla.csv",
            "metadata/ts007-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Age: Total; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 4 years and under; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged under 1 year; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 1 year; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 2 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 3 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 4 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 5 to 9 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 5 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 6 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 7 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 8 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 9 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 10 to 15 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 10 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 11 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 12 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 13 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 14 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 15 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 16 to 19 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 16 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 17 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 18 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 19 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 20 to 24 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 20 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 21 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 22 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 23 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 24 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 25 to 34 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 25 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 26 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 27 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 28 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 29 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 30 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 31 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 32 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 33 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 34 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 35 to 49 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 35 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 36 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 37 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 38 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 39 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 40 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 41 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 42 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 43 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 44 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 45 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 46 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 47 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 48 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 49 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 50 to 64 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 50 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 51 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 52 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 53 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 54 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 55 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 56 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 57 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 58 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 59 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 60 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 61 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 62 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 63 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 64 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 65 to 74 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 65 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 66 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 67 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 68 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 69 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 70 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 71 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 72 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 73 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 74 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 75 to 84 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 75 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 76 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 77 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 78 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 79 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 80 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 81 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 82 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 83 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 84 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 85 years and over; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 85 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 86 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 87 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 88 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 89 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 90 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 91 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 92 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 93 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 94 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 95 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 96 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 97 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 98 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 99 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age: Aged 100 years and over; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS007A",
        "description": "Age by five-year age bands",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts007a.zip",
        "files": [
            "census2021-ts007a-ctry.csv",
            "census2021-ts007a-lsoa.csv",
            "census2021-ts007a-ltla.csv",
            "census2021-ts007a-msoa.csv",
            "census2021-ts007a-oa.csv",
            "census2021-ts007a-rgn.csv",
            "census2021-ts007a-utla.csv"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Age: Total",
                "type": "int64"
            },
            {
                "name": "Age: Aged 4 years and under",
                "type": "int64"
            },
            {
                "name": "Age: Aged 5 to 9 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 10 to 14 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 15 to 19 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 20 to 24 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 25 to 29 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 30 to 34 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 35 to 39 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 40 to 44 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 45 to 49 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 50 to 54 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 55 to 59 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 60 to 64 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 65 to 69 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 70 to 74 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 75 to 79 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 80 to 84 years",
                "type": "int64"
            },
            {
                "name": "Age: Aged 85 years and over",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS007B",
        "description": "Age by broad age bands",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts007b.zip",
        "files": []
    },
    {
        "filename": "TS008",
        "description": "Sex",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts008.zip",
        "files": [
            "census2021-ts008-ctry.csv",
            "census2021-ts008-lsoa.csv",
            "census2021-ts008-ltla.csv",
            "census2021-ts008-msoa.csv",
            "census2021-ts008-oa.csv",
            "census2021-ts008-rgn.csv",
            "census2021-ts008-ulta.csv",
            "metadata/ts008-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Sex: All persons; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS009",
        "description": "Sex by single year of age",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts009.zip",
        "files": [
            "census2021-ts009-ctry.csv",
            "census2021-ts009-ltla.csv",
            "census2021-ts009-rgn.csv",
            "census2021-ts009-ulta.csv",
            "metadata/ts009-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Sex: All persons; Age: Total; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 4 years and under; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged under 1 year; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 1 year; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 2 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 3 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 4 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 5 to 9 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 5 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 6 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 7 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 8 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 9 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 10 to 15 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 10 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 11 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 12 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 13 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 14 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 15 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 16 to 19 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 16 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 17 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 18 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 19 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 20 to 24 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 20 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 21 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 22 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 23 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 24 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 25 to 34 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 25 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 26 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 27 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 28 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 29 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 30 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 31 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 32 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 33 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 34 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 35 to 49 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 35 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 36 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 37 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 38 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 39 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 40 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 41 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 42 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 43 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 44 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 45 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 46 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 47 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 48 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 49 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 50 to 64 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 50 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 51 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 52 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 53 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 54 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 55 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 56 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 57 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 58 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 59 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 60 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 61 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 62 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 63 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 64 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 65 to 74 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 65 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 66 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 67 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 68 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 69 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 70 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 71 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 72 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 73 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 74 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 75 to 84 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 75 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 76 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 77 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 78 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 79 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 80 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 81 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 82 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 83 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 84 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 85 years and over; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 85 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 86 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 87 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 88 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 89 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: All persons; Age: Aged 90 years and over; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Total; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 4 years and under; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged under 1 year; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 1 year; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 2 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 3 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 4 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 5 to 9 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 5 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 6 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 7 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 8 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 9 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 10 to 15 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 10 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 11 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 12 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 13 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 14 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 15 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 16 to 19 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 16 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 17 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 18 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 19 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 20 to 24 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 20 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 21 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 22 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 23 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 24 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 25 to 34 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 25 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 26 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 27 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 28 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 29 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 30 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 31 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 32 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 33 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 34 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 35 to 49 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 35 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 36 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 37 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 38 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 39 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 40 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 41 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 42 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 43 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 44 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 45 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 46 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 47 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 48 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 49 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 50 to 64 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 50 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 51 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 52 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 53 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 54 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 55 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 56 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 57 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 58 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 59 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 60 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 61 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 62 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 63 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 64 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 65 to 74 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 65 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 66 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 67 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 68 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 69 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 70 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 71 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 72 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 73 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 74 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 75 to 84 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 75 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 76 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 77 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 78 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 79 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 80 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 81 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 82 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 83 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 84 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 85 years and over; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 85 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 86 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 87 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 88 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 89 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; Age: Aged 90 years and over; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Total; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 4 years and under; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged under 1 year; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 1 year; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 2 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 3 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 4 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 5 to 9 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 5 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 6 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 7 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 8 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 9 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 10 to 15 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 10 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 11 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 12 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 13 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 14 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 15 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 16 to 19 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 16 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 17 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 18 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 19 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 20 to 24 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 20 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 21 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 22 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 23 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 24 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 25 to 34 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 25 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 26 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 27 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 28 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 29 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 30 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 31 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 32 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 33 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 34 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 35 to 49 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 35 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 36 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 37 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 38 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 39 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 40 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 41 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 42 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 43 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 44 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 45 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 46 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 47 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 48 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 49 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 50 to 64 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 50 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 51 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 52 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 53 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 54 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 55 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 56 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 57 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 58 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 59 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 60 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 61 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 62 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 63 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 64 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 65 to 74 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 65 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 66 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 67 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 68 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 69 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 70 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 71 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 72 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 73 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 74 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 75 to 84 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 75 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 76 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 77 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 78 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 79 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 80 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 81 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 82 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 83 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 84 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 85 years and over; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 85 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 86 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 87 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 88 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 89 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; Age: Aged 90 years and over; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS010",
        "description": "Living arrangements",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts010.zip",
        "files": [
            "census2021-ts010-ctry.csv",
            "census2021-ts010-lsoa.csv",
            "census2021-ts010-ltla.csv",
            "census2021-ts010-msoa.csv",
            "census2021-ts010-oa.csv",
            "census2021-ts010-rgn.csv",
            "census2021-ts010-ulta.csv",
            "metadata/ts010-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Living arrangements: Total; measures: Value",
                "type": "int64"
            },
            {
                "name": "Living arrangements: Living in a couple; measures: Value",
                "type": "int64"
            },
            {
                "name": "Living arrangements: Living in a couple: Married or in a civil partnership; measures: Value",
                "type": "int64"
            },
            {
                "name": "Living arrangements: Living in a couple: Married or in a civil partnership: Opposite-sex couple; measures: Value",
                "type": "int64"
            },
            {
                "name": "Living arrangements: Living in a couple: Married or in a civil partnership: Same-sex couple; measures: Value",
                "type": "int64"
            },
            {
                "name": "Living arrangements: Living in a couple: Separated, but still married or in a civil partnership; measures: Value",
                "type": "int64"
            },
            {
                "name": "Living arrangements: Living in a couple: Cohabiting; measures: Value",
                "type": "int64"
            },
            {
                "name": "Living arrangements: Living in a couple: Cohabiting: Opposite-sex couple; measures: Value",
                "type": "int64"
            },
            {
                "name": "Living arrangements: Living in a couple: Cohabiting: Same-sex couple; measures: Value",
                "type": "int64"
            },
            {
                "name": "Living arrangements: Not living in a couple; measures: Value",
                "type": "int64"
            },
            {
                "name": "Living arrangements: Not living in a couple: Single (never married and never registered a same-sex civil partnership); measures: Value",
                "type": "int64"
            },
            {
                "name": "Living arrangements: Not living in a couple: Married or in a registered civil partnership; measures: Value",
                "type": "int64"
            },
            {
                "name": "Living arrangements: Not living in a couple: Separated (including those who are married and those who are in civil partnerships); measures: Value",
                "type": "int64"
            },
            {
                "name": "Living arrangements: Not living in a couple: Divorced or formerly in a civil partnership which is now legally dissolved; measures: Value",
                "type": "int64"
            },
            {
                "name": "Living arrangements: Not living in a couple: Widowed or surviving partner from a civil partnership; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS011",
        "description": "Households by deprivation dimensions",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts011.zip",
        "files": [
            "census2021-ts011-ctry.csv",
            "census2021-ts011-lsoa.csv",
            "census2021-ts011-ltla.csv",
            "census2021-ts011-msoa.csv",
            "census2021-ts011-oa.csv",
            "census2021-ts011-rgn.csv",
            "census2021-ts011-utla.csv",
            "metadata/ts011-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Household deprivation: Total: All households; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household deprivation: Household is not deprived in any dimension; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household deprivation: Household is deprived in one dimension; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household deprivation: Household is deprived in two dimensions; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household deprivation: Household is deprived in three dimensions; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household deprivation: Household is deprived in four dimensions; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS012",
        "description": "Country of birth (detailed)",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts012.zip",
        "files": [
            "census2021-ts012-ctry.csv",
            "census2021-ts012-ltla.csv",
            "census2021-ts012-rgn.csv",
            "census2021-ts012-utla.csv",
            "metadata/ts012-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Country of birth: Total: All usual residents; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: United Kingdom; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: United Kingdom: England; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: United Kingdom: Northern Ireland; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: United Kingdom: Scotland; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: United Kingdom: Wales; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: United Kingdom: Great Britain not otherwise specified; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: United Kingdom: United Kingdom not otherwise specified; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Member countries in March 2001; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Member countries in March 2001: Ireland; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Member countries in March 2001: France; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Member countries in March 2001: Germany; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Member countries in March 2001: Italy; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Member countries in March 2001: Portugal (including Madeira and the Azores); measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Member countries in March 2001: Spain (including Canary Islands); measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Member countries in March 2001: Other member countries in March 2001; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Countries that joined the EU between April 2001 and March 2011; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Countries that joined the EU between April 2001 and March 2011: Lithuania; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Countries that joined the EU between April 2001 and March 2011: Poland; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Countries that joined the EU between April 2001 and March 2011: Romania; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Countries that joined the EU between April 2001 and March 2011: Other EU countries; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Countries that joined the EU between April 2011 and March 2021; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: EU countries: Countries that joined the EU between April 2011 and March 2021: Croatia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: Rest of Europe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: Rest of Europe: Turkey; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Europe: Other Europe: Rest of Europe: Other Europe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Africa: North Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Africa: Central and Western Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Africa: Central and Western Africa: Ghana; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Africa: Central and Western Africa: Nigeria; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Africa: Central and Western Africa: Other Central and Western Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Africa: South and Eastern Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Africa: South and Eastern Africa: Kenya; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Africa: South and Eastern Africa: Somalia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Africa: South and Eastern Africa: South Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Africa: South and Eastern Africa: Zimbabwe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Africa: South and Eastern Africa: Other South and Eastern Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Africa: Africa not otherwise specified; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Middle East; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Middle East: Iran; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Middle East: Iraq; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Middle East: Other Middle East; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Eastern Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Eastern Asia: China; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Eastern Asia: Hong Kong (Special Administrative Region of China); measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Eastern Asia: Other Eastern Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Southern Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Southern Asia: Afghanistan; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Southern Asia: India; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Southern Asia: Pakistan; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Southern Asia: Bangladesh; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Southern Asia: Sri Lanka; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Southern Asia: Other Southern Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: South-East Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: South-East Asia: Philippines; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: South-East Asia: Malaysia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: South-East Asia: Singapore; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: South-East Asia: Other South-East Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Middle East and Asia: Central Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: The Americas and the Caribbean; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: The Americas and the Caribbean: North America; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: The Americas and the Caribbean: North America: United States; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: The Americas and the Caribbean: North America: Canada; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: The Americas and the Caribbean: North America: Other North America; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: The Americas and the Caribbean: Central America; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: The Americas and the Caribbean: Central America: All Central American countries; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: The Americas and the Caribbean: South America; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: The Americas and the Caribbean: South America: All South American countries; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: The Americas and the Caribbean: The Caribbean; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: The Americas and the Caribbean: The Caribbean: Jamaica; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: The Americas and the Caribbean: The Caribbean: Other Caribbean; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Antarctica and Oceania; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Antarctica and Oceania: Australasia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Antarctica and Oceania: Australasia: Australia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Antarctica and Oceania: Australasia: New Zealand; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Antarctica and Oceania: Australasia: Other Australasia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Antarctica and Oceania: Other Oceania and Antarctica; measures: Value",
                "type": "int64"
            },
            {
                "name": "Country of birth: Other; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS013",
        "description": "Passports held (detailed)",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts013.zip",
        "files": [
            "census2021-ts013-utla.csv",
            "census2021-ts013-ctry.csv",
            "census2021-ts013-ltla.csv",
            "census2021-ts013-msoa.csv",
            "census2021-ts013-rgn.csv",
            "metadata/ts013-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Passports held: Total: All usual residents; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: United Kingdom; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Ireland; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: France; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Germany; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Italy; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Portugal; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Spain; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Lithuania; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Poland; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Romania; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: EU Member countries: Other EU countries; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: Rest of Europe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: Rest of Europe: Turkey; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Europe: Other Europe: Rest of Europe: Other Europe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa: North Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa: Central and Western Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa: Central and Western Africa: Ghana; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa: Central and Western Africa: Nigeria; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa: Central and Western Africa: Other Central and Western Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa: South and Eastern Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa: South and Eastern Africa: Kenya; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa: South and Eastern Africa: Somalia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa: South and Eastern Africa: South Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa: South and Eastern Africa: Zimbabwe; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Africa: South and Eastern Africa: Other South and Eastern Africa; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Middle East; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Middle East: Iran; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Middle East: Iraq; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Middle East: Other Middle East; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Eastern Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Eastern Asia: China; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Eastern Asia: Hong Kong (Special Administrative Region of China); measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Eastern Asia: Japan; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Eastern Asia: Other Eastern Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Southern Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Southern Asia: Afghanistan; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Southern Asia: Bangladesh; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Southern Asia: India; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Southern Asia: Pakistan; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Southern Asia: Sri Lanka; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Southern Asia: Other Southern Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: South-East Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: South-East Asia: Malaysia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: South-East Asia: Philippines; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: South-East Asia: Singapore; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: South-East Asia: Other South-East Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Middle East and Asia: Central Asia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: The Americas and the Caribbean; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: The Americas and the Caribbean: North America; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: The Americas and the Caribbean: North America: Canada; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: The Americas and the Caribbean: North America: United States; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: The Americas and the Caribbean: Central America; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: The Americas and the Caribbean: South America; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: The Americas and the Caribbean: The Caribbean; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: The Americas and the Caribbean: The Caribbean: Jamaica; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: The Americas and the Caribbean: The Caribbean: Other Caribbean; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Antarctica and Oceania; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Antarctica and Oceania: Australasia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Antarctica and Oceania: Australasia: Australia; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Antarctica and Oceania: Australasia: New Zealand; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: Antarctica and Oceania: Other Antarctica and Oceania; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: British Overseas Territories; measures: Value",
                "type": "int64"
            },
            {
                "name": "Passports held: No passport held; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS015",
        "description": "Year of arrival in UK",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts015.zip",
        "files": [
            "census2021-ts015-ctry.csv",
            "census2021-ts015-lsoa.csv",
            "census2021-ts015-ltla.csv",
            "census2021-ts015-msoa.csv",
            "census2021-ts015-oa.csv",
            "census2021-ts015-rgn.csv",
            "census2021-ts015-utla.csv",
            "metadata/ts015-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Year of arrival in the UK: Total: All usual residents; measures: Value",
                "type": "int64"
            },
            {
                "name": "Year of arrival in the UK: Born in the UK; measures: Value",
                "type": "int64"
            },
            {
                "name": "Year of arrival in the UK: Arrived before 1951; measures: Value",
                "type": "int64"
            },
            {
                "name": "Year of arrival in the UK: Arrived 1951 to 1960; measures: Value",
                "type": "int64"
            },
            {
                "name": "Year of arrival in the UK: Arrived 1961 to 1970; measures: Value",
                "type": "int64"
            },
            {
                "name": "Year of arrival in the UK: Arrived 1971 to 1980; measures: Value",
                "type": "int64"
            },
            {
                "name": "Year of arrival in the UK: Arrived 1981 to 1990; measures: Value",
                "type": "int64"
            },
            {
                "name": "Year of arrival in the UK: Arrived 1991 to 2000; measures: Value",
                "type": "int64"
            },
            {
                "name": "Year of arrival in the UK: Arrived 2001 to 2010; measures: Value",
                "type": "int64"
            },
            {
                "name": "Year of arrival in the UK: Arrived 2011 to 2013; measures: Value",
                "type": "int64"
            },
            {
                "name": "Year of arrival in the UK: Arrived 2014 to 2016; measures: Value",
                "type": "int64"
            },
            {
                "name": "Year of arrival in the UK: Arrived 2017 to 2019; measures: Value",
                "type": "int64"
            },
            {
                "name": "Year of arrival in the UK: Arrived 2020 to 2021; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS016",
        "description": "Length of residence",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts016.zip",
        "files": [
            "census2021-ts016-ctry.csv",
            "census2021-ts016-lsoa.csv",
            "census2021-ts016-ltla.csv",
            "census2021-ts016-msoa.csv",
            "census2021-ts016-oa.csv",
            "census2021-ts016-rgn.csv",
            "census2021-ts016-ulta.csv",
            "metadata/ts016-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Length of residence in the UK: Total: All usual residents; measures: Value",
                "type": "int64"
            },
            {
                "name": "Length of residence in the UK: Born in the UK; measures: Value",
                "type": "int64"
            },
            {
                "name": "Length of residence in the UK: 10 years or more; measures: Value",
                "type": "int64"
            },
            {
                "name": "Length of residence in the UK: 5 years or more, but less than 10 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Length of residence in the UK: 2 years or more, but less than 5 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Length of residence in the UK: Less than 2 years; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS017",
        "description": "Household size",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts017.zip",
        "files": [
            "census2021-ts017-ctry.csv",
            "census2021-ts017-lsoa.csv",
            "census2021-ts017-ltla.csv",
            "census2021-ts017-msoa.csv",
            "census2021-ts017-oa.csv",
            "census2021-ts017-rgn.csv",
            "census2021-ts017-ulta.csv",
            "metadata/ts017-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Household size: Total: All household spaces; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household size: 0 people in household; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household size: 1 person in household; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household size: 2 people in household; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household size: 3 people in household; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household size: 4 people in household; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household size: 5 people in household; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household size: 6 people in household; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household size: 7 people in household; measures: Value",
                "type": "int64"
            },
            {
                "name": "Household size: 8 or more people in household; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS018",
        "description": "Age of arrival in the UK",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts018.zip",
        "files": [
            "census2021-ts018-ctry.csv",
            "census2021-ts018-lsoa.csv",
            "census2021-ts018-ltla.csv",
            "census2021-ts018-msoa.csv",
            "census2021-ts018-oa.csv",
            "census2021-ts018-rgn.csv",
            "census2021-ts018-ulta.csv",
            "metadata/ts018-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Age of arrival in the UK: Total: All usual residents; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Born in the UK; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 0 to 4 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 5 to 7 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 8 to 9 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 10 to 14 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 15 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 16 to 17 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 18 to 19 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 20 to 24 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 25 to 29 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 30 to 44 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 45 to 59 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 60 to 64 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 65 to 74 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 75 to 84 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 85 to 89 years; measures: Value",
                "type": "int64"
            },
            {
                "name": "Age of arrival in the UK: Arrived in the UK: Aged 90 years and over; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS019",
        "description": "Migrant Indicator",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts019.zip",
        "files": [
            "census2021-ts019-ctry.csv",
            "census2021-ts019-lsoa.csv",
            "census2021-ts019-ltla.csv",
            "census2021-ts019-msoa.csv",
            "census2021-ts019-oa.csv",
            "census2021-ts019-rgn.csv",
            "census2021-ts019-utla.csv",
            "metadata/ts019-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Migrant indicator: Total: All usual residents; measures: Value",
                "type": "int64"
            },
            {
                "name": "Migrant indicator: Address one year ago is the same as the address of enumeration; measures: Value",
                "type": "int64"
            },
            {
                "name": "Migrant indicator: Address one year ago is student term-time or boarding school address in the UK; measures: Value",
                "type": "int64"
            },
            {
                "name": "Migrant indicator: Migrant from within the UK: Address one year ago was in the UK; measures: Value",
                "type": "int64"
            },
            {
                "name": "Migrant indicator: Migrant from outside the UK: Address one year ago was outside the UK; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS020",
        "description": "Number of non-UK short-term residents by sex",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts020.zip",
        "files": [
            "census2021-ts020-ctry.csv",
            "census2021-ts020-lsoa.csv",
            "census2021-ts020-ltla.csv",
            "census2021-ts020-msoa.csv",
            "census2021-ts020-oa.csv",
            "census2021-ts020-rgn.csv",
            "census2021-ts020-utla.csv",
            "metadata/ts020-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Sex: All persons; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Female; measures: Value",
                "type": "int64"
            },
            {
                "name": "Sex: Male; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS021",
        "description": "Ethnic group",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts021.zip",
        "files": [
            "census2021-ts021-ctry.csv",
            "census2021-ts021-lsoa.csv",
            "census2021-ts021-ltla.csv",
            "census2021-ts021-msoa.csv",
            "census2021-ts021-oa.csv",
            "census2021-ts021-rgn.csv",
            "census2021-ts021-utla.csv",
            "metadata/ts021-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Ethnic group: Total: All usual residents",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Asian, Asian British or Asian Welsh",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Asian, Asian British or Asian Welsh: Bangladeshi",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Asian, Asian British or Asian Welsh: Chinese",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Asian, Asian British or Asian Welsh: Indian",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Asian, Asian British or Asian Welsh: Pakistani",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Asian, Asian British or Asian Welsh: Other Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Black, Black British, Black Welsh, Caribbean or African",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Black, Black British, Black Welsh, Caribbean or African: African",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Black, Black British, Black Welsh, Caribbean or African: Caribbean",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Black, Black British, Black Welsh, Caribbean or African: Other Black",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Mixed or Multiple ethnic groups",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Mixed or Multiple ethnic groups: White and Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Mixed or Multiple ethnic groups: White and Black African",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Mixed or Multiple ethnic groups: White and Black Caribbean",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Mixed or Multiple ethnic groups: Other Mixed or Multiple ethnic groups",
                "type": "int64"
            },
            {
                "name": "Ethnic group: White",
                "type": "int64"
            },
            {
                "name": "Ethnic group: White: English, Welsh, Scottish, Northern Irish or British",
                "type": "int64"
            },
            {
                "name": "Ethnic group: White: Irish",
                "type": "int64"
            },
            {
                "name": "Ethnic group: White: Gypsy or Irish Traveller",
                "type": "int64"
            },
            {
                "name": "Ethnic group: White: Roma",
                "type": "int64"
            },
            {
                "name": "Ethnic group: White: Other White",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Other ethnic group",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Other ethnic group: Arab",
                "type": "int64"
            },
            {
                "name": "Ethnic group: Other ethnic group: Any other ethnic group",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS022",
        "description": "Ethnic group (detailed)",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts022.zip",
        "files": [
            "census2021-ts022-ctry.csv",
            "census2021-ts022-ltla.csv",
            "census2021-ts022-msoa.csv",
            "census2021-ts022-rgn.csv",
            "census2021-ts022-utla.csv",
            "metadata/ts022-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Ethnic group (detailed): Total: All usual residents",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Afghan",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: African unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: African Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Anglo Indian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Arab",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Asian British",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Bangladeshi, British Bangladeshi",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Black and Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Chinese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: English/Welsh/Scottish/Northern Irish/British",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Filipino",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Indian or British Indian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Indonesian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Iranian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Japanese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Kashmiri",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Korean",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Kurdish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Malaysian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Mauritian/Seychellois/Maldivian/Sao Tomean/St Helenian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Mixed South Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Myanmar or Burmese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Nepali (includes Gurkha) ",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Other Asian, Asian unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Other East Asian/ East Asian unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Other Middle East",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Other Mixed",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Pakistani or British Pakistani",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Punjabi",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Sikh",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Sinhalese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Sri Lankan",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Taiwanese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Tajikistani/Kazakhstani/Kyrgystani/Turkmenistani/Uzbekistani",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Tamil",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Thai",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Turkish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Vietnamese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Asian, Asian British or Asian Welsh: Any other ethnic group",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: African unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Angolan ",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Arab",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Black British",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Cameroonian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Cote D'Ivoire",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Democratic Republic of the Congo",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: English/Welsh/Scottish/Northern Irish/British",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Eritrean",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Ethiopian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Gambian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Ghanaian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Kenyan",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Malawian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Mauritian/Seychellois/Maldivian/Sao Tomean/St Helenian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Mixed Black",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Moroccan",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Nigerian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Other Black, Black unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Other Mixed",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Other North African",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Portuguese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Sierra Leone",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Somali",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Somalilander",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: South African",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Sudanese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Tanzanian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Ugandan",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Zambian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Zimbabwean",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh of African background: Any other ethnic group ",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: African unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: Black and European",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: Black British",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: Black/African American",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: Caribbean",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: English/Welsh/Scottish/Northern Irish/British",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: Ghanaian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: Mauritian/Seychellois/Maldivian/Sao Tomean/St Helenian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: Mixed Black",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: Nigerian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: Other Black, Black unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: Other Mixed",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: Polynesian/Micronesian/Melanesian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: Somali",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Black, Black British, Black Welsh or Caribbean background: Any other ethnic group",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: African unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: African Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: African/Arab",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Anglo Indian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Arab",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Asian (unspecified) and European",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Black and Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Black and European",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Black and White (unspecified)",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Black British",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Brazilian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Caribbean",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Caribbean Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Chinese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Chinese and other Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Chinese and White",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: English",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: English/Welsh/Scottish/Northern Irish/British",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: European and Black African",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: European and Black Caribbean",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: European and North African or Middle Eastern",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: European Mixed, European unspecified, other European",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Greek Cypriot",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Hispanic or Latin American",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Indian or British Indian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Iranian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Italian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Jewish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Mauritian/Seychellois/Maldivian/Sao Tomean/St Helenian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Mexican",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Mixed Black",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Mixed Irish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Mixed South Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Mixed White",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Moroccan",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Other Asian, Asian unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Other Middle East",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Other Mixed",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Other White, White unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Pakistani or British Pakistani",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Polynesian/Micronesian/Melanesian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Portuguese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: South African",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: South American",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: South Asian and European",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Spanish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Turkish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Turkish Cypriot",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: White African",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: White and Arab",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: White and Asian (unspecified)",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: White and Black African",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: White and Black Caribbean",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: White and East Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: White and North African or Middle Eastern",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: White and South Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: White Caribbean",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Mixed or Multiple ethnic groups: Any other ethnic group ",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: African unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Albanian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Algerian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Arab",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Argentinian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Armenian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Australian/New Zealander",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Austrian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Belarusian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Belgian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Bosnian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Brazilian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Bulgarian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Colombian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Cornish ",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Croatian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Cypriot (part not stated)",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Czech",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Danish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Dutch",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: English, Welsh, Scottish, Northern Irish or British",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Estonian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: European Mixed",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Finnish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: French",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Georgian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: German",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Greek",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Greek Cypriot",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Gypsy or Irish Traveller",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Hispanic or Latin American",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Hungarian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Iranian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Irish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Israeli",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Italian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Jewish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Kosovan",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Kurdish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Latvian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Lithuanian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Maltese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Mixed Irish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Mixed White",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Moldovan",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: North American",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: North Macedonian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Norwegian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Other Eastern European",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Other Middle East",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Other Mixed",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Other North African",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Other Traveller",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Other White, White unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Polish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Portuguese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Roma",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Romanian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Russian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Serbian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Slovakian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Slovenian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: South African",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: South American",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Spanish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Swedish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Swiss",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Turkish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Turkish Cypriot",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Ukrainian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: White African",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: White and North African or Middle Eastern",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: White Caribbean",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Zimbabwean",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): White: Any other ethnic group ",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Afghan",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: African unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: African Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Albanian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Algerian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Arab",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Armenian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Asian British",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Bangladeshi, British Bangladeshi",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Black and Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Brazilian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Bulgarian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Caribbean",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Caribbean Asian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Chinese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Colombian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Cornish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Cypriot (part not stated)",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Czech",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: East Asian/ East Asian unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: English",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: English/Welsh/Scottish/Northern Irish/British",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: European Mixed, European unspecified, other European",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Filipino",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Greek",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Greek Cypriot",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Gypsy/Romany",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Hispanic or Latin American",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Indian or British Indian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Iranian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Italian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Japanese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Jewish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Kashmiri",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Kurdish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Lithuanian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Mauritian/Seychellois/Maldivian/Sao Tomean/St Helenian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Mexican",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Moroccan",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Muslim",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Nepali (includes Gurkha)",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: North African",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Other Asian, Asian unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Other Eastern European",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Other Middle East",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Other Mixed",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Other White, White unspecified",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Pakistani or British Pakistani",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Polish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Polynesia/Micronesia/Melanesia",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Portuguese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Punjabi",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Roma",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Romanian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Sikh",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Slovakian",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Somali",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Somalilander",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: South American",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Spanish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Sri Lankan",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Tamil",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Thai",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Turkish",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Turkish Cypriot",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Vietnamese",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: White African",
                "type": "int64"
            },
            {
                "name": "Ethnic group (detailed): Other ethnic group: Any other ethnic group",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS023",
        "description": "Multiple ethnic group",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts023.zip",
        "files": [
            "census2021-ts023-ctry.csv",
            "census2021-ts023-lsoa.csv",
            "census2021-ts023-ltla.csv",
            "census2021-ts023-msoa.csv",
            "census2021-ts023-oa.csv",
            "census2021-ts023-rgn.csv",
            "census2021-ts023-utla.csv",
            "metadata/ts023-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Multiple ethnic groups in household: Total: All households",
                "type": "int64"
            },
            {
                "name": "Multiple ethnic groups in household: One-person household",
                "type": "int64"
            },
            {
                "name": "Multiple ethnic groups in household: All household members have the same ethnic group",
                "type": "int64"
            },
            {
                "name": "Multiple ethnic groups in household: Ethnic groups differ between generations but not within partnerships",
                "type": "int64"
            },
            {
                "name": "Multiple ethnic groups in household: Ethnic groups differ within partnerships",
                "type": "int64"
            },
            {
                "name": "Multiple ethnic groups in household: Any other combination of multiple ethnic identities",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS024",
        "description": "Main language (detailed)",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts024.zip",
        "files": [
            "census2021-ts024-ctry.csv",
            "census2021-ts024-ltla.csv",
            "census2021-ts024-rgn.csv",
            "census2021-ts024-utla.csv",
            "metadata/ts024-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Main language (detailed): Total: All usual residents aged 3 years and over",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): English (English or Welsh in Wales)",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Welsh or Cymraeg (in England only)",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other UK language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other UK language: Gaelic (Irish)",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other UK language: Gaelic (Scottish)",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other UK language: Manx Gaelic",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other UK language: Gaelic (Not otherwise specified)",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other UK language: Cornish",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other UK language: Scots",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other UK language: Ulster Scots",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other UK language: Romany English",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other UK language: Irish Traveller Cant",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): French",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Portuguese",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Spanish",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU)",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Italian",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): German",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Polish",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Slovak",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Czech",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Romanian",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Lithuanian",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Latvian",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Hungarian",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Bulgarian",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Greek",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Dutch",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Swedish",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Danish",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Finnish",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Estonian",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Slovenian",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Maltese",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU): Any other European language (EU)",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (non EU)",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (non EU): Albanian",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (non EU): Ukrainian",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (non EU): Any other Eastern European language (non EU)",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (non EU): Northern European language (non EU)",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU and non-EU)",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (EU and non-EU): Bosnian, Croatian, Serbian, and Montenegrin",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (non-national)",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (non-national): Any Romani language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other European language (non-national): Yiddish",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Russian",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Turkish",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Arabic",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): West or Central Asian language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): West or Central Asian language: Hebrew",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): West or Central Asian language: Kurdish",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): West or Central Asian language: Persian or Farsi",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): West or Central Asian language: Pashto",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): West or Central Asian language: Any other West or Central Asian language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): South Asian language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): South Asian language: Urdu",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): South Asian language: Hindi",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): South Asian language: Panjabi",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): South Asian language: Pakistani Pahari (with Mirpuri and Potwari)",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): South Asian language: Bengali (with Sylheti and Chatgaya)",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): South Asian language: Gujarati",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): South Asian language: Marathi",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): South Asian language: Telugu",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): South Asian language: Tamil",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): South Asian language: Malayalam",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): South Asian language: Sinhala",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): South Asian language: Nepalese",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): South Asian language: Any other South Asian language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): East Asian language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): East Asian language: Mandarin Chinese",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): East Asian language: Cantonese Chinese",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): East Asian language: All other Chinese",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): East Asian language: Japanese",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): East Asian language: Korean",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): East Asian language: Vietnamese",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): East Asian language: Thai",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): East Asian language: Malay",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): East Asian language: Tagalog or Filipino",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): East Asian language: Any other East Asian language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Oceanic or Australian language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): North or South American language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Caribbean Creole",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Caribbean Creole: English-based Caribbean Creole",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Caribbean Creole: Any other Caribbean Creole",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Amharic",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Tigrinya",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Somali",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Krio",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Akan",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Yoruba",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Igbo",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Swahili or Kiswahili",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Luganda",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Lingala",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Shona",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Afrikaans",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Any other Nigerian language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Any other West African language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): African language: Any other African language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Sign language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Sign language: British Sign Language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Sign language: Any other sign language",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Sign language: Any sign communication system",
                "type": "int64"
            },
            {
                "name": "Main language (detailed): Other language",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS025",
        "description": "Household language",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts025.zip",
        "files": [
            "census2021-ts025-ctry.csv",
            "census2021-ts025-lsoa.csv",
            "census2021-ts025-ltla.csv",
            "census2021-ts025-msoa.csv",
            "census2021-ts025-oa.csv",
            "census2021-ts025-rgn.csv",
            "census2021-ts025-utla.csv",
            "metadata/ts025-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Household language (English and Welsh): Total: All households",
                "type": "int64"
            },
            {
                "name": "Household language (English and Welsh): All adults in household have English in England, or English or Welsh in Wales as a main language",
                "type": "int64"
            },
            {
                "name": "Household language (English and Welsh): At least one but not all adults in household have English in England, or English or Welsh in Wales as a main language",
                "type": "int64"
            },
            {
                "name": "Household language (English and Welsh): No adults in household, but at least one person aged 3 to 15 years, has English in England or English or Welsh in Wales as a main language",
                "type": "int64"
            },
            {
                "name": "Household language (English and Welsh): No people in household have English in England, or English or Welsh in Wales as a main language",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS026",
        "description": "Multiple main languages in household",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts026.zip",
        "files": [
            "census2021-ts026-ctry.csv",
            "census2021-ts026-lsoa.csv",
            "census2021-ts026-ltla.csv",
            "census2021-ts026-msoa.csv",
            "census2021-ts026-oa.csv",
            "census2021-ts026-rgn.csv",
            "census2021-ts026-utla.csv",
            "metadata/ts026-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Multiple main languages in household: Total: All households",
                "type": "int64"
            },
            {
                "name": "Multiple main languages in household: One-person household",
                "type": "int64"
            },
            {
                "name": "Multiple main languages in household: All household members have the same main language",
                "type": "int64"
            },
            {
                "name": "Multiple main languages in household: Main language differs between generations, but not within partnerships",
                "type": "int64"
            },
            {
                "name": "Multiple main languages in household: Main language differs within partnerships",
                "type": "int64"
            },
            {
                "name": "Multiple main languages in household: Any other combination of multiple main languages",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS027",
        "description": "National identity - UK",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts027.zip",
        "files": [
            "census2021-ts027-ctry.csv",
            "census2021-ts027-lsoa.csv",
            "census2021-ts027-ltla.csv",
            "census2021-ts027-msoa.csv",
            "census2021-ts027-oa.csv",
            "census2021-ts027-rgn.csv",
            "census2021-ts027-utla.csv",
            "metadata/ts027-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "National identity: Total: All usual residents",
                "type": "int64"
            },
            {
                "name": "National identity: British only identity",
                "type": "int64"
            },
            {
                "name": "National identity: English only identity",
                "type": "int64"
            },
            {
                "name": "National identity: English and British only identity",
                "type": "int64"
            },
            {
                "name": "National identity: Welsh only identity",
                "type": "int64"
            },
            {
                "name": "National identity: Welsh and British only identity",
                "type": "int64"
            },
            {
                "name": "National identity: Any other combination of only UK identities",
                "type": "int64"
            },
            {
                "name": "National identity: Scottish only identity",
                "type": "int64"
            },
            {
                "name": "National identity: Scottish and British only identity",
                "type": "int64"
            },
            {
                "name": "National identity: Northern Irish only identity",
                "type": "int64"
            },
            {
                "name": "National identity: Northern Irish and British only identity",
                "type": "int64"
            },
            {
                "name": "National identity: Cornish only identity",
                "type": "int64"
            },
            {
                "name": "National identity: Cornish and British only identity",
                "type": "int64"
            },
            {
                "name": "National identity: Any other combination of only UK identities ",
                "type": "int64"
            },
            {
                "name": "National identity: Irish only identity",
                "type": "int64"
            },
            {
                "name": "National identity: Irish and at least one UK identity",
                "type": "int64"
            },
            {
                "name": "National identity: Other identity only",
                "type": "int64"
            },
            {
                "name": "National identity: Other identity and at least one UK identity",
                "type": "int64"
            },
            {
                "name": "National identity: Non-UK identity only",
                "type": "int64"
            },
            {
                "name": "National identity: UK identity and non-UK identity",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS028",
        "description": "National identity (detailed)",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts028.zip",
        "files": [
            "census2021-ts028-ctry.csv",
            "census2021-ts028-ltla.csv",
            "census2021-ts028-msoa.csv",
            "census2021-ts028-rgn.csv",
            "census2021-ts028-utla.csv",
            "metadata/ts028-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "National identity (detailed): Total: All usual residents",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): UK identity",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): UK identity: British only identity",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): UK identity: English only identity",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): UK identity: English and British only identity",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): UK identity:  Welsh only identity",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): UK identity: Welsh and British only identity",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): UK identity: Scottish only identity",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): UK identity:  Scottish and British only identity",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): UK identity: Northern Irish only identity",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): UK identity: Northern Irish and British only identity",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): UK identity: Cornish only identity",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): UK identity: Cornish and British only identity",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): UK identity: Any other combination of UK identities (UK only)",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): UK identity: Other identity and at least one UK identity ",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Guernsey Islander",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Jersey Islander",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Isle of Man (Manx)",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Channel Islander not otherwise specified",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Irish only identity",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Irish and at least one UK identity",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European: EU countries",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European: EU countries: French",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European: EU countries: German",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European: EU countries: Italian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European: EU countries: Portuguese",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European: EU countries: Spanish (including Canary Islander)",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European: EU countries: Other member countries in March 2001",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European: EU countries:  Lithuanian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European: EU countries:  Polish",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European: EU countries: Romanian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European: EU countries: Other member countries",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European: Non-EU countries",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European: Non-EU countries: Turkish",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: European: Non-EU countries: Other European",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: African",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: African: North African",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: African: Central and Western African",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: African: Central and Western African: Ghanaian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: African: Central and Western African: Nigerian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: African: Central and Western African: Other Central and Western African",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: African: South and Eastern African",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: African: South and Eastern African: Kenyan",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: African: South and Eastern African: Somali",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: African: South and Eastern African: South African",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: African: South and Eastern African: Zimbabwean",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: African: South and Eastern African: Other South and Eastern African",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Middle Eastern",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Middle Eastern: Kurdish",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Middle Eastern: Iranian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Middle Eastern: Iraqi",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Middle Eastern: Other Middle Eastern",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Eastern Asian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Eastern Asian: Chinese",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Eastern Asian: Hong Kong Chinese",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Eastern Asian: Japanese",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Eastern Asian: Other Eastern Asian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Southern Asian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Southern Asian: Afghan",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Southern Asian: Bangladeshi",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Southern Asian: Indian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Southern Asian: Pakistani",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Southern Asian: Sri Lankan",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Southern Asian: Other Southern Asian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: South-East Asian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: South-East Asian: Filipino",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: South-East Asian: Malaysian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: South-East Asian: Singaporean",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: South-East Asian: Other South-East Asian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Central Asian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Middle Eastern and Asian: Asian not otherwise specified",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: American and Caribbean",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: American and Caribbean: North American",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: American and Caribbean: North American: Canadian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: American and Caribbean: North American: US Citizen",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: American and Caribbean: North American: Other North American",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: American and Caribbean: Central American",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: American and Caribbean: South American",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: American and Caribbean: Caribbean",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: American and Caribbean: Caribbean: Jamaican",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: American and Caribbean: Caribbean: Other Caribbean",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Antarctican and Oceanian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Antarctican and Oceanian: Australasian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Antarctican and Oceanian: Australasian: Australian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Antarctican and Oceanian: Australasian: New Zealander",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Antarctican and Oceanian: Australasian: Other Australasian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Antarctican and Oceanian: Other Oceanian",
                "type": "int64"
            },
            {
                "name": "National identity (detailed): Other identity only: Other",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS029",
        "description": "Proficiency in English",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts029.zip",
        "files": [
            "census2021-ts029-ctry.csv",
            "census2021-ts029-lsoa.csv",
            "census2021-ts029-ltla.csv",
            "census2021-ts029-msoa.csv",
            "census2021-ts029-oa.csv",
            "census2021-ts029-rgn.csv",
            "census2021-ts029-utla.csv",
            "metadata/ts029-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Proficiency in English language: Total: All usual residents aged 3 years and over",
                "type": "int64"
            },
            {
                "name": "Proficiency in English language: Main language is English (English or Welsh in Wales)",
                "type": "int64"
            },
            {
                "name": "Proficiency in English language: Main language is not English (English or Welsh in Wales)",
                "type": "int64"
            },
            {
                "name": "Proficiency in English language: Main language is not English (English or Welsh in Wales): Can speak English very well",
                "type": "int64"
            },
            {
                "name": "Proficiency in English language: Main language is not English (English or Welsh in Wales): Can speak English well",
                "type": "int64"
            },
            {
                "name": "Proficiency in English language: Main language is not English (English or Welsh in Wales): Cannot speak English well",
                "type": "int64"
            },
            {
                "name": "Proficiency in English language: Main language is not English (English or Welsh in Wales): Cannot speak English",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS030",
        "description": "Religion",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts030.zip",
        "files": [
            "census2021-ts030-ctry.csv",
            "census2021-ts030-lsoa.csv",
            "census2021-ts030-ltla.csv",
            "census2021-ts030-msoa.csv",
            "census2021-ts030-oa.csv",
            "census2021-ts030-rgn.csv",
            "census2021-ts030-utla.csv",
            "metadata/ts030-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Religion: Total: All usual residents",
                "type": "int64"
            },
            {
                "name": "Religion: No religion",
                "type": "int64"
            },
            {
                "name": "Religion: Christian",
                "type": "int64"
            },
            {
                "name": "Religion: Buddhist",
                "type": "int64"
            },
            {
                "name": "Religion: Hindu",
                "type": "int64"
            },
            {
                "name": "Religion: Jewish",
                "type": "int64"
            },
            {
                "name": "Religion: Muslim",
                "type": "int64"
            },
            {
                "name": "Religion: Sikh",
                "type": "int64"
            },
            {
                "name": "Religion: Other religion",
                "type": "int64"
            },
            {
                "name": "Religion: Not answered",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS031",
        "description": "Religion (detailed)",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts031.zip",
        "files": [
            "census2021-ts031-ctry.csv",
            "census2021-ts031-ltla.csv",
            "census2021-ts031-msoa.csv",
            "census2021-ts031-rgn.csv",
            "census2021-ts031-utla.csv",
            "metadata/ts031-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Religion (detailed): Total: All Usual Residents",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Christian",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Buddhist",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Hindu",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Jewish",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Muslim ",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Sikh",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): No religion",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): No religion: Agnostic",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): No religion: Atheist",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): No religion: Free Thinker",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): No religion: Humanist",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): No religion: No religion",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): No religion: Realist",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Alevi",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Animism",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Baha'i",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Believe in God",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Brahma Kumari",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Chinese Religion",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Church of All Religion",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Confucianist",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Deist",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Druid",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Druze",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Eckankar",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Heathen",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Jain",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Mixed Religion",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Mysticism",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Native American Church",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: New Age",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Occult",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Other religions",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Own Belief System",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Pagan",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Pantheism",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Rastafarian",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Ravidassia",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Reconstructionist",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Satanism",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Scientology",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Shamanism",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Shintoism",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Spiritual",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Spiritualist",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Taoist",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Theism",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Thelemite",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Traditional African Religion",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Unification Church",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Universalist",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Valmiki",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Vodun",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Wicca",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Witchcraft",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Yazidi ",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Other religion: Zoroastrian",
                "type": "int64"
            },
            {
                "name": "Religion (detailed): Religion not stated",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS032",
        "description": "Welsh language skills (detailed)",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts032.zip",
        "files": [
            "census2021-ts032-ctry.csv",
            "census2021-ts032-lsoa.csv",
            "census2021-ts032-ltla.csv",
            "census2021-ts032-msoa.csv",
            "census2021-ts032-oa.csv",
            "census2021-ts032-rgn.csv",
            "census2021-ts032-utla.csv",
            "metadata/ts032-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Welsh language skills: Total: All usual residents aged 3 years and over",
                "type": "int64"
            },
            {
                "name": "Welsh language skills: Can understand spoken Welsh only",
                "type": "int64"
            },
            {
                "name": "Welsh language skills: Can speak, read and write Welsh",
                "type": "int64"
            },
            {
                "name": "Welsh language skills: Can speak but cannot read or write Welsh",
                "type": "int64"
            },
            {
                "name": "Welsh language skills: Can speak and read but cannot write Welsh",
                "type": "int64"
            },
            {
                "name": "Welsh language skills: Can read but cannot speak or write Welsh",
                "type": "int64"
            },
            {
                "name": "Welsh language skills: Can write but cannot speak or read Welsh",
                "type": "int64"
            },
            {
                "name": "Welsh language skills: Can read and write but cannot speak Welsh",
                "type": "int64"
            },
            {
                "name": "Welsh language skills: Can speak and other combinations of skills in Welsh",
                "type": "int64"
            },
            {
                "name": "Welsh language skills: No skills in Welsh",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS033",
        "description": "Welsh language skills (speaking)",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts033.zip",
        "files": [
            "census2021-ts033-ctry.csv",
            "census2021-ts033-lsoa.csv",
            "census2021-ts033-ltla.csv",
            "census2021-ts033-msoa.csv",
            "census2021-ts033-oa.csv",
            "census2021-ts033-rgn.csv",
            "census2021-ts033-utla.csv",
            "metadata/ts033-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS034",
        "description": "Welsh language skills (writing)",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts034.zip",
        "files": [
            "census2021-ts034-ctry.csv",
            "census2021-ts034-lsoa.csv",
            "census2021-ts034-ltla.csv",
            "census2021-ts034-msoa.csv",
            "census2021-ts034-oa.csv",
            "census2021-ts034-rgn.csv",
            "census2021-ts034-utla.csv",
            "metadata/ts034-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Welsh writing ability: Total: All usual residents aged 3 years and over",
                "type": "int64"
            },
            {
                "name": "Welsh writing ability: Cannot write Welsh",
                "type": "int64"
            },
            {
                "name": "Welsh writing ability: Can write Welsh",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS035",
        "description": "Welsh language skills (reading)",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts035.zip",
        "files": [
            "census2021-ts035-ctry.csv",
            "census2021-ts035-lsoa.csv",
            "census2021-ts035-ltla.csv",
            "census2021-ts035-msoa.csv",
            "census2021-ts035-oa.csv",
            "census2021-ts035-rgn.csv",
            "census2021-ts035-utla.csv",
            "metadata/ts035-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Welsh reading ability: Total: All usual residents aged 3 years and over",
                "type": "int64"
            },
            {
                "name": "Welsh reading ability: Cannot read Welsh",
                "type": "int64"
            },
            {
                "name": "Welsh reading ability: Can read Welsh",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS036",
        "description": "Welsh language skills (understanding)",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts036.zip",
        "files": [
            "census2021-ts036-ctry.csv",
            "census2021-ts036-lsoa.csv",
            "census2021-ts036-ltla.csv",
            "census2021-ts036-msoa.csv",
            "census2021-ts036-oa.csv",
            "census2021-ts036-rgn.csv",
            "census2021-ts036-utla.csv",
            "metadata/ts036-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Welsh understanding ability: Total: All usual residents aged 3 years and over",
                "type": "int64"
            },
            {
                "name": "Welsh understanding ability: Cannot understand spoken Welsh",
                "type": "int64"
            },
            {
                "name": "Welsh understanding ability: Can understand spoken Welsh",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS037",
        "description": "General health",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts037.zip",
        "files": [
            "census2021-ts037-ctry.csv",
            "census2021-ts037-lsoa.csv",
            "census2021-ts037-ltla.csv",
            "census2021-ts037-msoa.csv",
            "census2021-ts037-oa.csv",
            "census2021-ts037-rgn.csv",
            "census2021-ts037-utla.csv",
            "metadata/ts037-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "General health: Total: All usual residents",
                "type": "int64"
            },
            {
                "name": "General health: Very good health",
                "type": "int64"
            },
            {
                "name": "General health: Good health",
                "type": "int64"
            },
            {
                "name": "General health: Fair health",
                "type": "int64"
            },
            {
                "name": "General health: Bad health",
                "type": "int64"
            },
            {
                "name": "General health: Very bad health",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS037ASP",
        "description": "General health - Age-standardised proportions",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts037asp.zip",
        "files": [
            "census2021-ts037asp-ctry.csv",
            "census2021-ts037asp-ltla.csv",
            "census2021-ts037asp-rgn.csv",
            "census2021-ts037asp-utla.csv",
            "metadata/ts037asp-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "General Health: Very good health",
                "type": "float64"
            },
            {
                "name": "General Health: Good health",
                "type": "float64"
            },
            {
                "name": "General Health: Fair health",
                "type": "float64"
            },
            {
                "name": "General Health: Bad health",
                "type": "float64"
            },
            {
                "name": "General Health: Very bad health",
                "type": "float64"
            }
        ]
    },
    {
        "filename": "TS038",
        "description": "Disability",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts038.zip",
        "files": [
            "census2021-ts038-ctry.csv",
            "census2021-ts038-lsoa.csv",
            "census2021-ts038-ltla.csv",
            "census2021-ts038-msoa.csv",
            "census2021-ts038-oa.csv",
            "census2021-ts038-rgn.csv",
            "census2021-ts038-utla.csv",
            "metadata/ts038-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Disability: Total: All usual residents",
                "type": "int64"
            },
            {
                "name": "Disability: Disabled under the Equality Act",
                "type": "int64"
            },
            {
                "name": "Disability: Disabled under the Equality Act: Day-to-day activities limited a lot",
                "type": "int64"
            },
            {
                "name": "Disability: Disabled under the Equality Act: Day-to-day activities limited a little",
                "type": "int64"
            },
            {
                "name": "Disability: Not disabled under the Equality Act",
                "type": "int64"
            },
            {
                "name": "Disability: Not disabled under the Equality Act: Has long term physical or mental health condition but day-to-day activities are not limited",
                "type": "int64"
            },
            {
                "name": "Disability: Not disabled under the Equality Act: No long term physical or mental health conditions",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS038ASP",
        "description": "Disability - Age-standardised proportions",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts038asp.zip",
        "files": [
            "census2021-ts038asp-ctry.csv",
            "census2021-ts038asp-ltla.csv",
            "census2021-ts038asp-rgn.csv",
            "census2021-ts038asp-utla.csv",
            "metadata/ts038asp-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Disability: Disabled under the Equality Act: Day-to-day activities limited a lot",
                "type": "float64"
            },
            {
                "name": "Disability: Disabled under the Equality Act: Day-to-day activities limited a little",
                "type": "float64"
            },
            {
                "name": "Disability: Not disabled under the Equality Act",
                "type": "float64"
            }
        ]
    },
    {
        "filename": "TS039",
        "description": "Provision of unpaid care",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts039.zip",
        "files": [
            "census2021-ts039-ctry.csv",
            "census2021-ts039-lsoa.csv",
            "census2021-ts039-ltla.csv",
            "census2021-ts039-msoa.csv",
            "census2021-ts039-oa.csv",
            "census2021-ts039-rgn.csv",
            "census2021-ts039-utla.csv",
            "metadata/ts039-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Provision of unpaid care: Total: All usual residents aged 5 and over",
                "type": "int64"
            },
            {
                "name": "Provision of unpaid care: Provides no unpaid care",
                "type": "int64"
            },
            {
                "name": "Provision of unpaid care: Provides 19 hours or less unpaid care a week",
                "type": "int64"
            },
            {
                "name": "Provision of unpaid care: Provides 9 hours or less unpaid care a week",
                "type": "int64"
            },
            {
                "name": "Provision of unpaid care: Provides 10 to 19 hours unpaid care a week",
                "type": "int64"
            },
            {
                "name": "Provision of unpaid care: Provides 20 to 49 hours unpaid care a week",
                "type": "int64"
            },
            {
                "name": "Provision of unpaid care: Provides 20 to 34 hours unpaid care a week",
                "type": "int64"
            },
            {
                "name": "Provision of unpaid care: Provides 35 to 49 hours unpaid care a week",
                "type": "int64"
            },
            {
                "name": "Provision of unpaid care: Provides 50 or more hours unpaid care a week",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS039ASP",
        "description": "Provision of unpaid care - Age-standardised proportions",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts039asp.zip",
        "files": [
            "census2021-ts039asp-ctry.csv",
            "census2021-ts039asp-ltla.csv",
            "census2021-ts039asp-rgn.csv",
            "census2021-ts039asp-utla.csv",
            "metadata/ts039asp-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Provision of unpaid care: Provides no unpaid care",
                "type": "float64"
            },
            {
                "name": "Provision of unpaid care: Provides 19 or less hours unpaid care a week",
                "type": "float64"
            },
            {
                "name": "Provision of unpaid care: Provides 20 to 49 hours unpaid care a week",
                "type": "float64"
            },
            {
                "name": "Provision of unpaid care: Provides 50 or more hours unpaid carea week",
                "type": "float64"
            }
        ]
    },
    {
        "filename": "TS040",
        "description": "Number of disabled people in the household",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts040.zip",
        "files": [
            "census2021-ts040-ctry.csv",
            "census2021-ts040-lsoa.csv",
            "census2021-ts040-ltla.csv",
            "census2021-ts040-msoa.csv",
            "census2021-ts040-oa.csv",
            "census2021-ts040-rgn.csv",
            "census2021-ts040-utla.csv",
            "metadata/ts040-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Number of disabled people in household: Total: All households",
                "type": "int64"
            },
            {
                "name": "Number of disabled people in household: No people disabled under the Equality Act in household",
                "type": "int64"
            },
            {
                "name": "Number of disabled people in household: 1 person disabled under the Equality Act in household",
                "type": "int64"
            },
            {
                "name": "Number of disabled people in household: 2 or more people disabled under the Equality Act in household",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS041",
        "description": "Number of Households",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts041.zip",
        "files": [
            "census2021-ts041-utla.csv",
            "census2021-ts041-ctry.csv",
            "census2021-ts041-lsoa.csv",
            "census2021-ts041-ltla.csv",
            "census2021-ts041-msoa.csv",
            "census2021-ts041-oa.csv",
            "census2021-ts041-rgn.csv",
            "metadata/ts041-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Number of households: Number of households; measures: Value",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS044",
        "description": "Accommodation type",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts044.zip",
        "files": [
            "census2021-ts044-ctry.csv",
            "census2021-ts044-lsoa.csv",
            "census2021-ts044-ltla.csv",
            "census2021-ts044-msoa.csv",
            "census2021-ts044-oa.csv",
            "census2021-ts044-rgn.csv",
            "census2021-ts044-utla.csv",
            "metadata/ts044-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Accommodation type: Total: All households",
                "type": "int64"
            },
            {
                "name": "Accommodation type: Detached",
                "type": "int64"
            },
            {
                "name": "Accommodation type: Semi-detached",
                "type": "int64"
            },
            {
                "name": "Accommodation type: Terraced",
                "type": "int64"
            },
            {
                "name": "Accommodation type: In a purpose-built block of flats or tenement",
                "type": "int64"
            },
            {
                "name": "Accommodation type: Part of a converted or shared house, including bedsits",
                "type": "int64"
            },
            {
                "name": "Accommodation type: Part of another converted building, for example, former school, church or warehouse",
                "type": "int64"
            },
            {
                "name": "Accommodation type: In a commercial building, for example, in an office building, hotel or over a shop",
                "type": "int64"
            },
            {
                "name": "Accommodation type: A caravan or other mobile or temporary structure",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS045",
        "description": "Car or van availability",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts045.zip",
        "files": [
            "census2021-ts045-ctry.csv",
            "census2021-ts045-lsoa.csv",
            "census2021-ts045-ltla.csv",
            "census2021-ts045-msoa.csv",
            "census2021-ts045-oa.csv",
            "census2021-ts045-rgn.csv",
            "census2021-ts045-utla.csv",
            "metadata/ts045-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Number of cars or vans: Total: All households",
                "type": "int64"
            },
            {
                "name": "Number of cars or vans: No cars or vans in household",
                "type": "int64"
            },
            {
                "name": "Number of cars or vans: 1 car or van in household",
                "type": "int64"
            },
            {
                "name": "Number of cars or vans: 2 cars or vans in household",
                "type": "int64"
            },
            {
                "name": "Number of cars or vans: 3 or more cars or vans in household",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS045A",
        "description": "Number of cars or vans in the area",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts045a.zip",
        "files": []
    },
    {
        "filename": "TS046",
        "description": "Central heating",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts046.zip",
        "files": [
            "census2021-ts046-ctry.csv",
            "census2021-ts046-lsoa.csv",
            "census2021-ts046-ltla.csv",
            "census2021-ts046-msoa.csv",
            "census2021-ts046-oa.csv",
            "census2021-ts046-rgn.csv",
            "census2021-ts046-utla.csv",
            "metadata/ts046-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Type of central heating in household: Total: All households",
                "type": "int64"
            },
            {
                "name": "Type of central heating in household: No central heating",
                "type": "int64"
            },
            {
                "name": "Type of central heating in household: Mains gas only",
                "type": "int64"
            },
            {
                "name": "Type of central heating in household: Tank or bottled gas only",
                "type": "int64"
            },
            {
                "name": "Type of central heating in household: Electric only",
                "type": "int64"
            },
            {
                "name": "Type of central heating in household: Oil only",
                "type": "int64"
            },
            {
                "name": "Type of central heating in household: Wood only",
                "type": "int64"
            },
            {
                "name": "Type of central heating in household: Solid fuel only",
                "type": "int64"
            },
            {
                "name": "Type of central heating in household: Renewable energy only",
                "type": "int64"
            },
            {
                "name": "Type of central heating in household: District or communal heat networks only",
                "type": "int64"
            },
            {
                "name": "Type of central heating in household: Other central heating only",
                "type": "int64"
            },
            {
                "name": "Type of central heating in household: Two or more types of central heating (not including renewable energy)",
                "type": "int64"
            },
            {
                "name": "Type of central heating in household: Two or more types of central heating (including renewable energy)",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS047",
        "description": "Communal establishment residents by age and sex",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts047.zip",
        "files": [
            "census2021-ts047-ctry.csv",
            "census2021-ts047-ltla.csv",
            "census2021-ts047-msoa.csv",
            "census2021-ts047-rgn.csv",
            "census2021-ts047-utla.csv",
            "metadata/ts047-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Position in communal establishment and sex and age: Total: All usual residents in communal establishments",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident:Male",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Male: Aged 0 to 15 years",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Male: Aged 16 to 24 years",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Male: Aged 25 to 34 years",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Male: Aged 35 to 49 years",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Male: Aged 50 to 64 years",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Male: Aged 65 to 74 years",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Male: Aged 75 to 84 years",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Male: Aged 85 years and over",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident:Female",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Female: Aged 0 to 15 years",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Female: Aged 16 to 24 years",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Female: Aged 25 to 34 years",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Female: Aged 35 to 49 years",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Female: Aged 50 to 64 years",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Female: Aged 65 to 74 years",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Female: Aged 75 to 84 years",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Resident: Female: Aged 85 years and over",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Staff or owner",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Family member or partner of staff or owner",
                "type": "int64"
            },
            {
                "name": "Position in communal establishment and sex and age: Staying temporarily (no usual UK address)",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS048",
        "description": "Communal establishment management and type",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts048.zip",
        "files": [
            "census2021-ts048-ctry.csv",
            "census2021-ts048-ltla.csv",
            "census2021-ts048-msoa.csv",
            "census2021-ts048-rgn.csv",
            "census2021-ts048-utla.csv",
            "metadata/ts048-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Communal establishment management and type: Total: All usual residents in communal establishments",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment:NHS",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment: NHS: General hospital",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment: NHS: Mental health hospital or unit (including secure units)",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment: NHS: Other hospital",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment:Local Authority",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment: Local Authority: Children's home (including secure units)",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment: Local Authority: Care home with nursing",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment: Local Authority: Care home without nursing",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment: Local Authority: Other home",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment:Registered Social Landlord or Housing Association",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment: Registered Social Landlord or Housing Association: Home or hostel",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment:Other",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment: Other: Care home with nursing",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment: Other: Care home without nursing",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment: Other: Children's home (including secure units)",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment: Other: Mental health hospital or unit (including secure units)",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment: Other: Other hospital",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Medical and care establishment: Other: Other establishment",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Other establishment",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Other establishment: Defence",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Other establishment: Prison service",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Other establishment: Approved premises (probation or bail hostel)",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Other establishment: Detention centres and other detention",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Other establishment: Education",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Other establishment: Hotel, guest house, B&B or youth hostel",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Other establishment: Hostel or temporary shelter for the homeless",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Other establishment: Holiday accommodation",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Other establishment: Other travel or temporary accommodation",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Other establishment: Religious",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Other establishment: Staff or worker accommodation or Other",
                "type": "int64"
            },
            {
                "name": "Communal establishment management and type: Establishment not stated",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS048NP",
        "description": "Communal establishment management and type - National Parks",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts048np.zip",
        "files": []
    },
    {
        "filename": "TS050",
        "description": "Number of bedrooms",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts050.zip",
        "files": [
            "census2021-ts050-ctry.csv",
            "census2021-ts050-lsoa.csv",
            "census2021-ts050-ltla.csv",
            "census2021-ts050-msoa.csv",
            "census2021-ts050-oa.csv",
            "census2021-ts050-rgn.csv",
            "census2021-ts050-utla.csv",
            "metadata/ts050-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Number of bedrooms: Total: All households",
                "type": "int64"
            },
            {
                "name": "Number of bedrooms: 1 bedroom",
                "type": "int64"
            },
            {
                "name": "Number of bedrooms: 2 bedrooms",
                "type": "int64"
            },
            {
                "name": "Number of bedrooms: 3 bedrooms",
                "type": "int64"
            },
            {
                "name": "Number of bedrooms: 4 or more bedrooms",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS051",
        "description": "Number of rooms",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts051.zip",
        "files": [
            "census2021-ts051-ctry.csv",
            "census2021-ts051-lsoa.csv",
            "census2021-ts051-ltla.csv",
            "census2021-ts051-msoa.csv",
            "census2021-ts051-oa.csv",
            "census2021-ts051-rgn.csv",
            "census2021-ts051-utla.csv",
            "metadata/ts051-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Number of rooms (VOA): Total: All households",
                "type": "int64"
            },
            {
                "name": "Number of rooms (VOA): 1 room",
                "type": "int64"
            },
            {
                "name": "Number of rooms (VOA): 2 rooms",
                "type": "int64"
            },
            {
                "name": "Number of rooms (VOA): 3 rooms",
                "type": "int64"
            },
            {
                "name": "Number of rooms (VOA): 4 rooms",
                "type": "int64"
            },
            {
                "name": "Number of rooms (VOA): 5 rooms",
                "type": "int64"
            },
            {
                "name": "Number of rooms (VOA): 6 rooms",
                "type": "int64"
            },
            {
                "name": "Number of rooms (VOA): 7 rooms",
                "type": "int64"
            },
            {
                "name": "Number of rooms (VOA): 8 rooms",
                "type": "int64"
            },
            {
                "name": "Number of rooms (VOA): 9 or more rooms",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS052",
        "description": "Occupancy rating for bedrooms",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts052.zip",
        "files": [
            "census2021-ts052-ctry.csv",
            "census2021-ts052-lsoa.csv",
            "census2021-ts052-ltla.csv",
            "census2021-ts052-msoa.csv",
            "census2021-ts052-oa.csv",
            "census2021-ts052-rgn.csv",
            "census2021-ts052-utla.csv",
            "metadata/ts052-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Occupancy rating for bedrooms: Total: All households",
                "type": "int64"
            },
            {
                "name": "Occupancy rating for bedrooms: Occupancy rating of bedrooms: +2 or more",
                "type": "int64"
            },
            {
                "name": "Occupancy rating for bedrooms: Occupancy rating of bedrooms: +1",
                "type": "int64"
            },
            {
                "name": "Occupancy rating for bedrooms: Occupancy rating of bedrooms: 0",
                "type": "int64"
            },
            {
                "name": "Occupancy rating for bedrooms: Occupancy rating of bedrooms: -1",
                "type": "int64"
            },
            {
                "name": "Occupancy rating for bedrooms: Occupancy rating of bedrooms: -2 or less",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS053",
        "description": "Occupancy rating for rooms",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts053.zip",
        "files": [
            "census2021-ts053-ctry.csv",
            "census2021-ts053-lsoa.csv",
            "census2021-ts053-ltla.csv",
            "census2021-ts053-msoa.csv",
            "census2021-ts053-oa.csv",
            "census2021-ts053-rgn.csv",
            "census2021-ts053-utla.csv",
            "metadata/ts053-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Occupancy rating for rooms: Total: All households",
                "type": "int64"
            },
            {
                "name": "Occupancy rating for rooms: Occupancy rating of rooms: +2 or more",
                "type": "int64"
            },
            {
                "name": "Occupancy rating for rooms: Occupancy rating of rooms: +1",
                "type": "int64"
            },
            {
                "name": "Occupancy rating for rooms: Occupancy rating of rooms: 0",
                "type": "int64"
            },
            {
                "name": "Occupancy rating for rooms: Occupancy rating of rooms: -1",
                "type": "int64"
            },
            {
                "name": "Occupancy rating for rooms: Occupancy rating of rooms: -2 or less",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS054",
        "description": "Tenure",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts054.zip",
        "files": [
            "census2021-ts054-ctry.csv",
            "census2021-ts054-lsoa.csv",
            "census2021-ts054-ltla.csv",
            "census2021-ts054-msoa.csv",
            "census2021-ts054-oa.csv",
            "census2021-ts054-rgn.csv",
            "census2021-ts054-utla.csv",
            "metadata/ts054-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Tenure of household: Total: All households",
                "type": "int64"
            },
            {
                "name": "Tenure of household: Owned",
                "type": "int64"
            },
            {
                "name": "Tenure of household: Owned: Owns outright",
                "type": "int64"
            },
            {
                "name": "Tenure of household: Owned: Owns with a mortgage or loan",
                "type": "int64"
            },
            {
                "name": "Tenure of household: Shared ownership",
                "type": "int64"
            },
            {
                "name": "Tenure of household: Shared ownership: Shared ownership",
                "type": "int64"
            },
            {
                "name": "Tenure of household: Social rented",
                "type": "int64"
            },
            {
                "name": "Tenure of household: Social rented: Rents from council or Local Authority",
                "type": "int64"
            },
            {
                "name": "Tenure of household: Social rented: Other social rented",
                "type": "int64"
            },
            {
                "name": "Tenure of household: Private rented",
                "type": "int64"
            },
            {
                "name": "Tenure of household: Private rented: Private landlord or letting agency",
                "type": "int64"
            },
            {
                "name": "Tenure of household: Private rented: Other private rented",
                "type": "int64"
            },
            {
                "name": "Tenure of household: Lives rent free",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS055",
        "description": "Purpose of second address",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts055.zip",
        "files": [
            "census2021-ts055-ctry.csv",
            "census2021-ts055-lsoa.csv",
            "census2021-ts055-ltla.csv",
            "census2021-ts055-msoa.csv",
            "census2021-ts055-oa.csv",
            "census2021-ts055-rgn.csv",
            "census2021-ts055-utla.csv",
            "metadata/ts055-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Second address type: Total: All usual residents",
                "type": "int64"
            },
            {
                "name": "Second address type: Armed forces base address",
                "type": "int64"
            },
            {
                "name": "Second address type: Another address when working away from home",
                "type": "int64"
            },
            {
                "name": "Second address type: Holiday home",
                "type": "int64"
            },
            {
                "name": "Second address type: Student's term-time address",
                "type": "int64"
            },
            {
                "name": "Second address type: Student's home address",
                "type": "int64"
            },
            {
                "name": "Second address type: Another parent or guardian's address",
                "type": "int64"
            },
            {
                "name": "Second address type: Partner's address",
                "type": "int64"
            },
            {
                "name": "Second address type: Other",
                "type": "int64"
            },
            {
                "name": "Second address type: Second address type not specified",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS056",
        "description": "Second address indicator",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts056.zip",
        "files": [
            "census2021-ts056-ctry.csv",
            "census2021-ts056-lsoa.csv",
            "census2021-ts056-ltla.csv",
            "census2021-ts056-msoa.csv",
            "census2021-ts056-oa.csv",
            "census2021-ts056-rgn.csv",
            "census2021-ts056-utla.csv",
            "metadata/ts056-2021-2.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Second address indicator: Total: All usual residents",
                "type": "int64"
            },
            {
                "name": "Second address indicator: No second address",
                "type": "int64"
            },
            {
                "name": "Second address indicator: Second address is in the UK",
                "type": "int64"
            },
            {
                "name": "Second address indicator: Second address is outside the UK",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS058",
        "description": "Distance travelled to work",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts058.zip",
        "files": [
            "census2021-ts058-ctry.csv",
            "census2021-ts058-lsoa.csv",
            "census2021-ts058-ltla.csv",
            "census2021-ts058-msoa.csv",
            "census2021-ts058-oa.csv",
            "census2021-ts058-rgn.csv",
            "census2021-ts058-utla.csv",
            "metadata/ts058-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Distance travelled to work: Total: All usual residents aged 16 years and over in employment the week before the census",
                "type": "int64"
            },
            {
                "name": "Distance travelled to work: Less than 2km",
                "type": "int64"
            },
            {
                "name": "Distance travelled to work: 2km to less than 5km",
                "type": "int64"
            },
            {
                "name": "Distance travelled to work: 5km to less than 10km",
                "type": "int64"
            },
            {
                "name": "Distance travelled to work: 10km to less than 20km",
                "type": "int64"
            },
            {
                "name": "Distance travelled to work: 20km to less than 30km",
                "type": "int64"
            },
            {
                "name": "Distance travelled to work: 30km to less than 40km",
                "type": "int64"
            },
            {
                "name": "Distance travelled to work: 40km to less than 60km",
                "type": "int64"
            },
            {
                "name": "Distance travelled to work: 60km and over",
                "type": "int64"
            },
            {
                "name": "Distance travelled to work: Works mainly from home",
                "type": "int64"
            },
            {
                "name": "Distance travelled to work: Works mainly at an offshore installation, in no fixed place, or outside the UK",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS059",
        "description": "Hours worked",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts059.zip",
        "files": [
            "census2021-ts059-ctry.csv",
            "census2021-ts059-lsoa.csv",
            "census2021-ts059-ltla.csv",
            "census2021-ts059-msoa.csv",
            "census2021-ts059-oa.csv",
            "census2021-ts059-rgn.csv",
            "census2021-ts059-utla.csv",
            "metadata/ts059-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Hours worked: Total: All usual residents aged 16 years and over in employment the week before the census",
                "type": "int64"
            },
            {
                "name": "Hours worked: Part-time",
                "type": "int64"
            },
            {
                "name": "Hours worked: Part-time: 15 hours or less worked",
                "type": "int64"
            },
            {
                "name": "Hours worked: Part-time: 16 to 30 hours worked",
                "type": "int64"
            },
            {
                "name": "Hours worked: Full-time",
                "type": "int64"
            },
            {
                "name": "Hours worked: Full-time: 31 to 48 hours worked",
                "type": "int64"
            },
            {
                "name": "Hours worked: Full-time: 49 or more hours worked",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS060",
        "description": "Industry",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts060.zip",
        "files": [
            "census2021-ts060-ctry.csv",
            "census2021-ts060-ltla.csv",
            "census2021-ts060-msoa.csv",
            "census2021-ts060-rgn.csv",
            "census2021-ts060-utla.csv",
            "metadata/ts060-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Industry (current): Total: All usual residents aged 16 years and over in employment the week before the census",
                "type": "int64"
            },
            {
                "name": "Industry (current): A: Agriculture, Forestry and fishing",
                "type": "int64"
            },
            {
                "name": "Industry (current): 01 Crop and animal production, hunting and related service activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 02 Forestry and logging",
                "type": "int64"
            },
            {
                "name": "Industry (current): 03 Fishing and aquaculture",
                "type": "int64"
            },
            {
                "name": "Industry (current): B: Mining and quarrying",
                "type": "int64"
            },
            {
                "name": "Industry (current): 05 Mining of coal and lignite",
                "type": "int64"
            },
            {
                "name": "Industry (current): 06 Extraction of crude petroleum and natural gas",
                "type": "int64"
            },
            {
                "name": "Industry (current): 07 Mining of metal ores",
                "type": "int64"
            },
            {
                "name": "Industry (current): 08 Other mining and quarrying",
                "type": "int64"
            },
            {
                "name": "Industry (current): 09 Mining support service activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): C: Manufacturing",
                "type": "int64"
            },
            {
                "name": "Industry (current): 10 Manufacture of food products",
                "type": "int64"
            },
            {
                "name": "Industry (current): 11 Manufacture of beverages",
                "type": "int64"
            },
            {
                "name": "Industry (current): 12 Manufacture of tobacco products",
                "type": "int64"
            },
            {
                "name": "Industry (current): 13 Manufacture of textiles",
                "type": "int64"
            },
            {
                "name": "Industry (current): 14 Manufacture of wearing apparel",
                "type": "int64"
            },
            {
                "name": "Industry (current): 15 Manufacture of leather and related products",
                "type": "int64"
            },
            {
                "name": "Industry (current): 16 Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials",
                "type": "int64"
            },
            {
                "name": "Industry (current): 17 Manufacture of paper and paper products",
                "type": "int64"
            },
            {
                "name": "Industry (current): 18 Printing and reproduction of recorded media",
                "type": "int64"
            },
            {
                "name": "Industry (current): 19 Manufacture of coke and refined petroleum products",
                "type": "int64"
            },
            {
                "name": "Industry (current): 20 Manufacture of chemicals and chemical products",
                "type": "int64"
            },
            {
                "name": "Industry (current): 21 Manufacture of basic pharmaceutical products and pharmaceutical preparations",
                "type": "int64"
            },
            {
                "name": "Industry (current): 22 Manufacture of rubber and plastic products",
                "type": "int64"
            },
            {
                "name": "Industry (current): 23 Manufacture of other non-metallic mineral products",
                "type": "int64"
            },
            {
                "name": "Industry (current): 24 Manufacture of basic metals",
                "type": "int64"
            },
            {
                "name": "Industry (current): 25 Manufacture of fabricated metal products, except machinery and equipment",
                "type": "int64"
            },
            {
                "name": "Industry (current): 26 Manufacture of computer, electrical and optical products",
                "type": "int64"
            },
            {
                "name": "Industry (current): 27 Manufacture of electrical equipment",
                "type": "int64"
            },
            {
                "name": "Industry (current): 28 Manufacture of machinery and equipment not otherwise specified",
                "type": "int64"
            },
            {
                "name": "Industry (current): 29 Manufacture of motor vehicles, trailers and semi-trailers",
                "type": "int64"
            },
            {
                "name": "Industry (current): 30 Manufacture of other transport equipment",
                "type": "int64"
            },
            {
                "name": "Industry (current): 31 Manufacture of furniture",
                "type": "int64"
            },
            {
                "name": "Industry (current): 32 Other Manufacturing",
                "type": "int64"
            },
            {
                "name": "Industry (current): 33 Repair and installation of machinery and equipment",
                "type": "int64"
            },
            {
                "name": "Industry (current): D: Electricity, gas, steam and air conditioning supply",
                "type": "int64"
            },
            {
                "name": "Industry (current): 35 Electricity, gas, steam and air conditioning supply",
                "type": "int64"
            },
            {
                "name": "Industry (current): E:  Water supply; Sewerage, Waste management and Remediation activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 36 Water collection, treatment and supply",
                "type": "int64"
            },
            {
                "name": "Industry (current): 37 Sewerage",
                "type": "int64"
            },
            {
                "name": "Industry (current): 38 Waste collection, treatment and disposal activities; materials recovery",
                "type": "int64"
            },
            {
                "name": "Industry (current): 39 Remediation activities and other waste management services",
                "type": "int64"
            },
            {
                "name": "Industry (current): F: Construction",
                "type": "int64"
            },
            {
                "name": "Industry (current): 41 Construction of buildings; 42 Civil engineering; 43 Specialised construction activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): G: Wholesale and retail trade; repair of motor vehicles and motorcycles",
                "type": "int64"
            },
            {
                "name": "Industry (current): 45 Wholesale and retail trade and repair of motor vehicles and motorcycles",
                "type": "int64"
            },
            {
                "name": "Industry (current): 46 Wholesale trade, except of motor vehicles and motorcycles",
                "type": "int64"
            },
            {
                "name": "Industry (current): 47 Retail trade, except of motor vehicles and motorcycles",
                "type": "int64"
            },
            {
                "name": "Industry (current): 48 Wholesale and retail not otherwise specified",
                "type": "int64"
            },
            {
                "name": "Industry (current): H: Transport and storage",
                "type": "int64"
            },
            {
                "name": "Industry (current): 49 Land transport and transport via pipelines",
                "type": "int64"
            },
            {
                "name": "Industry (current): 50 Water transport",
                "type": "int64"
            },
            {
                "name": "Industry (current): 51 Air transport",
                "type": "int64"
            },
            {
                "name": "Industry (current): 52 Warehousing and support activities for transportation",
                "type": "int64"
            },
            {
                "name": "Industry (current): 53 Postal and courier activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): I: Accommodation and food service activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 55 Accommodation",
                "type": "int64"
            },
            {
                "name": "Industry (current): 56 Food and beverage service activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): J: Information and communication",
                "type": "int64"
            },
            {
                "name": "Industry (current): 58 Publishing activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 59 Motion picture, video and television production, sound recording and music publishing activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 60 Programming and broadcasting activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 61 Telecommunications",
                "type": "int64"
            },
            {
                "name": "Industry (current): 62 Computer programming, consultancy and related activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 63 Information service activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): K: Financial and insurance activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 64 Financial service activities, except insurance and pension funding",
                "type": "int64"
            },
            {
                "name": "Industry (current): 65 Insurance, reinsurance and pension funding, except compulsory social security",
                "type": "int64"
            },
            {
                "name": "Industry (current): 66 Activities auxiliary to financial services and insurance activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): L: Real estate activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 68 Real estate activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): M: Professional, scientific and technical activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 69 Legal and accounting activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 70 Activities of head offices; management consultancy activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 71 Architectural and engineering activities; technical testing and analysis",
                "type": "int64"
            },
            {
                "name": "Industry (current): 72 Scientific research and development",
                "type": "int64"
            },
            {
                "name": "Industry (current): 73 Advertising and market research",
                "type": "int64"
            },
            {
                "name": "Industry (current): 74 Other professional, scientific and technical activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 75 Veterinary activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): N: Administrative and support service activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 77 Rental and leasing activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 78 Employment activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 79 Travel agency, tour operator and other reservation service and related activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 80 Security and investigation activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 81 Services to buildings and landscape activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 82 Office administrative, office support and other business support activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): O: Public administration and defence; compulsory social security",
                "type": "int64"
            },
            {
                "name": "Industry (current): 84 Public administration and defence; compulsory social security",
                "type": "int64"
            },
            {
                "name": "Industry (current): P: Education",
                "type": "int64"
            },
            {
                "name": "Industry (current): 85 Education",
                "type": "int64"
            },
            {
                "name": "Industry (current): Q: Human health and social work activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 86 Human health activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 87 Residential care activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 88 Social work activities without accommodation",
                "type": "int64"
            },
            {
                "name": "Industry (current): R, S, T, U Other",
                "type": "int64"
            },
            {
                "name": "Industry (current): 90 Creative, arts and entertainment activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 91 Libraries, archives, museums and other cultural activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 92 Gambling and betting activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 93 Sports activities and amusement and recreation activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 94 Activities of membership organisations",
                "type": "int64"
            },
            {
                "name": "Industry (current): 95 Repair of computers and personal and household goods",
                "type": "int64"
            },
            {
                "name": "Industry (current): 96 Other personal service activities",
                "type": "int64"
            },
            {
                "name": "Industry (current): 97 Activities of households as employers of domestic personnel",
                "type": "int64"
            },
            {
                "name": "Industry (current): 98 Undifferentiated goods- and services-producing activities of private households for own use",
                "type": "int64"
            },
            {
                "name": "Industry (current): 99 Activities of extraterritorial organisations and bodies",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS060A",
        "description": "Industry",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts060a.zip",
        "files": []
    },
    {
        "filename": "TS060NP",
        "description": "Industry - National Parks",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts060np.zip",
        "files": []
    },
    {
        "filename": "TS061",
        "description": "Method used to travel to work",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts061.zip",
        "files": [
            "census2021-ts061-ctry.csv",
            "census2021-ts061-lsoa.csv",
            "census2021-ts061-ltla.csv",
            "census2021-ts061-msoa.csv",
            "census2021-ts061-oa.csv",
            "census2021-ts061-rgn.csv",
            "census2021-ts061-utla.csv",
            "metadata/ts061-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Method of travel to workplace: Total: All usual residents aged 16 years and over in employment the week before the census",
                "type": "int64"
            },
            {
                "name": "Method of travel to workplace: Work mainly at or from home",
                "type": "int64"
            },
            {
                "name": "Method of travel to workplace: Underground, metro, light rail, tram",
                "type": "int64"
            },
            {
                "name": "Method of travel to workplace: Train",
                "type": "int64"
            },
            {
                "name": "Method of travel to workplace: Bus, minibus or coach",
                "type": "int64"
            },
            {
                "name": "Method of travel to workplace: Taxi",
                "type": "int64"
            },
            {
                "name": "Method of travel to workplace: Motorcycle, scooter or moped",
                "type": "int64"
            },
            {
                "name": "Method of travel to workplace: Driving a car or van",
                "type": "int64"
            },
            {
                "name": "Method of travel to workplace: Passenger in a car or van",
                "type": "int64"
            },
            {
                "name": "Method of travel to workplace: Bicycle",
                "type": "int64"
            },
            {
                "name": "Method of travel to workplace: On foot",
                "type": "int64"
            },
            {
                "name": "Method of travel to workplace: Other method of travel to work",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS062",
        "description": "NS-SeC",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts062.zip",
        "files": [
            "census2021-ts062-ctry.csv",
            "census2021-ts062-lsoa.csv",
            "census2021-ts062-ltla.csv",
            "census2021-ts062-msoa.csv",
            "census2021-ts062-oa.csv",
            "census2021-ts062-rgn.csv",
            "census2021-ts062-utla.csv",
            "metadata/ts062-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "National Statistics Socio-economic Classification (NS-SEC): Total: All usual residents aged 16 years and over",
                "type": "int64"
            },
            {
                "name": "National Statistics Socio-economic Classification (NS-SEC): L1, L2 and L3 Higher managerial, administrative and professional occupations",
                "type": "int64"
            },
            {
                "name": "National Statistics Socio-economic Classification (NS-SEC): L4, L5 and L6 Lower managerial, administrative and professional occupations",
                "type": "int64"
            },
            {
                "name": "National Statistics Socio-economic Classification (NS-SEC): L7 Intermediate occupations",
                "type": "int64"
            },
            {
                "name": "National Statistics Socio-economic Classification (NS-SEC): L8 and L9 Small employers and own account workers",
                "type": "int64"
            },
            {
                "name": "National Statistics Socio-economic Classification (NS-SEC): L10 and L11 Lower supervisory and technical occupations",
                "type": "int64"
            },
            {
                "name": "National Statistics Socio-economic Classification (NS-SEC): L12 Semi-routine occupations",
                "type": "int64"
            },
            {
                "name": "National Statistics Socio-economic Classification (NS-SEC): L13 Routine occupations",
                "type": "int64"
            },
            {
                "name": "National Statistics Socio-economic Classification (NS-SEC): L14.1 and L14.2 Never worked and long-term unemployed",
                "type": "int64"
            },
            {
                "name": "National Statistics Socio-economic Classification (NS-SEC): L15 Full-time students",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS063",
        "description": "Occupation",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts063.zip",
        "files": [
            "census2021-ts063-ctry.csv",
            "census2021-ts063-lsoa.csv",
            "census2021-ts063-ltla.csv",
            "census2021-ts063-msoa.csv",
            "census2021-ts063-oa.csv",
            "census2021-ts063-rgn.csv",
            "census2021-ts063-utla.csv",
            "metadata/ts063-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Occupation (current): Total: All usual residents aged 16 years and over in employment the week before the census",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 1. Managers, directors and senior officials",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 2. Professional occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 3. Associate professional and technical occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 4. Administrative and secretarial occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 5. Skilled trades occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 6. Caring, leisure and other service occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 7. Sales and customer service occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 8. Process, plant and machine operatives",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 9. Elementary occupations",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS064",
        "description": "Occupation - minor groups",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts064.zip",
        "files": [
            "census2021-ts064-ctry.csv",
            "census2021-ts064-ltla.csv",
            "census2021-ts064-msoa.csv",
            "census2021-ts064-rgn.csv",
            "census2021-ts064-utla.csv",
            "metadata/ts064-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Occupation (current): Total: All usual residents aged 16 years and over in employment the week before the census",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 111 Chief Executives and Senior Officials",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 112 Production Managers and Directors",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 113 Functional Managers and Directors",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 114 Directors in Logistics, Warehousing and Transport",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 115 Managers and Directors in Retail and Wholesale",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 116 Senior Officers in Protective Services",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 117 Health and Social Services Managers and Directors",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 121 Managers and Proprietors in Agriculture Related Services",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 122 Managers and Proprietors in Hospitality and Leisure Services",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 123 Managers and Proprietors in Health and Care Services",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 124 Managers in Logistics, Warehousing and Transport",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 125 Managers and Proprietors in Other Services",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 211 Natural and Social Science Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 212 Engineering Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 213 Information Technology Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 214 Web and Multimedia Design Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 215 Conservation and Environment Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 216 Research and Development (R&D) and Other Research Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 221 Medical Practitioners",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 222 Therapy Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 223 Nursing and Midwifery Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 224 Veterinarians",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 225 Other Health Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 231 Teaching and other Educational Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 232 Other Educational Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 241 Legal Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 242 Finance Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 243 Business, Research and Administrative Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 244 Business and Financial Project Management Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 245 Architects, Chartered Architectural Technologists, Planning Officers, Surveyors and Construction Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 246 Welfare Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 247 Librarians and Related Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 248 Quality and Regulatory Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 249 Media Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 311 Science, Engineering and Production Technicians",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 312 CAD, Drawing and Architectural Technicians",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 313 Information Technology Technicians",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 321 Health Associate Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 322 Welfare and Housing Associate Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 323 Teaching and Childcare Associate Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 324 Veterinary nurses",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 331 Protective Service Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 341 Artistic, Literary and Media Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 342 Design Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 343 Sports and Fitness Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 351 Transport Associate Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 352 Legal Associate Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 353 Finance Associate Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 354 Business Associate Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 355 Sales, Marketing and Related Associate Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 356 Public Services Associate Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 357 HR, Training and Other Vocational Associate Guidance Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 358 Regulatory Associate Professionals",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 411 Administrative Occupations: Government and Related Organisations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 412 Administrative Occupations: Finance",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 413 Administrative Occupations: Records",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 414 Administrative Occupations: Office Managers and Supervisors",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 415 Other Administrative Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 421 Secretarial and Related Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 511 Agricultural and Related Trades",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 521 Metal Forming, Welding and Related Trades",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 522 Metal Machining, Fitting and Instrument Making Trades",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 523 Vehicle Trades",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 524 Electrical and Electronic Trades",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 525 Skilled Metal, Electrical and Electronic Trades Supervisors",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 531 Construction and Building Trades",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 532 Building Finishing Trades",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 533 Construction and Building Trades Supervisors",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 541 Textiles and Garments Trades",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 542 Printing Trades",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 543 Food Preparation and Hospitality Trades",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 544 Other Skilled Trades",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 611 Teaching and Childcare Support Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 612 Animal Care and Control Services",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 613 Caring Personal Services",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 621 Leisure and Travel Services",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 622 Hairdressers and Related Services",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 623 Housekeeping and Related Services",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 624 Cleaning and Housekeeping Managers and Supervisors",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 625 Bed and Breakfast and Guest House Owners and Proprietors",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 631 Community and Civil Enforcement Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 711 Sales Assistants and Retail Cashiers",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 712 Sales Related Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 713 Shopkeepers and Sales Supervisors",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 721 Customer Service Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 722 Customer Service Supervisors",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 811 Process Operatives",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 812 Metal Working Machine Operatives",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 813 Plant and Machine Operatives",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 814 Assemblers and Routine Operatives",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 815 Construction Operatives",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 816 Production, Factory and Assembly Supervisors",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 821 Road Transport Drivers",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 822 Mobile Machine Drivers and Operatives",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 823 Other Drivers and Transport Operatives",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 911 Elementary Agricultural Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 912 Elementary Construction Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 913 Elementary Process Plant Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 921 Elementary Administration Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 922 Elementary Cleaning Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 923 Elementary Security Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 924 Elementary Sales Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 925 Elementary Storage Occupations",
                "type": "int64"
            },
            {
                "name": "Occupation (current): 926 Other Elementary Services Occupations",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS065",
        "description": "Employment history",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts065.zip",
        "files": [
            "census2021-ts065-ctry.csv",
            "census2021-ts065-lsoa.csv",
            "census2021-ts065-ltla.csv",
            "census2021-ts065-msoa.csv",
            "census2021-ts065-oa.csv",
            "census2021-ts065-rgn.csv",
            "census2021-ts065-utla.csv",
            "metadata/ts065-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Unemployment history: Total: All usual residents aged 16 years and over not in employment the week before the census",
                "type": "int64"
            },
            {
                "name": "Unemployment history: Not in employment: Worked in the last 12 months",
                "type": "int64"
            },
            {
                "name": "Unemployment history: Not in employment: Not worked in the last 12 months",
                "type": "int64"
            },
            {
                "name": "Unemployment history: Not in employment: Never worked",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS066",
        "description": "Economic activity status",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts066.zip",
        "files": [
            "census2021-ts066-ctry.csv",
            "census2021-ts066-lsoa.csv",
            "census2021-ts066-ltla.csv",
            "census2021-ts066-msoa.csv",
            "census2021-ts066-oa.csv",
            "census2021-ts066-rgn.csv",
            "census2021-ts066-utla.csv",
            "metadata/ts066-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Economic activity status: Total: All usual residents aged 16 years and over",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active (excluding full-time students)",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active (excluding full-time students):In employment",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active (excluding full-time students):In employment:Employee",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active (excluding full-time students): In employment: Employee: Part-time",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active (excluding full-time students): In employment: Employee: Full-time",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active (excluding full-time students):In employment:Self-employed with employees",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active (excluding full-time students): In employment: Self-employed with employees: Part-time",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active (excluding full-time students): In employment: Self-employed with employees: Full-time",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active (excluding full-time students):In employment:Self-employed without employees",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active (excluding full-time students): In employment: Self-employed without employees: Part-time",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active (excluding full-time students): In employment: Self-employed without employees: Full-time",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active (excluding full-time students): Unemployed",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active and a full-time student",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active and a full-time student:In employment",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active and a full-time student:In employment:Employee",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active and a full-time student: In employment: Employee: Part-time",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active and a full-time student: In employment: Employee: Full-time",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active and a full-time student:In employment:Self-employed with employees",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active and a full-time student: In employment: Self-employed with employees: Part-time",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active and a full-time student: In employment: Self-employed with employees: Full-time",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active and a full-time student:In employment:Self-employed without employees",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active and a full-time student: In employment: Self-employed without employees: Part-time",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active and a full-time student: In employment: Self-employed without employees: Full-time",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically active and a full-time student: Unemployed",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically inactive",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically inactive: Retired",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically inactive: Student",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically inactive: Looking after home or family",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically inactive: Long-term sick or disabled",
                "type": "int64"
            },
            {
                "name": "Economic activity status: Economically inactive: Other",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS067",
        "description": "Highest level of qualification",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts067.zip",
        "files": [
            "census2021-ts067-ctry.csv",
            "census2021-ts067-lsoa.csv",
            "census2021-ts067-ltla.csv",
            "census2021-ts067-msoa.csv",
            "census2021-ts067-oa.csv",
            "census2021-ts067-rgn.csv",
            "census2021-ts067-utla.csv",
            "metadata/ts067-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Highest level of qualification: Total: All usual residents aged 16 years and over",
                "type": "int64"
            },
            {
                "name": "Highest level of qualification: No qualifications",
                "type": "int64"
            },
            {
                "name": "Highest level of qualification: Level 1 and entry level qualifications",
                "type": "int64"
            },
            {
                "name": "Highest level of qualification: Level 2 qualifications",
                "type": "int64"
            },
            {
                "name": "Highest level of qualification: Apprenticeship",
                "type": "int64"
            },
            {
                "name": "Highest level of qualification: Level 3 qualifications",
                "type": "int64"
            },
            {
                "name": "Highest level of qualification: Level 4 qualifications and above",
                "type": "int64"
            },
            {
                "name": "Highest level of qualification: Other qualifications",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS068",
        "description": "Schoolchildren and full-time students",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts068.zip",
        "files": [
            "census2021-ts068-ctry.csv",
            "census2021-ts068-lsoa.csv",
            "census2021-ts068-ltla.csv",
            "census2021-ts068-msoa.csv",
            "census2021-ts068-oa.csv",
            "census2021-ts068-rgn.csv",
            "census2021-ts068-utla.csv",
            "metadata/ts068-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Schoolchild or full-time student indicator: Total: All usual residents aged 5 years and over",
                "type": "int64"
            },
            {
                "name": "Schoolchild or full-time student indicator: Student",
                "type": "int64"
            },
            {
                "name": "Schoolchild or full-time student indicator: Not a student",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS070",
        "description": "Gender identity (detailed)",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts070.zip",
        "files": [
            "census2021-ts070-ctry.csv",
            "census2021-ts070-ltla.csv",
            "census2021-ts070-rgn.csv",
            "census2021-ts070-utla.csv",
            "metadata/ts070-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Gender identity: Total: All usual residents aged 16 years and over",
                "type": "int64"
            },
            {
                "name": "Gender identity: Gender identity the same as sex registered at birth",
                "type": "int64"
            },
            {
                "name": "Gender identity: Gender identity different from sex registered at birth but no specific identity given",
                "type": "int64"
            },
            {
                "name": "Gender identity: Trans woman",
                "type": "int64"
            },
            {
                "name": "Gender identity: Trans man",
                "type": "int64"
            },
            {
                "name": "Gender identity: Non-binary",
                "type": "int64"
            },
            {
                "name": "Gender identity: All other gender identities",
                "type": "int64"
            },
            {
                "name": "Gender identity: Not answered",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS071",
        "description": "Previously served in the UK armed forces",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts071.zip",
        "files": [
            "census2021-ts071-ctry.csv",
            "census2021-ts071-ltla.csv",
            "census2021-ts071-msoa.csv",
            "census2021-ts071-rgn.csv",
            "census2021-ts071-utla.csv",
            "metadata/ts071-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "UK armed forces veteran indicator: Total: All usual residents",
                "type": "int64"
            },
            {
                "name": "UK armed forces veteran indicator: Previously served in UK armed forces",
                "type": "int64"
            },
            {
                "name": "UK armed forces veteran indicator: Previously served in UK reserve armed forces",
                "type": "int64"
            },
            {
                "name": "UK armed forces veteran indicator: Previously served in both regular and reserve UK armed forces",
                "type": "int64"
            },
            {
                "name": "UK armed forces veteran indicator: Has not previously served in any UK armed forces",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS072",
        "description": "Number of people in household who have previously served in UK armed forces",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts072.zip",
        "files": [
            "census2021-ts072-ctry.csv",
            "census2021-ts072-ltla.csv",
            "census2021-ts072-msoa.csv",
            "census2021-ts072-rgn.csv",
            "census2021-ts072-utla.csv",
            "metadata/ts072-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Number of people in household who previously served in UK armed forces: Total: All households",
                "type": "int64"
            },
            {
                "name": "Number of people in household who previously served in UK armed forces: No people in the household previously served in UK armed forces",
                "type": "int64"
            },
            {
                "name": "Number of people in household who previously served in UK armed forces: 1 person in the household previously served in UK armed forces",
                "type": "int64"
            },
            {
                "name": "Number of people in household who previously served in UK armed forces: 2 people in the household previously served in UK armed forces",
                "type": "int64"
            },
            {
                "name": "Number of people in household who previously served in UK armed forces: 3 or more people in the household previously served in UK armed forces",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS073",
        "description": "Population who have previously served in UK armed forces in communal establishments and in households",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts073.zip",
        "files": [
            "census2021-ts073-ctry.csv",
            "census2021-ts073-ltla.csv",
            "census2021-ts073-msoa.csv",
            "census2021-ts073-rgn.csv",
            "census2021-ts073-utla.csv",
            "metadata/ts073-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Residence type: Total",
                "type": "int64"
            },
            {
                "name": "Residence type: Lives in a household",
                "type": "int64"
            },
            {
                "name": "Residence type: Lives in a communal establishment",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS074",
        "description": "Household Reference Person indicator of previous service in UK armed forces",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts074.zip",
        "files": [
            "census2021-ts074-ctry.csv",
            "census2021-ts074-ltla.csv",
            "census2021-ts074-msoa.csv",
            "census2021-ts074-rgn.csv",
            "census2021-ts074-utla.csv",
            "metadata/ts074-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Household reference person previously served in UK armed forces: Total: All households",
                "type": "int64"
            },
            {
                "name": "Household reference person previously served in UK armed forces: Household reference person previously served in regular UK armed forces",
                "type": "int64"
            },
            {
                "name": "Household reference person previously served in UK armed forces: Household reference person previously served in reserve UK armed forces",
                "type": "int64"
            },
            {
                "name": "Household reference person previously served in UK armed forces: Household reference person previously served in both regular and reserve UK armed forces",
                "type": "int64"
            },
            {
                "name": "Household reference person previously served in UK armed forces: Household reference person has not previously served in regular or reserve UK armed forces",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS075",
        "description": "Multi religion households",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts075.zip",
        "files": [
            "census2021-ts075-ctry.csv",
            "census2021-ts075-lsoa.csv",
            "census2021-ts075-ltla.csv",
            "census2021-ts075-msoa.csv",
            "census2021-ts075-oa.csv",
            "census2021-ts075-rgn.csv",
            "census2021-ts075-utla.csv",
            "metadata/ts075-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Multi religion household: Total",
                "type": "int64"
            },
            {
                "name": "Multi religion household: One-person household",
                "type": "int64"
            },
            {
                "name": "Multi religion household: Multi-person household: No people stated their religion",
                "type": "int64"
            },
            {
                "name": "Multi religion household: Multi-person household: Same religion (at least one person has stated a religion but the household may include people who did not state their religion)",
                "type": "int64"
            },
            {
                "name": "Multi religion household: Multi-person household: No religion (household may include people who did not state their religion)",
                "type": "int64"
            },
            {
                "name": "Multi religion household: Multi-person household: Same religion and no religion (household may include people who did not state their religion)",
                "type": "int64"
            },
            {
                "name": "Multi religion household: Multi-person household: At least two different religions stated (household may include people with no religion and who did not state their religion)",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS076",
        "description": "Welsh language skills (speaking) by single year of age",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts076.zip",
        "files": [
            "census2021-ts076-ctry.csv",
            "census2021-ts076-ltla.csv",
            "census2021-ts076-rgn.csv",
            "census2021-ts076-utla.csv",
            "metadata/ts076-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Total: All usual residents aged 3 years and over",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged under 1 year",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 1 year",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 2 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 3 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 4 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 5 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 6 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 7 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 8 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 9 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 10 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 11 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 12 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 13 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 14 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 15 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 16 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 17 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 18 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 19 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 20 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 21 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 22 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 23 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 24 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 25 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 26 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 27 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 28 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 29 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 30 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 31 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 32 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 33 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 34 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 35 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 36 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 37 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 38 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 39 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 40 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 41 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 42 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 43 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 44 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 45 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 46 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 47 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 48 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 49 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 50 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 51 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 52 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 53 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 54 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 55 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 56 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 57 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 58 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 59 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 60 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 61 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 62 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 63 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 64 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 65 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 66 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 67 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 68 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 69 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 70 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 71 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 72 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 73 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 74 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 75 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 76 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 77 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 78 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 79 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 80 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 81 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 82 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 83 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 84 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Total: All usual residents aged 3 years and over; Age: Aged 85 years and over",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Total: All usual residents aged 3 years and over",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged under 1 year",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 1 year",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 2 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 3 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 4 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 5 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 6 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 7 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 8 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 9 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 10 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 11 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 12 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 13 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 14 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 15 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 16 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 17 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 18 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 19 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 20 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 21 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 22 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 23 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 24 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 25 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 26 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 27 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 28 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 29 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 30 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 31 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 32 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 33 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 34 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 35 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 36 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 37 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 38 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 39 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 40 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 41 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 42 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 43 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 44 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 45 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 46 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 47 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 48 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 49 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 50 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 51 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 52 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 53 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 54 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 55 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 56 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 57 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 58 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 59 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 60 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 61 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 62 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 63 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 64 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 65 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 66 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 67 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 68 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 69 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 70 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 71 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 72 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 73 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 74 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 75 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 76 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 77 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 78 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 79 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 80 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 81 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 82 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 83 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 84 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Cannot speak Welsh; Age: Aged 85 years and over",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Total: All usual residents aged 3 years and over",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged under 1 year",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 1 year",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 2 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 3 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 4 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 5 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 6 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 7 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 8 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 9 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 10 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 11 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 12 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 13 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 14 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 15 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 16 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 17 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 18 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 19 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 20 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 21 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 22 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 23 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 24 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 25 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 26 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 27 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 28 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 29 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 30 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 31 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 32 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 33 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 34 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 35 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 36 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 37 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 38 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 39 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 40 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 41 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 42 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 43 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 44 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 45 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 46 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 47 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 48 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 49 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 50 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 51 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 52 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 53 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 54 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 55 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 56 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 57 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 58 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 59 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 60 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 61 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 62 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 63 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 64 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 65 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 66 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 67 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 68 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 69 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 70 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 71 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 72 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 73 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 74 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 75 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 76 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 77 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 78 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 79 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 80 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 81 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 82 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 83 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 84 years",
                "type": "int64"
            },
            {
                "name": "Welsh speaking ability: Can speak Welsh; Age: Aged 85 years and over",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS077",
        "description": "Sexual orientation",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts077.zip",
        "files": [
            "census2021-ts077-ctry.csv",
            "census2021-ts077-ltla.csv",
            "census2021-ts077-msoa.csv",
            "census2021-ts077-rgn.csv",
            "census2021-ts077-utla.csv",
            "metadata/ts077-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Sexual orientation: Total: All usual residents aged 16 years and over",
                "type": "int64"
            },
            {
                "name": "Sexual orientation: Straight or Heterosexual",
                "type": "int64"
            },
            {
                "name": "Sexual orientation: Gay or Lesbian",
                "type": "int64"
            },
            {
                "name": "Sexual orientation: Bisexual",
                "type": "int64"
            },
            {
                "name": "Sexual orientation: All other sexual orientations",
                "type": "int64"
            },
            {
                "name": "Sexual orientation: Not answered",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS078",
        "description": "Gender identity",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts078.zip",
        "files": [
            "census2021-ts078-ctry.csv",
            "census2021-ts078-ltla.csv",
            "census2021-ts078-msoa.csv",
            "census2021-ts078-rgn.csv",
            "census2021-ts078-utla.csv",
            "metadata/ts078-2021-1.txt"
        ],
        "data_types": [
            {
                "name": "date",
                "type": "int64"
            },
            {
                "name": "geography",
                "type": "object"
            },
            {
                "name": "geography code",
                "type": "object"
            },
            {
                "name": "Gender identity: Total: All usual residents aged 16 years and over",
                "type": "int64"
            },
            {
                "name": "Gender identity: Gender identity the same as sex registered at birth",
                "type": "int64"
            },
            {
                "name": "Gender identity: Gender identity different from sex registered at birth but no specific identity given",
                "type": "int64"
            },
            {
                "name": "Gender identity: Trans woman",
                "type": "int64"
            },
            {
                "name": "Gender identity: Trans man",
                "type": "int64"
            },
            {
                "name": "Gender identity: All other gender identities",
                "type": "int64"
            },
            {
                "name": "Gender identity: Not answered",
                "type": "int64"
            }
        ]
    },
    {
        "filename": "TS079",
        "description": "Sexual orientation (detailed)",
        "year": 2021,
        "file": "https://www.nomisweb.co.uk/output/census/2021/census2021-ts079.zip",
        "files": []
    }
];

        // Populate dropdowns on page load
 // Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const filenameSelect = document.getElementById('filenameSelect');
    const descriptionSelect = document.getElementById('descriptionSelect');
    const dataDisplay = document.getElementById('dataDisplay');
    
    // Populate dropdowns
    censusData.forEach(item => {
        // Add filename option
        const filenameOption = document.createElement('option');
        filenameOption.value = item.filename;
        filenameOption.textContent = item.filename;
        filenameSelect.appendChild(filenameOption);
        
        // Add description option
        const descOption = document.createElement('option');
        descOption.value = item.filename;
        descOption.textContent = item.description;
        descriptionSelect.appendChild(descOption);
    });
    
    // Handle filename selection change
    filenameSelect.addEventListener('change', function() {
        const selectedFilename = this.value;
        if (selectedFilename) {
            // Update description dropdown to match
            descriptionSelect.value = selectedFilename;
            displayData(selectedFilename);
        } else {
            dataDisplay.style.display = 'none';
        }
    });
    
    // Handle description selection change
    descriptionSelect.addEventListener('change', function() {
        const selectedFilename = this.value;
        if (selectedFilename) {
            // Update filename dropdown to match
            filenameSelect.value = selectedFilename;
            displayData(selectedFilename);
        } else {
            dataDisplay.style.display = 'none';
        }
    });
});

// Display the selected data
function displayData(filename) {
    const selectedItem = censusData.find(item => item.filename === filename);
    if (!selectedItem) return;
    
    // Display basic info
    document.getElementById('selectedFilename').textContent = selectedItem.filename;
    document.getElementById('selectedDescription').textContent = selectedItem.description;
    document.getElementById('selectedYear').textContent = selectedItem.year;
    const fileLink = document.getElementById('fileLink');
    fileLink.href = selectedItem.file;
    fileLink.textContent = selectedItem.file;
    
    // Display files list
    const filesList = document.getElementById('filesList');
    filesList.innerHTML = ''; // Clear existing items
    selectedItem.files.forEach(file => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = file;
        filesList.appendChild(li);
    });
    
    // Display data types table
    const dataTypesTable = document.querySelector('#dataTypesTable tbody');
    dataTypesTable.innerHTML = ''; // Clear existing rows
    selectedItem.data_types.forEach(dataType => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${dataType.name}</td>
            <td>${dataType.type}</td>
        `;
        dataTypesTable.appendChild(row);
    });
    
    // Show the data container
    document.getElementById('dataDisplay').style.display = 'block';
}