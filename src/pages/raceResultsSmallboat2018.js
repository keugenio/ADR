const raceResults = [
  {
    "Overall": 55,
    "Division": "3/4",
    "Name": "Al Sadanaga",
    "Number": 213,
    "Age": "50+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:42:45.27"
  },
  {
    "Overall": 112,
    "Division": "4/8",
    "Name": "Alisa Parry",
    "Number": 39,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 14'",
    "Time": "02:07:40.69"
  },
  {
    "Overall": 11,
    "Division": "4/13",
    "Name": "Andrew Berner",
    "Number": 116,
    "Age": "Open",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:28:10.59"
  },
  {
    "Overall": 127,
    "Division": "4/9",
    "Name": "Anita Nightingale",
    "Number": 5,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 12'6''",
    "Time": "02:18:02.57"
  },
  {
    "Overall": 53,
    "Division": "2/2",
    "Name": "Anne Ketterman, Dan Ketterman",
    "Number": 125,
    "Age": "Open",
    "Gender": "all",
    "Category": "Hobie Pedal Craft Double",
    "Time": "01:42:23.28"
  },
  {
    "Overall": 47,
    "Division": "3/9",
    "Name": "Anne Cook",
    "Number": 225,
    "Age": "Open",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "01:40:18.35"
  },
  {
    "Overall": 122,
    "Division": "3/9",
    "Name": "Anne DeConinck",
    "Number": 135,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 12'6''",
    "Time": "02:15:33.14"
  },
  {
    "Overall": 123,
    "Division": "1/3",
    "Name": "Anthony Holland",
    "Number": 44,
    "Age": "Open",
    "Gender": "male",
    "Category": "Prone (All)",
    "Time": "02:16:36.49"
  },
  {
    "Overall": 134,
    "Division": "2/2",
    "Name": "Austen Deveraux",
    "Number": 38,
    "Age": "U16",
    "Gender": "male",
    "Category": "SUP 12'6''",
    "Time": "02:21:23.45"
  },
  {
    "Overall": 40,
    "Division": "2/4",
    "Name": "Bart Wagner",
    "Number": 189,
    "Age": "60+",
    "Gender": "male",
    "Category": "Surfski Single",
    "Time": "01:38:15.53"
  },
  {
    "Overall": 119,
    "Division": "2/5",
    "Name": "BILL WITT",
    "Number": 238,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 12'6''",
    "Time": "02:14:14.53"
  },
  {
    "Overall": 62,
    "Division": "2/10",
    "Name": "Bill McGrath",
    "Number": 98,
    "Age": "50+",
    "Gender": "male",
    "Category": "SUP Under 14'",
    "Time": "01:44:30.89"
  },
  {
    "Overall": 115,
    "Division": "12/16",
    "Name": "bob long",
    "Number": 231,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "02:10:35.61"
  },
  {
    "Overall": 23,
    "Division": "7/13",
    "Name": "Brandon Yip",
    "Number": 42,
    "Age": "Open",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:33:16.16"
  },
  {
    "Overall": 108,
    "Division": "11/16",
    "Name": "Brent Buccola",
    "Number": 153,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "02:05:28.41"
  },
  {
    "Overall": 68,
    "Division": "6/9",
    "Name": "Brittany Crail",
    "Number": 199,
    "Age": "Open",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "01:46:24.47"
  },
  {
    "Overall": 13,
    "Division": "1/6",
    "Name": "Carol Canning, Garth Canning",
    "Number": 191,
    "Age": "50+",
    "Gender": "mixed",
    "Category": "OC-2",
    "Time": "01:28:45.29"
  },
  {
    "Overall": 91,
    "Division": "5/7",
    "Name": "Carolyn Earley",
    "Number": 123,
    "Age": "60+",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "01:55:13.97"
  },
  {
    "Overall": 26,
    "Division": "1/2",
    "Name": "Cecilia Ng, Margaret Coulombe",
    "Number": 11,
    "Age": "Open",
    "Gender": "female",
    "Category": "OC-2",
    "Time": "01:34:09.84"
  },
  {
    "Overall": 93,
    "Division": "1/5",
    "Name": "Chad Carter",
    "Number": 177,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 12'6''",
    "Time": "01:56:52.71"
  },
  {
    "Overall": 121,
    "Division": "3/5",
    "Name": "Chadley Munro",
    "Number": 66,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 12'6''",
    "Time": "02:14:42.66"
  },
  {
    "Overall": 103,
    "Division": "8/16",
    "Name": "Chris Concannon",
    "Number": 194,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "02:02:01.53"
  },
  {
    "Overall": 92,
    "Division": "5/16",
    "Name": "Chris Smith",
    "Number": 64,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "01:55:47.37"
  },
  {
    "Overall": 86,
    "Division": "4/5",
    "Name": "chrissy thompson, Rick Kihara",
    "Number": 75,
    "Age": "Open",
    "Gender": "mixed",
    "Category": "OC-2",
    "Time": "01:54:00.15"
  },
  {
    "Overall": 151,
    "Division": "2/2",
    "Name": "Christie Bonner",
    "Number": 63,
    "Age": "60+",
    "Gender": "female",
    "Category": "SUP Under 14'",
    "Time": "02:43:55.11"
  },
  {
    "Overall": 153,
    "Division": "8/9",
    "Name": "Christine Drazil",
    "Number": 180,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 12'6''",
    "Time": "02:47:11.47"
  },
  {
    "Overall": 106,
    "Division": "10/16",
    "Name": "Corey Carlin",
    "Number": 172,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "02:04:47.42"
  },
  {
    "Overall": 37,
    "Division": "1/16",
    "Name": "Court Fetter",
    "Number": 32,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "01:38:06.19"
  },
  {
    "Overall": 57,
    "Division": "1/4",
    "Name": "Dale Marnati",
    "Number": 155,
    "Age": "60+",
    "Gender": "male",
    "Category": "SUP Under 14'",
    "Time": "01:43:15.55"
  },
  {
    "Overall": 90,
    "Division": "9/10",
    "Name": "Dave Anderson",
    "Number": 215,
    "Age": "50+",
    "Gender": "male",
    "Category": "SUP Under 14'",
    "Time": "01:55:00.16"
  },
  {
    "Overall": 131,
    "Division": "1/1",
    "Name": "David Heinz",
    "Number": 169,
    "Age": "U16",
    "Gender": "female",
    "Category": "SUP 14'",
    "Time": "02:19:43.89"
  },
  {
    "Overall": 67,
    "Division": "3/7",
    "Name": "Debbie Hyde",
    "Number": 25,
    "Age": "60+",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "01:46:07.31"
  },
  {
    "Overall": 141,
    "Division": "6/7",
    "Name": "Di Dootson Rose",
    "Number": 4,
    "Age": "60+",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "02:24:53.67"
  },
  {
    "Overall": 104,
    "Division": "3/8",
    "Name": "Diana Durham Eugenio",
    "Number": 35,
    "Age": "50+",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "02:02:50.33"
  },
  {
    "Overall": 78,
    "Division": "7/10",
    "Name": "dwayne bora",
    "Number": 232,
    "Age": "50+",
    "Gender": "male",
    "Category": "SUP Under 14'",
    "Time": "01:51:02.27"
  },
  {
    "Overall": 51,
    "Division": "11/13",
    "Name": "Efrain Becerra",
    "Number": 65,
    "Age": "Open",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:42:15.82"
  },
  {
    "Overall": 7,
    "Division": "2/3",
    "Name": "Fred Schiess",
    "Number": 54,
    "Age": "50+",
    "Gender": "male",
    "Category": "Surfski Single",
    "Time": "01:26:29.72"
  },
  {
    "Overall": 85,
    "Division": "14/16",
    "Name": "Frederick Case",
    "Number": 187,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:53:47.84"
  },
  {
    "Overall": 145,
    "Division": "4/5",
    "Name": "FROST CHRIS",
    "Number": 239,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 12'6''",
    "Time": "02:29:31.94"
  },
  {
    "Overall": 102,
    "Division": "7/16",
    "Name": "Grant Cooper",
    "Number": 145,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "02:01:29.17"
  },
  {
    "Overall": 84,
    "Division": "2/4",
    "Name": "Grant Heinz",
    "Number": 168,
    "Age": "60+",
    "Gender": "male",
    "Category": "SUP Under 14'",
    "Time": "01:52:44.33"
  },
  {
    "Overall": 98,
    "Division": "10/10",
    "Name": "Guy Dano",
    "Number": 47,
    "Age": "50+",
    "Gender": "male",
    "Category": "SUP Under 14'",
    "Time": "01:58:25.24"
  },
  {
    "Overall": 144,
    "Division": "6/9",
    "Name": "Havy Lanier",
    "Number": 188,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 12'6''",
    "Time": "02:26:59.88"
  },
  {
    "Overall": 147,
    "Division": "2/3",
    "Name": "Heather Barnes",
    "Number": 127,
    "Age": "Open",
    "Gender": "female",
    "Category": "Kayak",
    "Time": "02:38:32.93"
  },
  {
    "Overall": 94,
    "Division": "1/2",
    "Name": "Heidi Stone",
    "Number": 186,
    "Age": "60+",
    "Gender": "female",
    "Category": "SUP Under 14'",
    "Time": "01:57:08.01"
  },
  {
    "Overall": 138,
    "Division": "15/16",
    "Name": "Ian Heinz",
    "Number": 233,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "02:22:17.06"
  },
  {
    "Overall": 96,
    "Division": "12/13",
    "Name": "James Crook",
    "Number": 115,
    "Age": "Open",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:57:43.41"
  },
  {
    "Overall": 39,
    "Division": "2/4",
    "Name": "James Rojas",
    "Number": 1,
    "Age": "50+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:38:14.07"
  },
  {
    "Overall": 117,
    "Division": "13/13",
    "Name": "Jeff Archer",
    "Number": 178,
    "Age": "Open",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "02:13:08.20"
  },
  {
    "Overall": 25,
    "Division": "3/4",
    "Name": "Jeff Kay",
    "Number": 46,
    "Age": "Open",
    "Gender": "male",
    "Category": "Surfski Single",
    "Time": "01:34:00.76"
  },
  {
    "Overall": 42,
    "Division": "9/13",
    "Name": "Jeff Mendoza",
    "Number": 55,
    "Age": "Open",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:39:23.12"
  },
  {
    "Overall": 142,
    "Division": "8/9",
    "Name": "Jennifer Johnson",
    "Number": 226,
    "Age": "Open",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "02:25:28.34"
  },
  {
    "Overall": 71,
    "Division": "6/6",
    "Name": "Jill Archer, Victor Archer",
    "Number": 34,
    "Age": "50+",
    "Gender": "mixed",
    "Category": "OC-2",
    "Time": "01:47:46.34"
  },
  {
    "Overall": 21,
    "Division": "2/16",
    "Name": "Jim Groark",
    "Number": 185,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:31:43.66"
  },
  {
    "Overall": 14,
    "Division": "1/3",
    "Name": "Jody Conners",
    "Number": 229,
    "Age": "50+",
    "Gender": "female",
    "Category": "Surfski Single",
    "Time": "01:30:02.46"
  },
  {
    "Overall": 137,
    "Division": "2/4",
    "Name": "Joe LaMantia III",
    "Number": 181,
    "Age": "Open",
    "Gender": "male",
    "Category": "Recreational",
    "Time": "02:22:15.12"
  },
  {
    "Overall": 4,
    "Division": "1/13",
    "Name": "John Acosta IV",
    "Number": 207,
    "Age": "Open",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:24:48.03"
  },
  {
    "Overall": 124,
    "Division": "1/2",
    "Name": "John Croteau",
    "Number": 14,
    "Age": "Open",
    "Gender": "all",
    "Category": "Hobie Pedal Craft",
    "Time": "02:16:42.23"
  },
  {
    "Overall": 120,
    "Division": "14/16",
    "Name": "john knippers",
    "Number": 236,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "02:14:30.22"
  },
  {
    "Overall": 74,
    "Division": "3/4",
    "Name": "john taylor",
    "Number": 103,
    "Age": "60+",
    "Gender": "male",
    "Category": "Surfski Single",
    "Time": "01:49:33.48"
  },
  {
    "Overall": 88,
    "Division": "3/4",
    "Name": "John Tyler",
    "Number": 70,
    "Age": "60+",
    "Gender": "male",
    "Category": "SUP Under 14'",
    "Time": "01:54:31.79"
  },
  {
    "Overall": 130,
    "Division": "15/16",
    "Name": "Jon Wild",
    "Number": 216,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "02:19:30.84"
  },
  {
    "Overall": 81,
    "Division": "4/16",
    "Name": "Juerg Geser",
    "Number": 156,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "01:51:29.76"
  },
  {
    "Overall": 65,
    "Division": "1/1",
    "Name": "kanita coyle, Mary Bisson",
    "Number": 52,
    "Age": "50+",
    "Gender": "female",
    "Category": "OC-2",
    "Time": "01:45:31.50"
  },
  {
    "Overall": 125,
    "Division": "3/5",
    "Name": "karen ward",
    "Number": 121,
    "Age": "50+",
    "Gender": "female",
    "Category": "SUP Under 14'",
    "Time": "02:17:00.28"
  },
  {
    "Overall": 152,
    "Division": "7/9",
    "Name": "Kat Duplisea",
    "Number": 151,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 12'6''",
    "Time": "02:44:31.78"
  },
  {
    "Overall": 80,
    "Division": "13/16",
    "Name": "Ken Smith",
    "Number": 160,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:51:17.89"
  },
  {
    "Overall": 59,
    "Division": "4/4",
    "Name": "Kerry Thompson",
    "Number": 43,
    "Age": "50+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:44:05.01"
  },
  {
    "Overall": 69,
    "Division": "11/16",
    "Name": "Kimo Miranda",
    "Number": 76,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:46:48.19"
  },
  {
    "Overall": 83,
    "Division": "1/5",
    "Name": "Kristin Thomas",
    "Number": 197,
    "Age": "50+",
    "Gender": "female",
    "Category": "SUP Under 14'",
    "Time": "01:51:57.00"
  },
  {
    "Overall": 27,
    "Division": "3/6",
    "Name": "kui eugenio, Ilona White",
    "Number": 79,
    "Age": "50+",
    "Gender": "mixed",
    "Category": "OC-2",
    "Time": "01:34:14.05"
  },
  {
    "Overall": 50,
    "Division": "1/1",
    "Name": "Lee Payne, Jeanne Holdren",
    "Number": 85,
    "Age": "60+",
    "Gender": "female",
    "Category": "OC-2",
    "Time": "01:41:44.82"
  },
  {
    "Overall": 34,
    "Division": "1/7",
    "Name": "Leslie Cercek",
    "Number": 6,
    "Age": "60+",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "01:37:46.13"
  },
  {
    "Overall": 87,
    "Division": "7/9",
    "Name": "Liz Ingraham",
    "Number": 131,
    "Age": "Open",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "01:54:21.04"
  },
  {
    "Overall": 41,
    "Division": "1/8",
    "Name": "Lucie Wailani",
    "Number": 78,
    "Age": "50+",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "01:38:52.22"
  },
  {
    "Overall": 70,
    "Division": "4/10",
    "Name": "Mace Camhe",
    "Number": 223,
    "Age": "50+",
    "Gender": "male",
    "Category": "SUP Under 14'",
    "Time": "01:46:55.50"
  },
  {
    "Overall": 28,
    "Division": "2/9",
    "Name": "Makenzie Snyder",
    "Number": 202,
    "Age": "Open",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "01:34:22.31"
  },
  {
    "Overall": 22,
    "Division": "3/16",
    "Name": "Marc Lavertu",
    "Number": 210,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:32:32.27"
  },
  {
    "Overall": 48,
    "Division": "4/9",
    "Name": "margaret neiman",
    "Number": 132,
    "Age": "Open",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "01:40:42.05"
  },
  {
    "Overall": 146,
    "Division": "4/4",
    "Name": "Mark Formanek",
    "Number": 91,
    "Age": "Open",
    "Gender": "male",
    "Category": "Recreational",
    "Time": "02:29:33.45"
  },
  {
    "Overall": 128,
    "Division": "7/8",
    "Name": "Melissa Newton",
    "Number": 36,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 14'",
    "Time": "02:18:32.92"
  },
  {
    "Overall": 52,
    "Division": "2/16",
    "Name": "Michael Castro",
    "Number": 200,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "01:42:17.37"
  },
  {
    "Overall": 105,
    "Division": "9/16",
    "Name": "Michael Stevenson",
    "Number": 190,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "02:02:54.93"
  },
  {
    "Overall": 129,
    "Division": "1/3",
    "Name": "MICHELLE KING",
    "Number": 237,
    "Age": "Open",
    "Gender": "female",
    "Category": "Kayak",
    "Time": "02:19:00.91"
  },
  {
    "Overall": 116,
    "Division": "13/16",
    "Name": "Mike La",
    "Number": 41,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "02:12:43.04"
  },
  {
    "Overall": 24,
    "Division": "1/2",
    "Name": "Mike Lichtenwald, Ron Critchley",
    "Number": 10,
    "Age": "Open",
    "Gender": "all",
    "Category": "Hobie Pedal Craft Double",
    "Time": "01:33:37.17"
  },
  {
    "Overall": 54,
    "Division": "9/16",
    "Name": "Mike Mossler",
    "Number": 173,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:42:33.10"
  },
  {
    "Overall": 3,
    "Division": "2/4",
    "Name": "Mike Roberts",
    "Number": 209,
    "Age": "Open",
    "Gender": "male",
    "Category": "Surfski Single",
    "Time": "01:23:53.57"
  },
  {
    "Overall": 97,
    "Division": "4/4",
    "Name": "Milo Hama",
    "Number": 201,
    "Age": "60+",
    "Gender": "male",
    "Category": "SUP Under 14'",
    "Time": "01:57:58.84"
  },
  {
    "Overall": 89,
    "Division": "8/10",
    "Name": "Mundo Juillerat",
    "Number": 203,
    "Age": "50+",
    "Gender": "male",
    "Category": "SUP Under 14'",
    "Time": "01:54:49.83"
  },
  {
    "Overall": 82,
    "Division": "4/7",
    "Name": "Nancy Needham",
    "Number": 30,
    "Age": "60+",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "01:51:48.87"
  },
  {
    "Overall": 8,
    "Division": "3/13",
    "Name": "Nathan Lau",
    "Number": 45,
    "Age": "Open",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:27:27.46"
  },
  {
    "Overall": 38,
    "Division": "1/4",
    "Name": "Nyle Warinner",
    "Number": 58,
    "Age": "60+",
    "Gender": "male",
    "Category": "Surfski Single",
    "Time": "01:38:10.07"
  },
  {
    "Overall": 45,
    "Division": "3/5",
    "Name": "Paul Breckenridge, Alanna Hoyer",
    "Number": 13,
    "Age": "Open",
    "Gender": "mixed",
    "Category": "OC-2",
    "Time": "01:39:46.63"
  },
  {
    "Overall": 63,
    "Division": "3/10",
    "Name": "Paul Parry",
    "Number": 95,
    "Age": "50+",
    "Gender": "male",
    "Category": "SUP Under 14'",
    "Time": "01:45:05.46"
  },
  {
    "Overall": 150,
    "Division": "5/5",
    "Name": "Pete Peralta",
    "Number": 67,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 12'6''",
    "Time": "02:40:36.46"
  },
  {
    "Overall": 77,
    "Division": "3/16",
    "Name": "Raden Baldogo",
    "Number": 51,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "01:50:33.66"
  },
  {
    "Overall": 113,
    "Division": "5/8",
    "Name": "Ramona Hill",
    "Number": 126,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 14'",
    "Time": "02:09:53.43"
  },
  {
    "Overall": 31,
    "Division": "5/16",
    "Name": "Rich Hess",
    "Number": 59,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:35:59.77"
  },
  {
    "Overall": 36,
    "Division": "6/16",
    "Name": "RICHARD Lai Fatt",
    "Number": 182,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:37:52.61"
  },
  {
    "Overall": 35,
    "Division": "1/1",
    "Name": "Robert Bertelli",
    "Number": 148,
    "Age": "U16",
    "Gender": "male",
    "Category": "Kayak",
    "Time": "01:37:49.95"
  },
  {
    "Overall": 43,
    "Division": "10/13",
    "Name": "Robert Hernandez",
    "Number": 96,
    "Age": "Open",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:39:36.58"
  },
  {
    "Overall": 33,
    "Division": "1/4",
    "Name": "Robert Johnson",
    "Number": 80,
    "Age": "50+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:36:20.10"
  },
  {
    "Overall": 56,
    "Division": "5/9",
    "Name": "Robin Jacobsen-Diederich",
    "Number": 211,
    "Age": "Open",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "01:42:59.82"
  },
  {
    "Overall": 126,
    "Division": "2/2",
    "Name": "Romelda Antonio",
    "Number": 206,
    "Age": "Open",
    "Gender": "all",
    "Category": "Hobie Pedal Craft",
    "Time": "02:17:33.63"
  },
  {
    "Overall": 72,
    "Division": "5/10",
    "Name": "Russell Buccola",
    "Number": 134,
    "Age": "50+",
    "Gender": "male",
    "Category": "SUP Under 14'",
    "Time": "01:48:44.10"
  },
  {
    "Overall": 17,
    "Division": "3/3",
    "Name": "Ryan Colloty",
    "Number": 230,
    "Age": "50+",
    "Gender": "male",
    "Category": "Surfski Single",
    "Time": "01:30:35.38"
  },
  {
    "Overall": 32,
    "Division": "8/13",
    "Name": "Ryan Kinnie",
    "Number": 27,
    "Age": "Open",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:36:09.04"
  },
  {
    "Overall": 111,
    "Division": "3/8",
    "Name": "Samantha Eastburn",
    "Number": 204,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 14'",
    "Time": "02:07:26.81"
  },
  {
    "Overall": 9,
    "Division": "1/1",
    "Name": "Sandy Davidson, Richard Davidson",
    "Number": 68,
    "Age": "60+",
    "Gender": "mixed",
    "Category": "OC-2",
    "Time": "01:27:55.45"
  },
  {
    "Overall": 136,
    "Division": "5/9",
    "Name": "Sandy Holtz",
    "Number": 196,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 12'6''",
    "Time": "02:22:08.07"
  },
  {
    "Overall": 101,
    "Division": "2/8",
    "Name": "Sara Smith",
    "Number": 71,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 14'",
    "Time": "02:00:31.93"
  },
  {
    "Overall": 5,
    "Division": "2/13",
    "Name": "Saul dobson",
    "Number": 192,
    "Age": "Open",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:25:40.12"
  },
  {
    "Overall": 2,
    "Division": "1/3",
    "Name": "Scott Diederich",
    "Number": 212,
    "Age": "50+",
    "Gender": "male",
    "Category": "Surfski Single",
    "Time": "01:23:33.64"
  },
  {
    "Overall": 73,
    "Division": "6/10",
    "Name": "Sean Arnold",
    "Number": 224,
    "Age": "50+",
    "Gender": "male",
    "Category": "SUP Under 14'",
    "Time": "01:49:10.57"
  },
  {
    "Overall": 154,
    "Division": "9/9",
    "Name": "SEAY TERRY",
    "Number": 240,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 12'6''",
    "Time": "02:50:11.87"
  },
  {
    "Overall": 64,
    "Division": "1/8",
    "Name": "Shanna Upton",
    "Number": 100,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 14'",
    "Time": "01:45:26.56"
  },
  {
    "Overall": 46,
    "Division": "5/6",
    "Name": "Shawn Tate, Laura Connelly",
    "Number": 129,
    "Age": "50+",
    "Gender": "mixed",
    "Category": "OC-2",
    "Time": "01:39:56.63"
  },
  {
    "Overall": 148,
    "Division": "8/8",
    "Name": "Sheena Frizzell",
    "Number": 140,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 14'",
    "Time": "02:39:30.79"
  },
  {
    "Overall": 10,
    "Division": "1/5",
    "Name": "Shiloe Cagle, Nicolas Oudinot",
    "Number": 205,
    "Age": "Open",
    "Gender": "mixed",
    "Category": "OC-2",
    "Time": "01:28:09.15"
  },
  {
    "Overall": 99,
    "Division": "1/9",
    "Name": "Shonna Litton Brown",
    "Number": 107,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 12'6''",
    "Time": "01:59:16.66"
  },
  {
    "Overall": 60,
    "Division": "2/2",
    "Name": "Stacia Palafox, Amy Hartle",
    "Number": 73,
    "Age": "Open",
    "Gender": "female",
    "Category": "OC-2",
    "Time": "01:44:09.04"
  },
  {
    "Overall": 139,
    "Division": "3/4",
    "Name": "Stan Marks",
    "Number": 90,
    "Age": "Open",
    "Gender": "male",
    "Category": "Recreational",
    "Time": "02:24:19.77"
  },
  {
    "Overall": 19,
    "Division": "2/5",
    "Name": "Stefanie Graves, Clarke Graves",
    "Number": 195,
    "Age": "Open",
    "Gender": "mixed",
    "Category": "OC-2",
    "Time": "01:31:17.80"
  },
  {
    "Overall": 149,
    "Division": "5/5",
    "Name": "Stephanie Dinning",
    "Number": 234,
    "Age": "50+",
    "Gender": "female",
    "Category": "SUP Under 14'",
    "Time": "02:39:52.95"
  },
  {
    "Overall": 44,
    "Division": "7/16",
    "Name": "Steve Perez",
    "Number": 81,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:39:38.93"
  },
  {
    "Overall": 100,
    "Division": "6/16",
    "Name": "steve rady",
    "Number": 149,
    "Age": "Open",
    "Gender": "male",
    "Category": "SUP 14'",
    "Time": "01:59:28.91"
  },
  {
    "Overall": 1,
    "Division": "1/4",
    "Name": "Steyn Visagie",
    "Number": 218,
    "Age": "Open",
    "Gender": "male",
    "Category": "Surfski Single",
    "Time": "01:21:11.55"
  },
  {
    "Overall": 140,
    "Division": "1/1",
    "Name": "Summer VanDelinder",
    "Number": 12,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP Unlimited",
    "Time": "02:24:37.18"
  },
  {
    "Overall": 18,
    "Division": "1/9",
    "Name": "Suzy Strazzulla",
    "Number": 242,
    "Age": "Open",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "01:30:51.34"
  },
  {
    "Overall": 110,
    "Division": "5/8",
    "Name": "Sylvia Johnson",
    "Number": 106,
    "Age": "50+",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "02:07:05.02"
  },
  {
    "Overall": 135,
    "Division": "1/4",
    "Name": "Ted Deveraux",
    "Number": 37,
    "Age": "Open",
    "Gender": "male",
    "Category": "Recreational",
    "Time": "02:21:28.15"
  },
  {
    "Overall": 6,
    "Division": "1/1",
    "Name": "Teresa Wilson",
    "Number": 228,
    "Age": "Open",
    "Gender": "female",
    "Category": "Surfski Single",
    "Time": "01:26:10.51"
  },
  {
    "Overall": 109,
    "Division": "2/5",
    "Name": "Teri Haugen Carlin",
    "Number": 171,
    "Age": "50+",
    "Gender": "female",
    "Category": "SUP Under 14'",
    "Time": "02:05:48.66"
  },
  {
    "Overall": 95,
    "Division": "2/8",
    "Name": "Terry Jamieson",
    "Number": 150,
    "Age": "50+",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "01:57:24.89"
  },
  {
    "Overall": 15,
    "Division": "1/16",
    "Name": "Thadias King",
    "Number": 193,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:30:12.67"
  },
  {
    "Overall": 20,
    "Division": "2/6",
    "Name": "Thomas Wallo, Mary Jo Wallo",
    "Number": 61,
    "Age": "50+",
    "Gender": "mixed",
    "Category": "OC-2",
    "Time": "01:31:35.73"
  },
  {
    "Overall": 155,
    "Division": "1/1",
    "Name": "Tina Leach",
    "Number": 128,
    "Age": "Open",
    "Gender": "female",
    "Category": "Recreational",
    "Time": "02:51:56.12"
  },
  {
    "Overall": 76,
    "Division": "1/2",
    "Name": "TJ Munks",
    "Number": 120,
    "Age": "U16",
    "Gender": "male",
    "Category": "SUP 12'6''",
    "Time": "01:50:19.47"
  },
  {
    "Overall": 133,
    "Division": "2/3",
    "Name": "TOBERMAN GEORGE",
    "Number": 241,
    "Age": "Open",
    "Gender": "male",
    "Category": "Prone (All)",
    "Time": "02:20:52.71"
  },
  {
    "Overall": 29,
    "Division": "4/6",
    "Name": "Tom Chism, Sheila Beuler",
    "Number": 72,
    "Age": "50+",
    "Gender": "mixed",
    "Category": "OC-2",
    "Time": "01:34:50.70"
  },
  {
    "Overall": 58,
    "Division": "10/16",
    "Name": "Tom Gildea",
    "Number": 15,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:43:42.18"
  },
  {
    "Overall": 30,
    "Division": "4/16",
    "Name": "Tom Needham",
    "Number": 31,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:35:20.19"
  },
  {
    "Overall": 66,
    "Division": "2/7",
    "Name": "Toni Bushong",
    "Number": 2,
    "Age": "60+",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "01:45:45.85"
  },
  {
    "Overall": 114,
    "Division": "6/8",
    "Name": "Tracy Buresh-La",
    "Number": 40,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 14'",
    "Time": "02:10:09.23"
  },
  {
    "Overall": 107,
    "Division": "4/8",
    "Name": "Tracy Lum",
    "Number": 110,
    "Age": "50+",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "02:05:12.15"
  },
  {
    "Overall": 118,
    "Division": "2/9",
    "Name": "Veronica Wold",
    "Number": 214,
    "Age": "Open",
    "Gender": "female",
    "Category": "SUP 12'6''",
    "Time": "02:13:54.37"
  },
  {
    "Overall": 143,
    "Division": "4/5",
    "Name": "Viviana Pinilla",
    "Number": 170,
    "Age": "50+",
    "Gender": "female",
    "Category": "SUP Under 14'",
    "Time": "02:26:08.86"
  },
  {
    "Overall": 16,
    "Division": "6/13",
    "Name": "Wade Williford",
    "Number": 141,
    "Age": "Open",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:30:21.64"
  },
  {
    "Overall": 75,
    "Division": "1/1",
    "Name": "Wasana Starkey, Dale Adama",
    "Number": 56,
    "Age": "Open",
    "Gender": "all",
    "Category": "Dory (2 person)",
    "Time": "01:50:07.34"
  },
  {
    "Overall": 132,
    "Division": "6/8",
    "Name": "Wendy Worcester",
    "Number": 227,
    "Age": "50+",
    "Gender": "female",
    "Category": "OC-1",
    "Time": "02:20:16.91"
  },
  {
    "Overall": 49,
    "Division": "8/16",
    "Name": "William Ashford",
    "Number": 7,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:41:28.82"
  },
  {
    "Overall": 61,
    "Division": "1/10",
    "Name": "William Weiss",
    "Number": 235,
    "Age": "50+",
    "Gender": "male",
    "Category": "SUP Under 14'",
    "Time": "01:44:29.77"
  },
  {
    "Overall": 79,
    "Division": "12/16",
    "Name": "Willie Lau",
    "Number": 20,
    "Age": "60+",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:51:10.71"
  },
  {
    "Overall": 12,
    "Division": "5/13",
    "Name": "Zibi Wadzynski",
    "Number": 208,
    "Age": "Open",
    "Gender": "male",
    "Category": "OC-1",
    "Time": "01:28:15.98"
  }
 ];

export default raceResults;